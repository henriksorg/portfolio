import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})

export class LanguageService {
  
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('de');
    this.translate.use('en');
  }

  changeLanguage(lang: string): void {
    this.translate.use(lang);
  }
}

