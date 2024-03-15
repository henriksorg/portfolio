import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { LanguageService } from './language-service/language.service';

import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import AOS from "aos";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule,
        RouterOutlet,
        MainContentComponent,
        FooterComponent, 
        HeaderComponent,
        TranslateModule
      ]
})
export class AppComponent implements OnInit{
  title = 'Henrik Sorg';
  constructor  (private translate: TranslateService) { }
  ngOnInit(): void {
    AOS.init();
  }
}
