import { Component, OnInit, AfterViewInit  } from '@angular/core';
import {TranslateService, TranslateModule} from "@ngx-translate/core";
import AOS from "aos";
import { NavigationEnd, Router } from '@angular/router';



@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit, AfterViewInit {
  constructor(private translate: TranslateService, private router: Router) { }

  ngOnInit(): void {
    AOS.init();
  }

  ngAfterViewInit(): void {
  }
}
