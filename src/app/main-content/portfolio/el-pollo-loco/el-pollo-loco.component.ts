import { Component } from '@angular/core';
import {TranslateService, TranslateModule} from "@ngx-translate/core";


@Component({
  selector: 'app-el-pollo-loco',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './el-pollo-loco.component.html',
  styleUrl: './el-pollo-loco.component.scss'
})
export class ElPolloLocoComponent {
  constructor(private translate: TranslateService){}
}
