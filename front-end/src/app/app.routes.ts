import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '../website/home-page/home-page.component'; 
import { RecommendationsViewComponent } from '../website/recommendations/recommendations-view/recommendations-view.component';
import { ApClassDetailComponent } from '../website/ap-classes/ap-class-detail/ap-class-detail.component';
import { MajorsListComponent } from '../website/majors/majors-list/majors-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'recommendations', component: RecommendationsViewComponent },
  { path: 'apclass', component: ApClassDetailComponent },
  { path: 'majors', component: MajorsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }