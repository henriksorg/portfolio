import { Component, OnInit } from '@angular/core';
import AOS from "aos";

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent implements OnInit {
  ngOnInit(): void {
    AOS.init({
      once: true
    });
  }
}
