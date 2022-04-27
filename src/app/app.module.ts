import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JobDetailsHeaderComponent } from './job-details-header/job-details-header.component';
import { JobDetailsDescriptionComponent } from './job-details-description/job-details-description.component';
import { SimilarJobsComponent } from './similar-jobs/similar-jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    JobDetailsComponent,
    HeaderComponent,
    FooterComponent,
    JobDetailsHeaderComponent,
    JobDetailsDescriptionComponent,
    SimilarJobsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
