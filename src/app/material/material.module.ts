import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDividerModule} from '@angular/material/divider';

import {MatTabsModule} from '@angular/material/tabs';

let MaterialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  ScrollingModule,
  MatTabsModule,
  MatBadgeModule,
  MatDividerModule
];

@NgModule({
  
  imports: [MaterialComponents],
  exports: [MaterialComponents]

})
export class MaterialModule { }
