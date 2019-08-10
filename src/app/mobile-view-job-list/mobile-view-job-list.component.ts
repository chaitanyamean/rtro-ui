import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mobile-view-job-list',
  templateUrl: './mobile-view-job-list.component.html',
  styleUrls: ['./mobile-view-job-list.component.scss']
})
export class MobileViewJobListComponent implements OnInit {

  jobId: string;
  selectedJobDetails: any;

  constructor(private common: CommonService, private route: ActivatedRoute) {

   this.jobId =  this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.getMobileViewData();
  }

  getMobileViewData() {

    this.common.getMobileViewData(this.jobId).subscribe(data => {
    console.log(data);
    this.selectedJobDetails = data[0];

    });

  }

}
