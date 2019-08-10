import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbButtonLabel, NgbButtonsModule, NgbCheckBox, NgbRadio, NgbRadioGroup } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RtroDashboardComponent } from './rtro-dashboard/rtro-dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CKEditorModule } from 'ckeditor4-angular';
import { AlljobsListComponent } from './alljobs-list/alljobs-list.component';
import { HeaderComponent } from './shared/header/header.component';
import { MobileViewJobListComponent } from './mobile-view-job-list/mobile-view-job-list.component';
import { CareerGuidanceComponent } from './career-guidance/career-guidance.component';
// import { CKEditorModule } from 'ngx-ckeditor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    RtroDashboardComponent,
    AlljobsListComponent,
    HeaderComponent,
    MobileViewJobListComponent,
    CareerGuidanceComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CKEditorModule,
    NgbModule,
    NgbButtonsModule,
    NgMultiSelectDropDownModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
