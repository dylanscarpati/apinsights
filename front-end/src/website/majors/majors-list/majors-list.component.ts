import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MajorsService } from '../../../services/majors.service';
import { Major } from '../../../models/major.model';

@Component({
  selector: 'app-majors-list',
  templateUrl: './majors-list.component.html',
  styleUrls: ['./majors-list.component.css']
})
export class MajorsListComponent implements OnInit {
  majors: Major[] = [];
  selectedMajors: Major[] = [];

  constructor(private majorsService: MajorsService, private router: Router) { }

  ngOnInit(): void {
    this.majorsService.getAllMajors().subscribe(data => {
      this.majors = data;
    });
  }

  selectMajor(major: Major): void {
    const index = this.selectedMajors.indexOf(major);
    if (index >= 0) {
      this.selectedMajors.splice(index, 1);
    } else if (this.selectedMajors.length < 2) {
      this.selectedMajors.push(major);
    }
  }

  isSelected(major: Major): boolean {
    return this.selectedMajors.includes(major);
  }

  generateRecommendations(): void {
    if (this.selectedMajors.length === 2) {
      this.router.navigate(['/recommendations'], { 
        queryParams: { 
          major1: this.selectedMajors[0].id,
          major2: this.selectedMajors[1].id
        } 
      });
    }
  }
}
