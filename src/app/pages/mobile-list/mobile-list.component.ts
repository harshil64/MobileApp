import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-list',
  templateUrl: './mobile-list.component.html',
  styleUrls: ['./mobile-list.component.scss']
})
export class MobileListComponent implements OnInit {
  @Input() mobilePhones: any = [];

  constructor(private router: Router) { }

  ngOnInit(): void {}

  addMobileToFavorite(mobile: any){
    mobile.isFavorite = !mobile.isFavorite;
  }

  navigateToMobileDetail(mobileId: number){
    this.router.navigate(['mobile-detail', mobileId]);
  }

}
