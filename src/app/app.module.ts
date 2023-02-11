import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsComponent } from './components/components.component';
import { AddpacientesComponent } from './components/addpacientes/addpacientes.component';
import { UpdatepacientesComponent } from './components/updatepacientes/updatepacientes.component';
import { ViewpacientessComponent } from './components/viewpacientes/viewpacientes.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    AddpacientesComponent,
    UpdatepacientesComponent,
    ViewpacientessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  provcpfers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
