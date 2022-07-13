import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CKEditorModule } from "ng2-ckeditor";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TxteditorComponent } from './txteditor/txteditor.component';

@NgModule({
  declarations: [
    AppComponent,
    TxteditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
