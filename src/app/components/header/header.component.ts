import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // encapsulation:ViewEncapsulation.None

})
export class HeaderComponent {
  visibleSidebar2: any;

  currentLang:any
data:any
  constructor(
    public translate: TranslateService,
    private _Router: Router,
  ) {
    translate.setDefaultLang('en');
    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.translate.use(this.currentLang);

   
  }
  useLanguage(language: string): void {
    this.translate.use(language);
  }

  changeCurrentLang(lang: string) {
    window.location.reload();
    const body = document.getElementsByTagName('body');
    if (lang == 'ar') {
      body[0].setAttribute('dir', 'rtl');
      this.translate.use(lang);
      localStorage.setItem('currentLang', 'ar');
    } else {
      this.translate.use(lang);
      body[0].setAttribute('dir', 'ltr');
      localStorage.setItem('currentLang', 'en');
    }
  }

  ngOnInit(): void {
    let lang = localStorage.getItem('currentLang');
    const body = document.getElementsByTagName('body');
    if (lang == 'ar') {
      body[0].setAttribute('dir', 'rtl');
      this.translate.use(lang);
      localStorage.setItem('currentLang', 'ar');
    } else {
      body[0].setAttribute('dir', 'ltr');
      localStorage.setItem('currentLang', 'en');
    }
  }
}
