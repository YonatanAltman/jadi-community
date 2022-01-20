import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedLayoutComponent } from './shared-layout.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SharedLayoutComponent],
  exports: [SharedLayoutComponent],
})
export class SharedUiSharedLayoutModule {}
