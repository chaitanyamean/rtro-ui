import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career-guidance',
  templateUrl: './career-guidance.component.html',
  styleUrls: ['./career-guidance.component.scss']
})
export class CareerGuidanceComponent implements OnInit {
  public model = {};
  constructor() { }

  ngOnInit() {
    this.model = {
      left: true,
      middle: false,
      right: false
    };
  }

}
