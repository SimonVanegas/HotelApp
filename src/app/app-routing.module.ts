import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './login/page/page.component';
import { PageAdminComponent } from './admin/page/page.component';
import { AdminHotelCreateComponent } from './admin/components/admin-hotel-create/admin-hotel-create.component';
import { ReserveListComponent } from './admin/components/admin-reserve-list/reserve-list.component';
import { AdminHotelEditComponent } from './admin/components/admin-hotel-edit/admin-hotel-edit.component';
import { AdminRoomCreateComponent } from './admin/components/admin-rooms-create/admin-room-create.component';
import { PageUserComponent } from './user/page/page.component';
import { UserHotelSearchComponent } from './user/components/user-hotel-search/user-hotel-search.component';
import { UserListSearchComponent } from './user/components/user-list-search/user-list-search.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:PageLoginComponent},
  {path:'admin', component:PageAdminComponent,
  children:[
    {path:'create-hotel', component:AdminHotelCreateComponent},
    {path:'edit-hotel', component:AdminHotelEditComponent},
    {path:'edit-room', component:AdminRoomCreateComponent},
    {path:'list-reserve', component:ReserveListComponent},
  ]},
  {path:'user', component:PageUserComponent,
  children:[
    {path:'search-hotel', component:UserHotelSearchComponent},
    {path:'list-search', component:UserListSearchComponent}
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
