import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TranslateService, TranslateModule  } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
    RouterOutlet,
    MainContentComponent,
    FooterComponent,
    TranslateModule,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Henrik Sorg';

  constructor(public translate: TranslateService){
    translate.setDefaultLang('en');
    translate.use('de');
  }

  switchLanguage(language: 'de' | 'en'){
    this.translate.use(language);
  }
}
