import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatListModule } from '@angular/material';


@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatListModule],
  exports: [MatButtonModule, MatToolbarModule, MatListModule]
  })
  export class MaterialModule { }