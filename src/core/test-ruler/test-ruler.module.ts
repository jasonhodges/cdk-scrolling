import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestRulerComponent } from './test-ruler.component';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';

@NgModule({
  imports: [
    CommonModule,
    ScrollDispatchModule
  ],
  declarations: [TestRulerComponent],
  exports: [TestRulerComponent]
})
export class TestRulerModule { }