import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder, private router:Router) { }

  ngOnInit(): void {
  }

  submit = false;
  registerForm = this.fb.group({

    firstName : ['',[Validators.required,Validators.minLength(4),Validators.maxLength(15),Validators.pattern('[a-zA-Z]+')]],
    secondName : ['',[Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern('[a-zA-Z]+')]],
    email : ['',[Validators.email,Validators.required]],
    number : ['',[Validators.required,Validators.pattern("[0-9]{10}"),Validators.maxLength(10),Validators.minLength(10)]],
    password : ['',[Validators.required,Validators.minLength(8),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
    


  })

  get f(){
    return this.registerForm.controls
  }
    


onSubmit(){
  this.submit = true
  
  
  if(this.registerForm.valid){
    alert("Account creation sucessfull")
   this.router.navigate(["./books-list"])
}else{return}
  
}
}


