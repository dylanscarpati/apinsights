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
  recommendationsHtml: string = ''; // This will hold the HTML content

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private recommendationsService: RecommendationsService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const major1 = params['major1'];
      const major2 = params['major2'];

      if (major1 && major2) {
        const recommendedClasses = this.recommendationsService.getRecommendations(major1, major2);
        this.generateRecommendationsHtml(recommendedClasses);
      } else {
        this.recommendationsHtml = '<p>Majors not specified. Please select two majors.</p>';
      }
    });
  }

  generateRecommendationsHtml(recommendedClasses: ApClass[]): void {
    this.recommendationsHtml = recommendedClasses.map(rec => {
      const difficultyClass = this.getDifficultyClass(rec.difficulty);
      const difficultyMessage = this.getDifficultyMessage(rec.difficulty);
      return `
        <div class="recommendation-bubble">
          <div class="bubble-header">
            <span class="bubble-category ${difficultyClass}" title="${difficultyMessage}">${rec.difficulty}</span>
            <h3 class="bubble-title">${rec.name}</h3>
          </div>
          <p class="bubble-description">${rec.description}</p>
        </div>
      `;
    }).join('');
  }

getDifficultyClass(difficulty: number): string {
  switch(difficulty) {
    case 5: return 'difficulty-5';
    case 4: return 'difficulty-4';
    case 3: return 'difficulty-3';
    case 2: return 'difficulty-2';
    case 1: return 'difficulty-1';
    default: return '';
  }
}

getDifficultyMessage(difficulty: number): string {
  switch(difficulty) {
    case 5: return 'This AP class is considered one of the hardest.';
    case 4: return 'This AP class is challenging.';
    case 3: return 'This AP class is moderately difficult.';
    case 2: return 'This AP class is relatively easy.';
    case 1: return 'This AP class is the least difficult.';
    default: return 'Difficulty rating not available.';
  }
}

editMajors(): void {
  this.router.navigate(['/majors']);
}
}
