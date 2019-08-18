import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../common.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  public jobDetails: any;
  public selectedJobDetails: any;
  public isJobShow: boolean;
  private isMobile: boolean;
  constructor(private common: CommonService, private router: Router){ }

  ngOnInit() {
    this.getAllJobList();
  }

  getAllJobList() {
    this.common.getAllJobs().subscribe(data => {
         this.jobDetails = data['data'];
         console.log(this.jobDetails);


    });
  }

  onJobList(data) {
    if (this.isMobile) {
      this.router.navigate(["/mobile-view-job-list", data.jobId]);
    } else {
      this.isJobShow = true;
      this.selectedJobDetails = data;
    }
  }

  deleteJobList(selectedJob){
    this.common.deleteJobList(selectedJob.jobId).subscribe((data) => {
      console.log("deleted successfully");
      window.alert("deleted successfully");
    });
  }

}
