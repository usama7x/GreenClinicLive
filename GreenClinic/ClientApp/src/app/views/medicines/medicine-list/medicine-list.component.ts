import { Component, OnInit, ViewChild } from '@angular/core';
import { MedicineListService } from '../services/medicine-list.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PaginationResult } from 'app/shared/models/PaginationResult';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.scss']
})
export class MedicineListComponent implements OnInit {

  medicinesPaginated: PaginationResult<any>;
  loading = false;
  medicines: MedicineListService;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  searchControl: FormControl = new FormControl();
  private medicinesPaginatedSubscription: Subscription;
  displayedColumns: string[] = ['itemId', 'category', 'productName', 'retailPricePerUnit', 'costPricePerUnit',
                                'availablePreRoll', 'availableOneGramPreRoll', 'availableQuantity', 'action'];

  
  constructor(private medicineViewService: MedicineListService) { }

  ngOnInit(): void {
    this.loadMedicines();
  }

  loadMedicines(): void {
    this.medicines = this.medicineViewService;
    this.searchControl.valueChanges
    .pipe(debounceTime(200), distinctUntilChanged())
    .subscribe(value => {
        this.medicineViewService.setQueryParameter('filter', value.toString());
    });
    this.sort.sortChange.subscribe(event => {
    this.paginator.pageIndex = 0;
    this.medicineViewService.sort = {
        propertyName: event.active,
        isDescending: (event.direction === 'desc' && event.direction !== '')
    };
    if (event.direction === '') {
        this.sort.direction = 'asc';
    }
});
    this.paginator.page.subscribe(pageEvent => {
    this.medicineViewService.page = pageEvent.pageIndex + 1;
    this.medicineViewService.pageSize = pageEvent.pageSize;
});
    this.medicinesPaginatedSubscription = this.medicineViewService.paginationResult.subscribe(r => this.medicinesPaginated = r);
    this.medicineViewService.forceRefresh();
  }

}
