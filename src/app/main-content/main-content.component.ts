import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from '../shared/footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProjectComponent } from './portfolio/project/project.component';
import { JoinComponent } from './portfolio/join/join.component';
import { ElPolloLocoComponent } from './portfolio/el-pollo-loco/el-pollo-loco.component';


@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, 
    RouterOutlet, 
    HeaderComponent, 
    AboveTheFoldComponent, 
    AboutMeComponent, 
    MySkillsComponent,
    PortfolioComponent,
    ProjectComponent,
    ContactComponent,
    JoinComponent,
    ElPolloLocoComponent,    
    HttpClientModule,
    FooterComponent,],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
