import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApClassesListComponent } from './ap-classes-list.component';

describe('ApClassesListComponent', () => {
  let component: ApClassesListComponent;
  let fixture: ComponentFixture<ApClassesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApClassesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApClassesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
