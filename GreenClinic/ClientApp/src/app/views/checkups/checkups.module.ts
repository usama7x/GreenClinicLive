import { NgModule } from '@angular/core';
import { SelectPatientComponent } from './select-patient/select-patient.component';
import { RouterModule } from '@angular/router';
import { CheckupsRoutingModule } from './checkups-routing.module';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { CheckupPatientListComponent } from './checkup-patient-list/checkup-patient-list.component';
import { SharedModule } from 'app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from 'app/shared/components/shared-components.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [SelectPatientComponent, CheckupPatientListComponent],
    imports: [
        CheckupsRoutingModule,
        MatBottomSheetModule,
        MatDialogModule, MatFormFieldModule, MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatCardModule,
        MatGridListModule, MatRippleModule, MatAutocompleteModule, MatButtonToggleModule, MatMenuModule, MatSidenavModule, MatListModule,
        MatTableModule, MatSortModule, MatPaginatorModule, MatTooltipModule, MatSlideToggleModule, MatBottomSheetModule, MatIconModule,
        MatExpansionModule, MatCardModule, MatInputModule, MatRadioModule, MatTabsModule,
        ReactiveFormsModule
        
    ],
    entryComponents: [CheckupPatientListComponent]
})
export class CheckupsModule {}
