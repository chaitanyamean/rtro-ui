import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  getAllJobs() {
    console.log();
    this.route.navigate(['/alljob-list']);
  }

  navigateToCareerGuidance() {
    this.route.navigate(['/career-guidance']);
  }
}
