import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DemoMaterialModule } from 'src/material-module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CreateGameComponent } from './create-game/create-game.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { DetailComponent } from './catalogue/detail/detail.component';
import { EditComponent } from './catalogue/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateGameComponent,
    CatalogueComponent,
    DetailComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
