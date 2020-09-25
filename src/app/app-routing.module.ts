import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteOneComponent } from './route-one/route-one.component';
import { RouteTwoComponent } from './route-two/route-two.component';
import { RouteThreeComponent } from './route-three/route-three.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'one'},
  {path: 'one', component: RouteOneComponent},
  {path: 'two', component: RouteTwoComponent},
  {path: 'three', component: RouteThreeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
