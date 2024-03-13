import { Component, OnInit, AfterViewInit  } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { ElPolloLocoComponent } from './el-pollo-loco/el-pollo-loco.component';
import { JoinComponent } from './join/join.component';

import AOS from 'aos';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent, ElPolloLocoComponent, JoinComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent implements AfterViewInit {
  ngAfterViewInit(){
    AOS.init(); // Initialisiert AOS
  }
}
