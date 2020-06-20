import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientsRoutingModule } from './patients-routing.module';
import { MatTableModule, MatInputModule, MatIconModule, MatCardModule, MatButtonModule, MatCheckboxModule, MatDialogModule, MatTooltipModule, MAT_DIALOG_DEFAULT_OPTIONS, MatSortModule, MatPaginatorModule, MatToolbarModule } from '@angular/material';
import { ValidatorsModule } from 'ngx-validators'; 
import { ReactiveFormsModule } from '@angular/forms';
import { AvatarModule } from 'ngx-avatar';
import { FuseSharedModule } from '@fuse/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [PatientListComponent],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    MatTableModule,
    ValidatorsModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatTooltipModule,
    AvatarModule,
    MatSortModule,
    MatPaginatorModule,
    MatToolbarModule,
    FuseSharedModule,
    NgSelectModule

  ]
})
export class PatientsModule { }
