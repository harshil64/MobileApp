import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatDialogModule,
    MatRadioModule
  ],
  exports: [
    MatToolbarModule,
    MatTabsModule,
    MatIconModule,
    MatDialogModule,
    MatRadioModule
  ]
})
export class MaterialModule { }
