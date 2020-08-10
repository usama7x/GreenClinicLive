import { Component, OnInit, Input } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.scss'],
  animations: fuseAnimations
})
export class PatientInfoComponent implements OnInit {

  @Input()patientInfo: any;

  constructor() { }

  
  ngOnInit(): void {
  }

}
