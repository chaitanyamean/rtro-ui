import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";
import { Router } from "@angular/router";
import { Subscription } from 'rxjs';

@Component({
  selector: "app-alljobs-list",
  templateUrl: "./alljobs-list.component.html",
  styleUrls: ["./alljobs-list.component.scss"]
})
export class AlljobsListComponent implements OnInit {
  dropdownList = [];
  locationList = [];
  selectedItems = [];
  dropdownSettings = {};
  jobDetails: any;
  selectedJobDetails: any;
  isJobShow: boolean;
  isMobile: boolean;
  experienceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  requestData = {
    skillSet: [],
    experience: "",
    location: ""
  };
  jobsSub: Subscription;
  constructor(private common: CommonService, private router: Router) {}

  ngOnInit() {
    console.log(window.navigator.userAgent);
    this.dropdownSettings = {
      singleSelection: false,
      idField: "skillId",
      textField: "skill",
      unSelectAllText: "UnSelect All",
      allowSearchFilter: true,
      enableCheckAll: false
    };

    this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    this.getAllData();
    this.getAllJobList();
    this.isJobShow = false;
  }

  getAllData() {
    this.common.getAllData().subscribe(data => {
      console.log(data);
      this.dropdownList = data["skills"];
      this.locationList = data["location"];
    });
  }

  getAllJobList() {
    // this.common.getAllJobs();
    this.common.getAllJobs().subscribe(data => {
         this.jobDetails = data['data'];

    })
    // this.jobsSub =  this.common.getJobUpdatedListener().subscribe(data => {
    //   console.log(data);
    // });
  }

  onJobList(data) {
    if (this.isMobile) {
      this.router.navigate(["/mobile-view-job-list", data.jobId]);
    } else {
      this.isJobShow = true;
      this.selectedJobDetails = data;
      console.log("click", this.selectedJobDetails);
    }
  }

  onItemSelect(item: any) {
    console.log("itemselect", item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  searchJobs() {
    this.getAllSkillSets();
    console.log(this.requestData);
    this.common.getJobQueryResults(this.requestData).subscribe(data => {
      console.log(data);
    });
  }

  getAllSkillSets() {
    for (const item of this.selectedItems) {
      this.requestData.skillSet.push(item.skill);
    }
  }
}
