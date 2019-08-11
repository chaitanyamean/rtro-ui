import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career-guidance',
  templateUrl: './career-guidance.component.html',
  styleUrls: ['./career-guidance.component.scss']
})
export class CareerGuidanceComponent implements OnInit {
  public images = {};
  constructor() { }

  ngOnInit() {
    this.images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  }

}
