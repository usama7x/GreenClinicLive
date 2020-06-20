import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PatientListComponent } from './patient-list/patient-list.component';

const routes: Routes = [
  {
    path: '',
    component: PatientListComponent
  },
  {
    path: 'patients',
    component: PatientListComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
