import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  url = 'http://localhost:3000/jobRoutes';
  // url = 'https://rtro-application.herokuapp.com/jobRoutes';
  httpOptions: any;
  responseData = new Subject<any>();

  constructor(private httpClient: HttpClient) { }

  getThes3WorkingUrl() {

    const response = this.httpClient.get(this.url);

    return response;
  }

  sendUrl(url, file) {

    console.log(file.type);

    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': file.type
      })
    };

    const response = this.httpClient.put(url, file, this.httpOptions);

    return response;
  }

  public addJob(jobDetails) {
    const response = this.httpClient.post(this.url + '/addjob', jobDetails);
    return response;
  }

  public getAllData() {
    const response = this.httpClient.get(this.url + '/skillsandlocation');
    return response;
  }

  public getAllJobs() {
    const response = this.httpClient.get<{error: boolean, message: string, status: number, data: any}>(this.url + '/getAlljobs')
    .subscribe((jobList) => {
      this.responseData.next(jobList);
    });
    // return response;
    // this.responseData.next(response);
    // return this.responseData.asObservable();
  }

  getJobUpdatedListener() {
    this.responseData.asObservable();
  }

  public getMobileViewData(jobId) {
    const response = this.httpClient.get(this.url + '/getMobileView/' + jobId);
    return response;
  }

  public getJobQueryResults(obj) {
    const response = this.httpClient.post(this.url + '/getSearchList', obj);
    return response;
  }
}
