

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: [],
})
export class FirstPageComponent {
  constructor(private router: Router) {}

  navigateToSecondPage(cupcakeCount: number): void {
    this.router.navigate(['/second-page', cupcakeCount]);
  }
}
