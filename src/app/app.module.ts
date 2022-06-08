import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { AppMatModulModule } from './app-mat-modul/app-mat-modul.module';
import { AddUserComponent } from './add-user/add-user.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UserListComponent } from './user-list/user-list.component';
import { OpenDialogComponent } from './open-dialog/open-dialog.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    HeaderComponent,
    UserListComponent,
    OpenDialogComponent,
    UserDeleteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppMatModulModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
