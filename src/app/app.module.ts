import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AppProductComponent } from './components/app-product-list/app-product-list.component';
import { ProductAlertsComponent } from './components/product-alerts/product-alerts.component';
import { AppTopBarComponent } from './components/app-top-bar/app-top-bar.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { Routes, RouterModule } from '@angular/router';
import { CommentsComponent } from './components/comments/comments.component';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './global/error/error.component';
import { FormsModule } from '@angular/forms';
import { FilterCommentsPipe } from './pipes/filter-comments.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ReactiveFormsModule } from '@angular/forms';

// Декораторы
@NgModule({
  declarations: [
    AppComponent,
    AppProductComponent,
    ProductAlertsComponent,
    AppTopBarComponent,
    ProductDetailsComponent,
    CommentsComponent,
    ErrorComponent,
    FilterCommentsPipe,
    ModalComponent,
    CreateProductComponent,
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: AppProductComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
    ]),
  ],
  providers: [],
  // С чего начинается приложение
  bootstrap: [AppComponent],
})
export class AppModule {}
