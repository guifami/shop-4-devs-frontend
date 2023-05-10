import { Component, HostListener, OnInit } from '@angular/core';
import { faSearch, faShoppingCart, faBars, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faTiktok, faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  faSearch = faSearch;
  faShoppingCart = faShoppingCart;
  faBars = faBars;
  faTimes = faTimes;
  faUser = faUser;

  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faTiktok = faTiktok;
  faGithub = faGithub;

  isCollapsed: boolean = false;
  isCartOpened: boolean = false;
  isSearchOpened: boolean = false;
  isUserOpened: boolean = false;

  constructor() {}

  @HostListener('window:scroll') onWindowScroll() {
    if (window.scrollY > 1.5) {
      this.isCollapsed = false;
      this.isCartOpened = false;
      this.isSearchOpened = false;
    } 
  }

  ngOnInit() {
    this.isCollapsed = false;
    this.isCartOpened = false;
    this.isSearchOpened = false;
  }

  menuClick(): void{
    this.isCollapsed = !this.isCollapsed;

    if(this.isSearchOpened)
      this.isSearchOpened = !this.isSearchOpened;

    if(this.isCartOpened)
      this.isCartOpened = !this.isCartOpened;

    if(this.isUserOpened)
      this.isUserOpened = !this.isUserOpened;
  }

  cartClick(): void{
    this.isCartOpened = !this.isCartOpened;

    if(this.isCollapsed)
      this.isCollapsed = !this.isCollapsed;
    
    if(this.isSearchOpened)
      this.isSearchOpened = !this.isSearchOpened;
    
    if(this.isUserOpened)
      this.isUserOpened = !this.isUserOpened;
    
  }

  searchClick(): void{
    this.isSearchOpened = !this.isSearchOpened;

    if(this.isCollapsed)
      this.isCollapsed = !this.isCollapsed;

    if(this.isCartOpened)
      this.isCartOpened = !this.isCartOpened;

    if(this.isUserOpened)
      this.isUserOpened = !this.isUserOpened;
  }

  profileClick(): void{
    this.isUserOpened = !this.isUserOpened;
    if(this.isCollapsed)
    {
      this.isCollapsed = !this.isCollapsed
    }
    if(this.isSearchOpened)
    {
      this.isSearchOpened = !this.isSearchOpened
    }
    if(this.isCartOpened)
    {
      this.isCartOpened = !this.isCartOpened
    }
  }
}
