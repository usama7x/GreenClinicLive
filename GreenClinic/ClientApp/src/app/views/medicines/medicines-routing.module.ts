import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { CommonModule } from '@angular/common';
import { AddMedicineComponent } from './add-medicine/add-medicine.component';

const routes: Routes = [
    {
        path: '',
        component: MedicineListComponent       
    },
    {
        path: 'add',
        component: AddMedicineComponent
    }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MedicinesRoutingModule {}
