import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import { Cafe } from '../../models/cafe';
import { CafeService } from '../../services/cafe';

@Component({
  selector: 'app-cafe-list',
  imports: [NgFor],
  templateUrl: './cafe-list.html',
  styleUrl: './cafe-list.css',
})
export class CafeList implements OnInit {

  cafes: Cafe[] = [];

  constructor(private cafeService: CafeService) {}

  ngOnInit(): void {
    this.cafeService.getCafes().subscribe((data) => {
      this.cafes = data;
    });
  }

}