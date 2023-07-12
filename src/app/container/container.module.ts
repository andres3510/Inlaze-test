import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './Navbar/Menu.component';
import { PrimengModule } from '../primeng/primeng.module';



@NgModule({
  imports: [
    CommonModule,
    PrimengModule
  ],
  exports: [
    MenuComponent,

  ],
  declarations: [
    MenuComponent,

  ]
})
export class ContainerModule { }
