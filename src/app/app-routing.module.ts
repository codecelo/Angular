import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddpacientesComponent } from './components/addpacientes/addpacientes.component';
import { UpdatepacientesComponent } from './components/updatepacientes/updatepacientes.component';
import { ViewpacientessComponent } from './components/viewpacientes/viewpacientes.component';


const routes: Routes = [
  { path: '', component: ViewpacientessComponent },
  { path: 'add', component: AddpacientesComponent },
  { path: 'update/:cpf', component: UpdatepacientesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
