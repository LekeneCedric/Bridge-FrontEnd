import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoCompleteModule } from 'ionic4-auto-complete';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
import { PhotoViewer } from '@awesome-cordova-plugins/photo-viewer/ngx';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,CommonModule,
    IonicModule.forRoot(), 
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AutoCompleteModule,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy},CallNumber,NativeGeocoder,PhotoViewer],
  bootstrap: [AppComponent],
})
export class AppModule {}
