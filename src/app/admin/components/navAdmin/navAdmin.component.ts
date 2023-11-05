import { Component } from '@angular/core';
import { MenuItems } from '../../interfaces/menu-items';
import {Router } from '@angular/router';

@Component({
  selector: 'app-nav-admin',
  templateUrl: './navAdmin.component.html',
  styleUrls: ['./navAdmin.component.css']
})
export class NavAdminComponent {
  constructor(private router: Router){}

  menuItems: MenuItems[] = [
    {
      title: 'Administrar Hoteles',
      iconPath: 'assets/images/iconHotel.svg',
      subOptions: ['Crear Hoteles', 'Modificar Hoteles']
    },
    {
      title: 'Administrar Habitaciones',
      iconPath: 'assets/images/iconBed.svg',
      subOptions: ['Modificar Habitaciones']
    },
    {
      title: 'Listar Reservas',
      iconPath: 'assets/images/iconList.svg',
      path:'/admin/list-reserve'
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

  ejecutarAccion(subOpcion: string) {
    switch (subOpcion) {
      case 'Crear Hoteles':
        this.router.navigate(['/admin/create-hotel'])
        break;
      case 'Modificar Hoteles':
        this.router.navigate(['/admin/edit-hotel'])
        break;
      case 'Crear Habitaciones':
        this.router.navigate(['/admin/create-room'])
        break;
      case 'Modificar Habitaciones':
          this.router.navigate(['/admin/edit-room'])
        break;
      // Agregar más casos según las subopciones que tengas
    }
  }
}
