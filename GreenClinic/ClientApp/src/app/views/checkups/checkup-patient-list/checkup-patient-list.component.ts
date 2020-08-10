import { Component, OnInit, ViewChild } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { FormControl } from '@angular/forms';
import { PatientViewService } from 'app/views/patients/Services/patient-view.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/table';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { PaginationResult } from 'app/shared/models/PaginationResult';

@Component({
  selector: 'app-checkup-patient-list',
  templateUrl: './checkup-patient-list.component.html',
  styleUrls: ['./checkup-patient-list.component.scss']
})
export class CheckupPatientListComponent implements OnInit {

  searchControl: FormControl = new FormControl();
  displayedColumns: string[] = ['fullName', 'parentage', 'phoneNo', 'address', 'update'];
  private patientPaginatedSubscription: Subscription;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  patients: DataSource<any>;
  patientPaginated: PaginationResult<any>;

  constructor(public bottomSheetRef: MatBottomSheetRef<CheckupPatientListComponent>,
              private patientService: PatientViewService,
              private toster: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
    this.initPatient();
  }

  initPatient(): void {
    this.patients = this.patientService;
    this.patientService.setQueryParameter('filter', '');
    this.searchControl.valueChanges
        .pipe(debounceTime(200), distinctUntilChanged())
        .subscribe(value => {
            this.paginator.pageIndex = 0;
            this.patientService.setQueryParameter('filter', value.toString());
        });
    this.sort.sortChange.subscribe(event => {
        this.paginator.pageIndex = 0;
        if (!event.direction) {
            this.patientService.sort = null;
        } else {
            this.patientService.sort = {propertyName: event.active, isDescending: event.direction === 'desc'};
        }
    });
    this.paginator.page.subscribe(pageEvent => {
        this.patientService.page = pageEvent.pageIndex + 1;
        this.patientService.pageSize = pageEvent.pageSize;
    });
    this.patientPaginatedSubscription = this.patientService.paginationResult.subscribe(r => this.patientPaginated = r);
}

  checkIn(id: string): void {

  }

  editPatient(id: string): void {
    this.router.navigate(['patient/detail'], {queryParams: {id: id}});
    this.bottomSheetRef.dismiss();
  }

}
