import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavService, Menu } from '../../../../services/nav.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

  public language: boolean = false;

  public languages: any[] = [{
    language: 'اللغة العربية',
    code: 'ar',
    type: 'US',
    icon: 'sa'
  },
  {
    language: 'Español',
    code: 'es',
    icon: 'es'
  },
  {
    language: 'Français',
    code: 'fr',
    icon: 'fr'
  },
  {
    language: 'Português',
    code: 'pt',
    type: 'BR',
    icon: 'pt'
  }]

  public selectedLanguage: any = {
    language: 'اللغة العربية',
    code: 'ar',
    type: 'AR',
    icon: 'sa'
  }
  
  constructor(private translate: TranslateService,
    public navServices: NavService) { }

  ngOnInit() {
  }

  changeLanguage(lang) {
    this.translate.use(lang.code)
    this.selectedLanguage = lang;
  }

}
