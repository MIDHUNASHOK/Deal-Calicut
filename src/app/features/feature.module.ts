import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { ClothingComponent } from './clothing/clothing.component';
import { SpasComponent } from './spas/spas.component';
import { LocalStoresComponent } from './local-stores/local-stores.component';
import { HotDealsComponent } from './hot-deals/hot-deals.component';



@NgModule({
  declarations: [
    RestaurantsComponent,
    ClothingComponent,
    SpasComponent,
    LocalStoresComponent,
    HotDealsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeatureModule { }
