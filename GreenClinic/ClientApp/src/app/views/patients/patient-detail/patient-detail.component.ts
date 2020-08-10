import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { FuseSidebarService } from '@fuse/components/sidebar/sidebar.service';
import { fuseAnimations } from '@fuse/animations';
import { PatientService } from '../Services/patient.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss'],
  animations: fuseAnimations
})
export class PatientDetailComponent implements OnInit {

  patientInfo: any;
  patientId: string;
  patientViewIndex = 0;

  constructor(private location: Location,
              private activatedRoute: ActivatedRoute,
              private fuseSidebarService: FuseSidebarService,
              private patientService: PatientService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((param: Params) => {
      this.patientId = param['id'];
      this.getPatient();
    });
  }

  getPatient(): void {
    this.patientService.getInfoById(this.patientId).subscribe(res => this.patientInfo = res);
  }
  navigateToPreviousPage(): void {
    this.location.back();
  }

  changeViewIndex(index: number): void {
    this.patientViewIndex = index;
  }

  calculateAge(): void {
    const dob = new Date(this.patientInfo.dob);
    const diff = (new Date()).getFullYear() - dob.getFullYear();
    this.patientInfo.age = diff;
}

toggleSidebar(name): void {
  this.fuseSidebarService.getSidebar(name).toggleOpen();
}

}
