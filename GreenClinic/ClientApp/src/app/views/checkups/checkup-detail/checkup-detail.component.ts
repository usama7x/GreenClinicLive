import { Component, OnInit } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkup-detail',
  templateUrl: './checkup-detail.component.html',
  styleUrls: ['./checkup-detail.component.scss']
})
export class CheckupDetailComponent implements OnInit {

  searchType = 'search';
  viewMode: any = 'grid';
  productSearchControl = new FormControl();
  productBarcodeControl = new FormControl();
  public medicines: [];


  constructor(private fuseConfigService: FuseConfigService,
              private dialog: MatDialog,
              private toaster: ToastrService) { }

  ngOnInit(): void {
  }

}
