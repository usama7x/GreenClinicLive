import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './views/patients/patient-list/patient-list.component';

const routes: Routes = [
    { path: 'patients',
      loadChildren: () => import('./views/patients/patients.module').then(m => m.PatientsModule)      
    }    
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: false})],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
