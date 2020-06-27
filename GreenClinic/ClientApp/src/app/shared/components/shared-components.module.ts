import { NgModule } from '@angular/core';
import { PatientListComponent } from 'app/views/patients/patient-list/patient-list.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AvatarModule } from 'ngx-avatar';

const components =  [ConfirmationModalComponent];

@NgModule({
    imports: [
        MatInputModule,
        RouterModule,
        MatDialogModule,
        AvatarModule
    ],
    declarations: components,
    exports: components
})
export class SharedComponentsModule {

}
