import { Component, NgModule} from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {LanguageService} from './../../language-service/language.service';




@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, 
    MatMenuModule, 
    MatIconModule
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public languageService: LanguageService){
    // this.languageService.changeLanguage('de')
  }
}
