

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: [],
})
export class SecondPageComponent implements OnInit {
  cupcakeCount!: number;
  flavors: string[] = ['Vanilla', 'Chocolate', 'Red Velvet', 'Salted Caramel', 'Coffee'];
  selectedFlavor: string = 'Vanilla';
  subtotal!: number;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.cupcakeCount = +params['cupcakeCount'];
      this.calculateSubtotal();
    });
  }

  calculateSubtotal(): void {
    this.subtotal = 2 * this.cupcakeCount;
    console.log('Subtotal calculated:', this.subtotal);
  }

  goBack(): void {
    this.router.navigate(['']);
  }



}
