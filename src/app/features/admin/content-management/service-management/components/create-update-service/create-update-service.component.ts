import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Service } from 'src/app/shared/model/service.model';
import { FileService } from '../../../../../../shared/services/file.service';
import { ServiceService } from '../../services/service.service';
import { environment } from '../../../../../../../environments/environment';

@Component({
  selector: 'app-create-update-service',
  templateUrl: './create-update-service.component.html',
  styleUrls: ['./create-update-service.component.scss']
})
export class CreateUpdateServiceComponent implements OnInit {

  files: File[] = [];
  public createServiceForm: FormGroup;
  server: string;

  constructor(private fileService: FileService,
    public dialogRef: MatDialogRef<CreateUpdateServiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Service,
    private fb: FormBuilder,
    private serviceService: ServiceService) {
    this.server = environment.base_url;
    if (data) {
      this.createServiceForm = this.fb.group({
        name: [data?.name, [Validators.required]],
      });
    }
    else
      this.createServiceForm = this.fb.group({
        name: ['', [Validators.required]],
      });
  }

  ngOnInit(): void {
  }

  onSelect(event) {
    console.log(event);
    this.files = [];
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  createService = () => {
    if (this.files.length == 1) this.fileService.uploadFile(this.files[0]).subscribe(
      (res: any) => {
        const service = this.createServiceForm.getRawValue();
        service.image = res.id;
        this.serviceService.create(service).subscribe(
          res => this.dialogRef.close(res)
        )
      }
    )
  }

  updateService = () => {
    if (this.files.length == 1) this.fileService.uploadFile(this.files[0]).subscribe(
      (res: any) => {
        const service = this.createServiceForm.getRawValue();
        service.image = res.id;
        this.serviceService.update(this.data.id, service).subscribe(
          res => this.dialogRef.close(res)
        )
      }
    ); else {
      const service = this.createServiceForm.getRawValue();
      this.serviceService.update(this.data.id, service).subscribe(
        res => this.dialogRef.close(res)
      )
    }
  }

}
