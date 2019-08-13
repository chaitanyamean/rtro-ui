import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";
import { JobDetails } from "../modals/jobDetails";
import { Router } from '@angular/router';

@Component({
  selector: "app-rtro-dashboard",
  templateUrl: "./rtro-dashboard.component.html",
  styleUrls: ["./rtro-dashboard.component.scss"]
})
export class RtroDashboardComponent implements OnInit {
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  locationList=[];
  skills: string;
  file: any;
  key: string;
  imageData: any;
  jobDetails = {
    experience: 0,
    skillSet: [],
    location: "",
    jobTitle: "",
    jobDescription: "hello",
    image: "",
    email: "",
    mobileNumber: null,
    companyName: '',
    walkInChecked: false,
    walkInDate: new Date()
  };
  experience = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  constructor(private common: CommonService, private route: Router) {}

  ngOnInit() {

    this.dropdownList = [
      { skillId: 1, skill: "Mumbai" },
      { skillId: 2, skill: "Bangaluru" },
      { skillId: 3, skill: "Pune" },
      { skillId: 4, skill: "Navsari" },
      { skillId: 5, skill: "New Delhi" }
    ];
    this.selectedItems = [];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'skillId',
      textField: 'skill',
      unSelectAllText: "UnSelect All",
      allowSearchFilter: true,
      enableCheckAll: false
    };
    
    this.getAllData();


  }


  getAllData() {

    this.common.getAllData().subscribe(data => {
      console.log(data);
      this.dropdownList = data['skills'];
      this.locationList = data['location'];

    });
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  onSubmit(f) {
    console.log(f.value);

    console.log(this.file);

    this.jobDetails.skillSet = this.selectedItems;

    if (this.file) {
      this.common.getThes3WorkingUrl().subscribe(data => {
        console.log(data);
        this.imageData = data;
        console.log(this.file);
        console.log(this.file.type);
        console.log(this.imageData.key);
        console.log(this.imageData.url);
        this.sendUrl(this.imageData.url, this.file);
        this.addJob();
      });
    } else {
      this.addJob();
    }

  }

  sendUrl(url, type) {
    this.common.sendUrl(url, type).subscribe(data1 => {
      console.log(data1);
    });
  }

  addJob() {

    if (this.file) {
      this.jobDetails.image = 'https://my-app-123.s3.ap-south-1.amazonaws.com/' + this.imageData.key;
    }

    this.common.addJob(this.jobDetails).subscribe(data => {
      console.log(data);
    });
  }

  onFileChange(event) {
    this.file = event.target.files[0];
  }

  onJobLocation() {
    console.log(this.jobDetails.location);

  }

}
