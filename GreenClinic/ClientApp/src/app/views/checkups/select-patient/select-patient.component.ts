import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CheckupPatientListComponent } from '../checkup-patient-list/checkup-patient-list.component';

@Component({
  selector: 'app-select-patient',
  templateUrl: './select-patient.component.html',
  styleUrls: ['./select-patient.component.scss']
})
export class SelectPatientComponent implements OnInit {

  constructor(private bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
    this.selectPatient();
  }

  selectPatient(): void {
    const bottomSheetRef = this.bottomSheet.open(CheckupPatientListComponent, { panelClass: 'bottom-sheet-large' }); 
  }

}
