import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './views/patients/patient-list/patient-list.component';
import { SampleComponent } from './main/sample/sample.component';

const routes: Routes = [
    {
      path: '',
      component: SampleComponent,
      pathMatch: 'full'
    },
    { path: 'patient',
      loadChildren: () => import('./views/patients/patients.module').then(m => m.PatientsModule)      
    },
    {
      path: 'checkup',
      loadChildren: () => import('./views/checkups/checkups.module').then(m => m.CheckupsModule)
    }, 
    {
      path: 'medicine',
      loadChildren: () => import('./views/medicines/medicines.module').then(m => m.MedicinesModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: false})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
