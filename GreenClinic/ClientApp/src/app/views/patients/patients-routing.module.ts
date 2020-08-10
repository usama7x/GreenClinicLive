import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PatientListComponent } from './patient-list/patient-list.component';
import { AddPatientComponent } from 'app/shared/components/add-patient/add-patient.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PatientListComponent
  },
  {
    path: 'add',
    component: AddPatientComponent,
    data: {breadcrumb: 'addPatient', title: 'Add Patient'}
  },
  {
    path: 'patient/detail',
    component: PatientDetailComponent,
    data: {breadcrumb: 'Detail', title: 'Patient Detial'}
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
