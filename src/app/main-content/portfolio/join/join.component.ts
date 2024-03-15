import { Component } from '@angular/core';
import {TranslateService, TranslateModule} from "@ngx-translate/core";


@Component({
  selector: 'app-join',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './join.component.html',
  styleUrl: './join.component.scss'
})
export class JoinComponent {
  constructor(private translate: TranslateService){}
}
