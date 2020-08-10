import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SelectPatientComponent } from './select-patient/select-patient.component';

const routes: Routes = [
    {
        path: '',
        component: SelectPatientComponent,
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
  export class CheckupsRoutingModule { }
