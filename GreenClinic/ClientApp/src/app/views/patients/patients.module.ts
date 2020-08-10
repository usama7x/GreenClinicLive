import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientsRoutingModule } from './patients-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ValidatorsModule } from 'ngx-validators'; 
import { ReactiveFormsModule } from '@angular/forms';
import { AvatarModule } from 'ngx-avatar';
import { FuseSharedModule } from '@fuse/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { AddPatientComponent } from 'app/shared/components/add-patient/add-patient.component';
import { SharedComponentsModule } from 'app/shared/components/shared-components.module';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { MatListModule } from '@angular/material/list';
import { FuseSidebarModule } from '@fuse/components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientInfoComponent } from './patient-info/patient-info.component';


@NgModule({
  declarations: [PatientListComponent, PatientDetailComponent, PatientInfoComponent],
  imports: [
    CommonModule,
    SharedComponentsModule,
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
    NgSelectModule,
    MatListModule,
    FuseSidebarModule
  ]
})
export class PatientsModule { }
