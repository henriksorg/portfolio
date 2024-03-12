import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-translation',
  standalone: true,
  imports: [],
  templateUrl: './translation.component.html',
  styleUrl: './translation.component.scss'


export class TranslationComponent {
  constructor(public translate: TranslateService){
    translate.setDefaultLang('en');
    translate.use('de');
  }

  switchLanguage(language: 'de' | 'en'){
    this.translate.use(language);
  }
}
