import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private router: Router) {}

  navigateToRecommendations() {
    this.router.navigateByUrl('/recommendations'); // Adjust the URL to where you want the Get Started button to navigate to
  }
  

}