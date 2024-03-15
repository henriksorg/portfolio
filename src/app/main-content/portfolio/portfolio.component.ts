import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { ElPolloLocoComponent } from './el-pollo-loco/el-pollo-loco.component';
import { JoinComponent } from './join/join.component';
import {TranslateService, TranslateModule} from "@ngx-translate/core";


// import AOS from "aos";


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectComponent, ElPolloLocoComponent, JoinComponent, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent{
  constructor(private translate: TranslateService){}
}
