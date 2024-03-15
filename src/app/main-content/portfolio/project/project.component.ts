import { Component } from '@angular/core';
import {TranslateService, TranslateModule} from "@ngx-translate/core";


@Component({
  selector: 'app-project',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {
  constructor(private translate: TranslateService){}
}
