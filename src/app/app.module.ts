import { CategoryService } from './rxjs/service/category.service';
import { ProductService } from './rxjs/service/product.service';
import { FormsModule } from '@angular/forms';
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
import { EmployeeComponent } from './rxjs/employee/employee.component';
import { EmployeeService } from './rxjs/employee.service';
import { Employee2Component } from './rxjs/employee2/employee2.component';
import { SyntaxComponent } from './rxjs/syntax/syntax.component';
import { DemoOneService } from './rxjs/demo-one.service';
import { CombineComponent } from './rxjs/combine/combine.component';



@NgModule({
  declarations: [		
    AppComponent,
    HeaderComponent,
    FooterComponent,
      SportsComponent,
      SportsInfoComponent,
      DirectiveExampleOneComponent,
      DirectiveExampleTwoComponent , 
      MouseDirective , TripleClickDirective, EmployeeComponent, Employee2Component, SyntaxComponent, CombineComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SaleModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [SportsService,EmployeeService, DemoOneService, CategoryService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
