import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrinksComponent } from './drinks/drinks.component';
import { ContainerModule } from '../container/container.module';
import { IngredientComponent } from './ingredient/ingredient.component';
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    DrinksComponent,
    IngredientComponent
  ],
  imports: [
    CommonModule,
    ContainerModule,
    MatPaginatorModule
  ],
  exports: [
    MatPaginatorModule
  ]
})
export class PagesModule { }
