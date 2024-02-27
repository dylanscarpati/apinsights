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
  loading: boolean = false;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recommendationsService: RecommendationsService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.route.queryParams.subscribe(params => {
      const major1 = params['major1'];
      const major2 = params['major2'];

      if (major1 && major2) {
        this.recommendedClasses = this.recommendationsService.getRecommendations(major1, major2);
        this.loading = false;
      } else {
        this.error = 'Majors not specified. Please select two majors.';
        this.loading = false;
      }
    });
  }

  viewClassDetail(apClass: ApClass): void {
    this.router.navigate(['/ap-classes', apClass.id]);
  }
}
