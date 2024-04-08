import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: any;
  Message!:string ;

  constructor(private formBuilder: FormBuilder,  private http: HttpClient,private route:Router) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      Email: ['', [Validators.required, Validators.email]],
     Password:['', Validators.required],
     Flag:['', Validators.required],
    });
  }

  submitForm(): void {
    if (this.userForm?.valid) {

      // let obj  = {
      //   Name:this.userForm.value.Name ,
      //   Email:this.userForm.value.Email ,
      //   Password:this.userForm.value.Password ,
      //  PhoneNumber:this.userForm.value.PhoneNumber ,
      //   Address:this.userForm.value.Address,
      //   Flag:"Register"
      // }
        this.http.post("https://localhost:44315/api/ExpenseManager/RegisterUser",this.userForm.value).subscribe({
            next:(data:any)=>{
             debugger
                this.Message = data.Message ;
                if(data.ID == 1)
                  {
                    localStorage.clear();
                    if(this.userForm.value.Flag == "UserLogin")
                      {
                        console.log("this is role" + this.userForm.value.role);
                        localStorage.setItem('Role',this.userForm.value.Flag);
                        localStorage.setItem('IsLoggedIn',String(true));
                        this.route.navigate(['User-Dashboard'])
                      }
                      else{
                        localStorage.setItem('Role',this.userForm.value.Flag);
                        localStorage.setItem('IsLoggedIn',String(true));
                        this.route.navigate(['Add-Event'])
                      }
                  }
             

                
                 
            
            },
            error:(er)=>{
              console.log(er);
            }

        })

      
      console.log('Form data:', this.userForm.value);
    }
  }

}
