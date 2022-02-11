import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

let MaterialComponents = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule 
];

@NgModule({
  
  imports: [MaterialComponents],
  exports: [MaterialComponents]

})
export class MaterialModule { }
