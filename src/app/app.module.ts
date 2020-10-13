import { FooterComponent } from './shared-layout/footer/footer.component';
import { HeaderComponent } from './shared-layout/header/header.component';

import { SaleModule } from './sale/sale.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SportsComponent } from './sports/sports.component';
import { SportsService } from './services/sports.service';
import { HttpClientModule } from '@angular/common/http';
import { SportsInfoComponent } from './sports-info/sports-info.component';
@NgModule({
  declarations: [		
    AppComponent,
    HeaderComponent,
    FooterComponent,
      SportsComponent,
      SportsInfoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SaleModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [SportsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
