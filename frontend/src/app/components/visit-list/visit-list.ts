import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import { Visit } from '../../models/visit';
import { VisitService } from '../../services/visit';

import { Cafe } from '../../models/cafe';
import { CafeService } from '../../services/cafe';

@Component({
  selector: 'app-visit-list',
  imports: [NgFor],
  templateUrl: './visit-list.html',
  styleUrl: './visit-list.css',
})
export class VisitList implements OnInit {

  visits: Visit[] = [];
  cafes: Cafe[] = [];

  constructor(
    private visitService: VisitService,
    private cafeService: CafeService
  ) {}

  ngOnInit(): void {
    this.visitService.getVisits().subscribe((visitData: Visit[]) => {
      this.visits = visitData;
    });

    this.cafeService.getCafes().subscribe((cafeData: Cafe[]) => {
      this.cafes = cafeData;
    });
  }

  getCafeName(visit: Visit): string {
    if (typeof visit.cafeId !== 'string') {
      return visit.cafeId.name;
    }

    const cafe = this.cafes.find(
      c => c._id?.toString() === visit.cafeId.toString()
    );

    return cafe ? cafe.name : 'Unknown Cafe';
  }

}