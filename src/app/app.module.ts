import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoRoutingModule } from './demo/demo-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ExerciceRoutingModule } from './exercice/exercice-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SharedModule } from './shared/shared.module';
import { ChronoComponent } from './exercice/components/chrono/chrono.component';
import { ExoHomeComponent } from './exercice/components/exo-home/exo-home.component';
import { ExoServiceComponent } from './exercice/components/exo-service/exo-service.component';
import { ExoShoppingComponent } from './exercice/components/exo-shopping/exo-shopping.component';
import { ChronoViewPipe } from './exercice/pipes/chrono-view.pipe';
import { ShoppingListComponent } from './exercice/components/exo-shopping/shopping-list/shopping-list.component';
import { ShowlistComponent } from './exercice/components/exo-service/showlist/showlist.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemoRoutingModule,
    ExerciceRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
