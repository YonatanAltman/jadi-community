import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';


const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'about', component: HelloComponent },
  { path: 'goals', component: HelloComponent },
  { path: 'register', component: HelloComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
