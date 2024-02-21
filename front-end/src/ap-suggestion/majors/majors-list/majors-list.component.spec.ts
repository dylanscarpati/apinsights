import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorsListComponent } from './majors-list.component';

describe('MajorsListComponent', () => {
  let component: MajorsListComponent;
  let fixture: ComponentFixture<MajorsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MajorsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MajorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
