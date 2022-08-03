import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  {path:"",component:HomeComponent,pathMatch:'full'},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"add-book",component:AddBookComponent},
  {path:"edit-books/:id",component:BookDetailComponent},
  {path:"books-list",component:BookListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
