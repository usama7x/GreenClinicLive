import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import {FormControl} from '@angular/forms';
import { DataSource } from '@angular/cdk/collections';
import { PatientService } from '../Services/patient.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Subscription } from 'rxjs';
import { PatientViewService } from '../Services/patient-view.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { PaginationResult } from 'app/shared/models/PaginationResult';
import { ConfirmationModalComponent } from 'app/shared/components/confirmation-modal/confirmation-modal.component';
import { Patient } from '../Models/Patient';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit, OnDestroy {

  patients: DataSource<any>;
  patientPaginated: PaginationResult<any>;
  displayedColumns: string[] = ['avatar', 'firstName', 'midName', 'lastName', 'parentage', 'phoneNo', 'age', 'action'];
  searchControl: FormControl = new FormControl();
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  private patientPaginatedSubscription: Subscription;

  
  constructor(private patientService: PatientService,
              private patientView: PatientViewService,
              private dialog: MatDialog,
              private toastr: ToastrService ) { }

  
  
  ngOnInit(): void {    
    this.loadPatients();
  }

  loadPatients(): void {
    this.patients = this.patientView;    
    this.patientView.pageSize = 10;
    this.searchControl.valueChanges
            .pipe(debounceTime(200), distinctUntilChanged())
            .subscribe(value => {
                this.paginator.pageIndex = 0;
                this.patientView.setQueryParameter('filter', value.toString());
            });    
    this.sort.sortChange.subscribe(event => {
      
      this.paginator.pageIndex = 0;    
      if (!event.direction) {
            this.patientView.sort = null;
      } else {
         this.patientView.sort = {propertyName: event.active, isDescending: event.direction === 'desc'};
    }});
    
    this.paginator.page.subscribe(pageEvent => {
        this.patientView.page = pageEvent.pageIndex + 1;
        this.patientView.pageSize = pageEvent.pageSize;
    });
    
    this.patientPaginatedSubscription = this.patientView.paginationResult.subscribe(r => this.patientPaginated = r);
  }

  deletePatient(patient: Patient): void {
    const dialogRef = this.dialog.open(ConfirmationModalComponent, {
      data: {
        action: 'Delete',
        item: `Patient: ${patient.firstName} ${patient.midName ? patient.midName : ''} ${patient.lastName ? patient.lastName : ''}`,

      }
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res === true) {
        this.patientService.deletePatientById(patient.id).subscribe(r => {
          console.log(r);
          this.toastr.success('Patient Deleted.', 'Success!', {progressBar: true});
          this.patientView.forceRefresh();
        }, err => {
          this.toastr.error('Delete Patient Failed.', 'Error!', {progressBar: true});
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.patientPaginatedSubscription.unsubscribe();
    this.searchControl.setValue('');
  }

}
