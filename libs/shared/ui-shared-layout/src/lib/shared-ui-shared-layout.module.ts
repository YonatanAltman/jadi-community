import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedLayoutComponent } from './shared-layout.component';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { SideBarModule } from './side-bar/side-bar.module';

@NgModule({
  imports: [CommonModule,NavBarModule,SideBarModule],
  declarations: [SharedLayoutComponent],
  exports: [SharedLayoutComponent],
})
export class SharedUiSharedLayoutModule {}
