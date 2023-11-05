import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

import { NavUserComponent } from './components/nav-user/nav-user.component';
import { PageUserComponent } from './page/page.component';
import { UserRoleComponent } from './components/user-role/user-role.component';
import { UserHotelSearchComponent } from './components/user-hotel-search/user-hotel-search.component';
import { UserListSearchComponent } from './components/user-list-search/user-list-search.component';

@NgModule({
  declarations: [
    NavUserComponent,
    PageUserComponent,
    UserRoleComponent,
    UserHotelSearchComponent,
    UserListSearchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterLink
  ],
  exports: [
    PageUserComponent
  ],
  providers: [],
})
export class UserPage { }
