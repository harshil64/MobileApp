import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-mobile-list',
  templateUrl: './favorite-mobile-list.component.html',
  styleUrls: ['./favorite-mobile-list.component.scss']
})
export class FavoriteMobileListComponent implements OnInit {
  @Input() mobilePhones: any;
  favoriteMobilePhones: any[] = [];
  constructor() { }

  ngOnChanges(){
    this.favoriteMobilePhones = this.mobilePhones?.filter((mobile: { isFavorite: boolean; }) => mobile.isFavorite);
  }

  ngOnInit(): void {
  }

}
