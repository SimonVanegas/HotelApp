import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

import { NavAdminComponent } from './components/navAdmin/navAdmin.component';
import { PageAdminComponent } from './page/page.component';
import { UserRoleComponent } from './components/user-role/user-role.component';
import { AdminHotelCreateComponent } from './components/admin-hotel-create/admin-hotel-create.component';
import { AdminHotelEditComponent } from './components/admin-hotel-edit/admin-hotel-edit.component';
import { AdminRoomCreateComponent } from './components/admin-rooms-create/admin-room-create.component';
import { ReserveListComponent } from './components/admin-reserve-list/reserve-list.component';

@NgModule({
  declarations: [
    NavAdminComponent,
    PageAdminComponent,
    UserRoleComponent,
    AdminHotelCreateComponent,
    AdminHotelEditComponent,
    AdminRoomCreateComponent,
    ReserveListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterLink
  ],
  exports: [
    PageAdminComponent
  ],
  providers: [],
})
export class AdminPage { }
