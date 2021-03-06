import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from './view/home.component'
import {ClassComponent } from './view/class.component'
import{EventComponent} from './view/event.component'
import {AboutComponent} from './view/about.component'
import{ContactComponent}  from './view/contact.component'
import{BlogComponent}  from './view/blog.component'
import { from } from 'rxjs';
const routes: Routes = [

  {path:'',component:HomeComponent,data: {title: 'Home'}},
  {path:'class',component:ClassComponent,data: {title: 'Class'}},
  {path:'event',component:EventComponent,data: {title: 'Events'}},
  {path:'about',component:AboutComponent,data: {title: 'About'}},
  {path:'contact',component:ContactComponent,data: {title: 'Contact'}},
  {path:'blog',component:BlogComponent,data: {title: 'Blog'}}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
