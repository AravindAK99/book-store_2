import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, pipe, throwError } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  

  //node.js api link
    REST_API:string = "http://localhost:8000/api"

    httpHeaders=new HttpHeaders().set('Content-Type','applicaton/json')
  
  constructor(private httpClient : HttpClient) { }

  //add
  AddBook(data:Book):Observable<any>{
    let API_URL:string = `${this.REST_API}/add-book`
    return this.httpClient.post(API_URL,data).pipe(catchError(this.handleError))
  }

  //book-details
  getBooks(){
    return this.httpClient.get(`${this.REST_API}`)
  }
  
  //get single
  getBook(id:any) : Observable<any>{
    let API_URL:string = `${this.REST_API}/read-book/${id}`
    return this.httpClient.get(API_URL,{headers:this.httpHeaders}).pipe(map((res:any)=>{
      return res || {}

    }),
    catchError(this.handleError)
    )
  }

    //update

    updateBook(id:any , data:any):Observable<any>{
      let API_URL = `${this.REST_API}/update-book/${id}`
      return this.httpClient.put(API_URL,data,{headers:this.httpHeaders}).pipe(
        catchError(this.handleError)
      
      )
    }  
    

    //delete
    
    deleteBook(id:any):Observable<any>{
      let API_URL = `${this.REST_API}/delete-book/${id}`
      return this.httpClient.delete(API_URL,{ headers: this.httpHeaders}).pipe(
        catchError(this.handleError)
      
      )
    }  

     //error

     handleError(error:HttpErrorResponse){
      let errorMessage = ''
      if (error.error instanceof ErrorEvent){
        //client side
        errorMessage = error.error.message
      }else{
        //server side
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}` 
      }
      console.log(errorMessage)
      return throwError(errorMessage)

     }
}




