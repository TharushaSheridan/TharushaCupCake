

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-third-page',
  templateUrl: './third-page.component.html',
  styleUrls: [],
})
export class ThirdPageComponent implements OnInit {
  cupcakeCount!: number;
  selectedFlavor!: string;
  subtotal!: number;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.cupcakeCount = +params['cupcakeCount'];
      this.selectedFlavor = params['flavor'];
      this.calculateSubtotal();
    });
  }

  calculateSubtotal(): void {
    this.subtotal = 2 * this.cupcakeCount;
  }

  goBack(): void {
    this.router.navigate(['/second-page', this.cupcakeCount]);
  }

  sendOrder(): void {

    console.log('Order sent!');
  }
}
