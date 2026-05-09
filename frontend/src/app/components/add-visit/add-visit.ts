import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

import { VisitService } from '../../services/visit';
import { CafeService } from '../../services/cafe';
import { Cafe } from '../../models/cafe';

@Component({
  selector: 'app-add-visit',
  imports: [FormsModule, NgFor],
  templateUrl: './add-visit.html',
  styleUrl: './add-visit.css',
})
export class AddVisit implements OnInit {

  cafes: Cafe[] = [];

  date = '';
  cafeId = '';
  drinkName = '';
  drinkPrice = 0;
  drinkRating = 0;
  ambiance = '';
  productivityLevel = 0;
  notes = '';

  constructor(
    private visitService: VisitService,
    private cafeService: CafeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cafeService.getCafes().subscribe((data) => {
      this.cafes = data;
    });
  }

  onSubmit() {
    const newVisit = {
      date: this.date,
      cafeId: this.cafeId,
      drinkName: this.drinkName,
      drinkPrice: this.drinkPrice,
      drinkRating: this.drinkRating,
      ambiance: this.ambiance,
      productivityLevel: this.productivityLevel,
      notes: this.notes
    };

    this.visitService.addVisit(newVisit).subscribe(() => {
      this.router.navigate(['/visits']);
    });
  }

}