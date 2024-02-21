import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationsViewComponent } from './recommendations-view.component';

describe('RecommendationsViewComponent', () => {
  let component: RecommendationsViewComponent;
  let fixture: ComponentFixture<RecommendationsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendationsViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecommendationsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
