import { Component } from '@angular/core';
import { MenuItems } from '../../interfaces/menu-items';
import {Router } from '@angular/router';

@Component({
  selector: 'app-nav-admin',
  templateUrl: './nav-user.component.html',
  styleUrls: ['./nav-user.component.css']
})
export class NavUserComponent {
  constructor(private router: Router){}

  menuItems: MenuItems[] = [
    {
      title: 'Buscar Hoteles',
      iconPath: 'assets/images/iconSearch.svg',
      path:'/user/search-hotel'
    },
    {
      title: 'Ver Reservas',
      iconPath: 'assets/images/iconList.svg',
      path:'/user/reserves'
    },
    {
      title: 'Salir',
      iconPath: 'assets/images/personExit.svg',
      path:'/login'
    }
  ];

  showSubOptions: boolean[] = Array(this.menuItems.length).fill(false);

  toggleSubOptions(index: number) {

    if (this.menuItems[index].subOptions) {
      this.showSubOptions[index] = !this.showSubOptions[index];
    }
  }


}
