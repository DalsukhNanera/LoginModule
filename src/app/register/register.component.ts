import { ParseSourceFile } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm: any;
  Message!:string ;

  constructor(private formBuilder: FormBuilder,  private http: HttpClient) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      Name: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Address: ['', Validators.required],
      PhoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
     Password:['', Validators.required],
    });
  }

  submitForm(): void {
    if (this.userForm?.valid) {

      let obj  = {
        Name:this.userForm.value.Name ,
        Email:this.userForm.value.Email ,
        Password:this.userForm.value.Password ,
        PhoneNumber:this.userForm.value.PhoneNumber ,
        Address:this.userForm.value.Address,
        Flag:"Register"
      }
        this.http.post("https://localhost:44315/api/ExpenseManager/RegisterUser",obj).subscribe({
            next:(data:any)=>{
             
                this.Message = data.Message ;
              
            
            },
            error:(er)=>{
              console.log(er);
            }

        })

      
      console.log('Form data:', this.userForm.value);
    }
  }
}
