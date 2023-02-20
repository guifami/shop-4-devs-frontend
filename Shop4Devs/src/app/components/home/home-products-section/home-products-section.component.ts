import { Component, OnInit } from '@angular/core';
import { faShoppingCart, faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-products-section',
  templateUrl: './home-products-section.component.html',
  styleUrls: ['./home-products-section.component.css']
})
export class HomeProductsSectionComponent implements OnInit {

  faShoppingCart = faShoppingCart;
  faEye = faEye;

  constructor() { }

  ngOnInit() {
  }

}
