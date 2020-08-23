import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Medicine } from '../Models/Medicine';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.scss']
})
export class AddMedicineComponent implements OnInit {


  isEdit = false;
  medicine = new Medicine();
  
  medicineNameControl: FormControl;


  constructor() { }

  ngOnInit(): void {
  }

  onComplete() {

  }

}
