import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PatientListComponent } from './patient-list/patient-list.component';
import { AddPatientComponent } from 'app/shared/components/add-patient/add-patient.component';

const routes: Routes = [
  {
    path: '',
    component: PatientListComponent
  },
  {
    path: 'add',
    component: AddPatientComponent,
    data: {breadcrumb: 'addPatient', title: 'Add Patient'}
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
