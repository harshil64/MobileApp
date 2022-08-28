import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MobileService } from '../services/mobile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showBackButton: boolean = false;
  @ViewChild('dialogRef') dialogRef!: TemplateRef<any>;
  sortingDialog: any;
  selectedSortOptions: number = 1;
  sortingOptions: any[] = [
    {
      label: 'Price low to high',
      value: 1
    },
    {
      label: 'Price high to low',
      value: 2
    },
    {
      label: 'Rating 5-1',
      value: 3
    }
  ];

  constructor(private router: Router, public dialog: MatDialog, private mobileService: MobileService) {
    router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe((result: any) => {
      this.showBackButton = result['url'].includes('mobile-detail');     
    });
   }

  openSortingDialog(){
    this.sortingDialog = this.dialog.open(this.dialogRef, {
      height: '150px',
      width: '300px',
    });
  }

  closeDialog() { this.sortingDialog.close({ event: 'close'}); }

  radioChange(event: any){
    this.closeDialog();
    this.selectedSortOptions = event.value;
    this.mobileService.selectedSortingOptions.next(event.value);
  }
}
