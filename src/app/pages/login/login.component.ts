import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  private formSubmitAttempt: boolean;

  constructor(private fb: FormBuilder) { 
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      userID: [''],
      access: [''],
      password: ['', Validators.required],
    });
  }

  

  onSubmit(){
    
    this.formSubmitAttempt = true;
    console.log(this.formSubmitAttempt)
  }

}
