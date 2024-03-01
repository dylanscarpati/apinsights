import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { MajorsService, Major } from '../../../services/majors.service';

@Component({
  selector: 'app-majors-list',
  templateUrl: './majors-list.component.html',
  styleUrls: ['./majors-list.component.css']
})
export class MajorsListComponent implements OnInit {
  majors: Major[] = [];
  selectedMajors: Major[] = [];

  constructor(
    private majorsService: MajorsService, 
    private router: Router, 
  ) {}

  ngOnInit(): void {
    this.majors = this.majorsService.findAll();
  }

  selectMajor(major: Major): void {
    const index = this.selectedMajors.findIndex(m => m.id === major.id);
  
    if (index >= 0) {
      this.selectedMajors = this.selectedMajors.filter((_, i) => i !== index);
    } else {
      if (this.selectedMajors.length < 2) {
        this.selectedMajors = [...this.selectedMajors, major];
      }
    }
  }

  isSelected(major: Major): boolean {
    return this.selectedMajors.some(m => m.id === major.id);
  }
  
  isSelectionComplete(): boolean {
    return this.selectedMajors.length === 2;
  }

  shouldDisableButton(major: Major): boolean {
    return this.selectedMajors.length === 2 && !this.isSelected(major);
  }

  generateRecommendations(): void {
    if (this.selectedMajors.length === 2) {
      const queryParams: NavigationExtras = {
        queryParams: {
          major1: this.selectedMajors[0].id,
          major2: this.selectedMajors[1].id
        }
      };
      this.router.navigate(['/recommendations'], queryParams);
    }
  }  
}
