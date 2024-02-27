import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecommendationsService } from '../../../services/recommendations.service';
import { ApClass } from '../../../services/ap-classes.service';

@Component({
  selector: 'app-recommendations-view',
  templateUrl: './recommendations-view.component.html',
  styleUrls: ['./recommendations-view.component.css']
})
export class RecommendationsViewComponent implements OnInit {
  recommendedClasses: ApClass[] = [];
  showLoading: boolean = false;
  showError: boolean = false;
  showRecommendations: boolean = false;
  noRecommendations: boolean = false;
  errorMessage: string = '';
  recommendationsHtml: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recommendationsService: RecommendationsService
  ) {}

  ngOnInit(): void {
    this.showLoading = true;
    this.route.queryParams.subscribe(params => {
      const major1 = params['major1'];
      const major2 = params['major2'];

      if (major1 && major2) {
        this.recommendedClasses = this.recommendationsService.getRecommendations(major1, major2);
        this.showLoading = false;
        if (this.recommendedClasses.length > 0) {
          this.recommendationsHtml = this.recommendedClasses.map(apClass =>
            `<button onclick="window.location='/ap-classes/${apClass.id}'">${apClass.name}</button>`
          ).join('');
          this.showRecommendations = true;
          this.noRecommendations = false;
        } else {
          this.noRecommendations = true;
          this.showRecommendations = false;
        }
      } else {
        this.errorMessage = 'Majors not specified. Please select two majors.';
        this.showError = true;
        this.showLoading = false;
      }
    });
  }

  viewClassDetail(apClass: ApClass): void {
    this.router.navigate(['/ap-classes', apClass.id]);
  }
}
