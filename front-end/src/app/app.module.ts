import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomePageComponent } from '../website/home-page/home-page.component';
import { RecommendationsViewComponent } from '../website/recommendations/recommendations-view/recommendations-view.component';
import { ApClassDetailComponent } from '../website/ap-classes/ap-class-detail/ap-class-detail.component';
import { MajorsListComponent } from '../website/majors/majors-list/majors-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RecommendationsViewComponent,
    ApClassDetailComponent,
    MajorsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
