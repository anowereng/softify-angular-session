import { TripleClickDirective } from './directive/triple-click.directive';
import { MouseDirective } from './directive/mouse-over.directive';
import { FooterComponent } from './shared-layout/footer/footer.component';
import { HeaderComponent } from './shared-layout/header/header.component';

import { SaleModule } from './sale/sale.module';
import { ParentChildModule } from './parent-child/parent-child.module';
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
import { DirectiveExampleOneComponent } from './directive-example-one/directive-example-one.component';
import { DirectiveExampleTwoComponent } from './directive-example-two/directive-example-two.component';

@NgModule({
  declarations: [		
    AppComponent,
    HeaderComponent,
    FooterComponent,
      SportsComponent,
      SportsInfoComponent,
      DirectiveExampleOneComponent,
      DirectiveExampleTwoComponent , 
      MouseDirective , TripleClickDirective
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
