import { PaginationBaseService } from 'app/shared/services/pagination-base.service';
import { DataSource } from '@angular/cdk/table';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CollectionViewer } from '@angular/cdk/collections';
import { PaginationResult } from 'app/shared/models/PaginationResult';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PatientViewService extends PaginationBaseService<any> implements DataSource<any> {
    constructor(protected http: HttpClient) {
        super(http);
        this.pageSize = 10;
        this.baseUrl = '/api/Patient';
         // You can optionally initialize with some default values,
        // e.g. for sorting, page size or custom url query attributes
        this.sort = {
        isDescending: true,
        propertyName: 'stamp'
      };
      
    }
    connect(): Observable<any[]> {
       return this.paginationResult.pipe(map((r: PaginationResult<any>) => r.data));       
    }

    disconnect(collectionViewer: CollectionViewer): void {
        
    }
}
