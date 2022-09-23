import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }

  submit(){
    if(!this.loginForm.valid)
      return;

    this.login();  
  }

  login(){
    this.appService.login(this.loginForm.value).subscribe(data => {
      
    })
  }

}
