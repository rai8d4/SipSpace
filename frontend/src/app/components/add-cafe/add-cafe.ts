import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { CafeService } from '../../services/cafe';

@Component({
  selector: 'app-add-cafe',
  imports: [FormsModule],
  templateUrl: './add-cafe.html',
  styleUrl: './add-cafe.css',
})
export class AddCafe {

  name = '';
  location = '';

  constructor(
    private cafeService: CafeService,
    private router: Router
  ) {}

  onSubmit() {

    const newCafe = {
      name: this.name,
      location: this.location
    };

    this.cafeService.addCafe(newCafe).subscribe(() => {
      this.router.navigate(['/cafes']);
    });

  }

}