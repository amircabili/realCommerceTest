import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainAsideComponent } from './components/main-aside/main-aside.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {HttpClientModule} from "@angular/common/http";
import { PopupItemComponent } from './components/popup/popup-item/popup-item.component';
import {MaterialModule} from './modules/material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    MainAsideComponent,
    GalleryComponent,
    FooterComponent,
    NotFoundComponent,
    PopupItemComponent
  ],
  entryComponents: [
    PopupItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PopupItemComponent
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
