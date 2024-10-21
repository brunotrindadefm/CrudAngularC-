import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @Output() sidebarToggled = new EventEmitter<boolean>();
  private isSideBarOpen: boolean = false

  openSideBar(): void {
    this.isSideBarOpen = !this.isSideBarOpen;
    this.sidebarToggled.emit(this.isSideBarOpen);
  }
}
