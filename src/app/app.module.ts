import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, MaterialModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
})
export class AppModule {}
