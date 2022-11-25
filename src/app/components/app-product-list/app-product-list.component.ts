import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './app-product-list.component.html',
  styleUrls: ['./app-product-list.component.css'],
})
export class AppProductComponent implements OnInit {
  constructor() {}

  products = [
    { id: 1, name: 'Phone', price: 1000 },
    { id: 2, name: 'Phone1', description: 'description', price: 7000 },
    { id: 3, name: 'Phone2', price: 400 },
  ];

  share() {
    alert('Product');
  }
  ngOnInit(): void {}
}
