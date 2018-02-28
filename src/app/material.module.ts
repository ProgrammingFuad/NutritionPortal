import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatToolbarModule],
  exports: [MatButtonModule, MatToolbarModule]
  })
  export class MaterialModule { }