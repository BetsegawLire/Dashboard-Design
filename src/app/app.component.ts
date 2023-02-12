import { Component } from '@angular/core';
// import { MatSidenav } from '@angular/material/sidenav'

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sidenav-trial';
  isSideNavCollapsed = false
  screenWidth = 0

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth
    this.isSideNavCollapsed = data.collapsed
  }
}
