import { NgModule } from '@angular/core';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { MedicinesRoutingModule } from './medicines-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatSelectModule } from '@angular/material/select';
import { MatRippleModule } from '@angular/material/core';
import {MatTreeModule} from '@angular/material/tree';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import { SharedComponentsModule } from 'app/shared/components/shared-components.module';
import { SpinnerComponent } from 'app/shared/components/spinner/spinner.component';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';

const components = [
    SpinnerComponent
];

@NgModule({
    declarations: [MedicineListComponent, AddMedicineComponent],
    imports: [
        MatTabsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatTableModule,
        MatSortModule,
        MatDialogModule,
        MatPaginatorModule,
        MatDatepickerModule,
        FormsModule,
        ReactiveFormsModule,
        // MomentModule,
        MatMenuModule,
        MatTooltipModule,
        MatRadioModule,
        MatFormFieldModule,
        MatInputModule,
        MatAutocompleteModule,
        MatTreeModule,
        // SharedDirectivesModule,
        SharedComponentsModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
        MatDividerModule,
        MatChipsModule,
        FuseSharedModule,
        MatSelectModule,
        // ClickOutsideModule,
        MatRippleModule,
        MedicinesRoutingModule
    ],
    exports: [SpinnerComponent],
    entryComponents: [SpinnerComponent]
})
export class MedicinesModule {}
