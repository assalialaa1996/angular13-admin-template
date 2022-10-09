import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MapsAPILoader } from '@agm/core';

declare var google;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, AfterViewInit {
  @ViewChild('search') searchElementRef: ElementRef;
  step = 1;
  show: boolean = false;
  public registerForm: FormGroup;
  address: string;
  web_site: string;
  name: string;
  zip_code: string;
  latitude: number;
  longitude: number;
  zoom: number;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      longitude: [this.longitude, Validators.required],
      latitude: [this.latitude, Validators.required],
      name: ['', Validators.required],
      sterilization: [false, Validators.required],
    });
  }

  findAdress() {
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          // some details
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          console.log(place)
          this.address = place.formatted_address;
          this.web_site = place.website;
          this.name = place.name;
          this.zip_code = place.address_components[place.address_components.length - 1].long_name;
          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
          this.registerForm.patchValue({
            longitude: this.longitude, 
            latitude: this.latitude, 
          });
        });
      });
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.findAdress()
  }

  nextStep = () => {
    this.step++;
    this.findAdress();
  }

  previousStep = () => this.step--


  register = () => {
    this.authService.register(this.registerForm.getRawValue()).subscribe(
      res => {
        this.router.navigate(['/auth/login-laundry']);
      }
    )
  }

  showPassword() {
    this.show = !this.show;
  }

}
