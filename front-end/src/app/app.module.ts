import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomePageComponent } from '../website/home-page/home-page.component';
import { RecommendationsViewComponent } from '../website/recommendations/recommendations-view/recommendations-view.component';
import { ApClassDetailComponent } from '../website/ap-classes/ap-class-detail/ap-class-detail.component';
import { MajorsListComponent } from '../website/majors/majors-list/majors-list.component';
import { AppRoutingModule } from './app.routes';
import { RecommendationsService } from '../services/recommendations.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RecommendationsViewComponent,
    ApClassDetailComponent,
    MajorsListComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
  ],
  exports: [
    RecommendationsViewComponent,
  ],
  providers: [
    RecommendationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
