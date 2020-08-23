import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  
  @Input() message = '';
  @Input() show: boolean;
  @Input() fullscreen = false;
  @Input() type: 'ball-pulse' | 'ball-spin' = 'ball-pulse';
  @Input() bdColor: string;
  @Input() color: string;
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  
  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  public setShow(show: boolean): void {
    this.show = show;
    this.changeDetectorRef.markForCheck();
  }

}
