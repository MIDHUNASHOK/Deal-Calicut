import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './home/landing-page/landing-page.component';
import { ClothingComponent } from './features/clothing/clothing.component';
import { FeatureModule } from './features/feature.module';

@NgModule({
  declarations: [
    AppComponent,
    // ClothingComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
