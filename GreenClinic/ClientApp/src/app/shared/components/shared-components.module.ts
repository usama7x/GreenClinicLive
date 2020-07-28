import { NgModule } from '@angular/core';
import { PatientListComponent } from 'app/views/patients/patient-list/patient-list.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { AvatarModule } from 'ngx-avatar';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatIcon} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {NgxStripeModule} from 'ngx-stripe';

@NgModule({
    imports: [
        MatDatepickerModule,
        MatToolbarModule,
        NgxStripeModule,
        MatRadioModule,
        MatButtonModule,
        MatCardModule,
        MatSortModule,
        MatPaginatorModule,
        MatIconModule,
        MatTableModule,
        MatToolbarModule,
        BsDatepickerModule.forRoot(),      
        MatInputModule,
        RouterModule,
        MatDialogModule,
        AvatarModule,
        MatIconModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

    ],
    declarations: [ConfirmationModalComponent, AddPatientComponent],
    exports: [ConfirmationModalComponent, AddPatientComponent],
    entryComponents: [ConfirmationModalComponent]
})
export class SharedComponentsModule {

}
