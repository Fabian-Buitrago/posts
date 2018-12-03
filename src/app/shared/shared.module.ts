import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SharedComponent]
})
export class SharedModule { }
