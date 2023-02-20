import { Component, OnInit } from '@angular/core';
import { faShoppingCart, faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-recent-products',
  templateUrl: './home-recent-products.component.html',
  styleUrls: ['./home-recent-products.component.css']
})
export class HomeRecentProductsComponent implements OnInit {

  faShoppingCart = faShoppingCart;
  faEye = faEye;
  
  constructor() { }

  ngOnInit() {
  }

}
