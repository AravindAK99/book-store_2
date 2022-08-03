import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }

  
  submit = false;
  loginForm = this.fb.group({

   
    email : ['',[Validators.email,Validators.required]],
    password : ['',[Validators.required,Validators.minLength(8),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
    


  })

  get f(){
    return this.loginForm.controls
  }
    


onSubmit(){
  this.submit = true
  
  
  if(this.loginForm.valid){
    alert("Login sucessfull")
   this.router.navigate(["./books-list"])
}else{return}
  
}
  

}


