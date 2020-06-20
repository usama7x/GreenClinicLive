import { NgModule } from '@angular/core';
import { PatientListComponent } from 'app/views/patients/patient-list/patient-list.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { MatInputModule, MatDialogModule } from '@angular/material';
import { RouterModule } from '@angular/router';

const components =  [ConfirmationModalComponent];

@NgModule({
    imports: [
        MatInputModule,
        RouterModule,
        MatDialogModule
    ],
    declarations: components,
    exports: components
})
export class SharedComponentsModule {

}
