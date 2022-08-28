import { Component, OnInit } from '@angular/core';
import { MobileService } from '../services/mobile.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  mobilePhonesList:any = [];
  favoriteMobileList: any[] = [];

  constructor(private mobileService: MobileService) {}

  ngOnInit(): void {
    this.getMobilePhoneList();
    this.mobileService.selectedSortingOptions.subscribe(sortingOption => {
      if(sortingOption == 1)
        this.mobilePhonesList = this.mobilePhonesList.sort((a: any, b: any) => (a.price > b.price ? 1 : -1));
      else if(sortingOption == 2)
        this.mobilePhonesList = this.mobilePhonesList.sort((a: any, b: any) => (a.price > b.price ? -1 : 1));
      else 
        this.mobilePhonesList = this.mobilePhonesList.sort((a: any, b: any) => (a.rating > b.rating ? -1 : 1));
    });
  }

  getMobilePhoneList(){
    this.mobileService.getMobileList().subscribe(mobiles => {
      this.mobilePhonesList = mobiles;
    });
  }

  onTabChanged(event: any){
    if(event.index == 1){
      this.favoriteMobileList = this.mobilePhonesList;      
    }
  }

}
