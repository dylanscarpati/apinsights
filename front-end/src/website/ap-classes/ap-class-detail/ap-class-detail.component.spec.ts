import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApClassDetailComponent } from './ap-class-detail.component';

describe('ApClassDetailComponent', () => {
  let component: ApClassDetailComponent;
  let fixture: ComponentFixture<ApClassDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApClassDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApClassDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
