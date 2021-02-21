import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavbarComponent implements OnInit {
  isActive: boolean;

  constructor() {
    this.isActive = true;
  }

  toggleMenu() {
    this.isActive = !this.isActive;
  }

  ngOnInit(): void {}
}
