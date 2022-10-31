import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  private formSubmitAttempt: boolean;
  private access: string;

  constructor(private fb: FormBuilder, private router: Router) { 
  }
  
  loginInfo = this.fb.group({
    userID: ['', Validators.required],
    access: ['', Validators.required],
    password: ['', Validators.required],
  });

  ngOnInit(): void {
  }

  selected(change: MatSelectChange){
    this.access = change.value;
    console.log(this.access)
  }

  onSubmit(){
    this.formSubmitAttempt = true;
    console.log(this.formSubmitAttempt);
    if (this.access == 'one') this.router.navigate(['/healthcare'])
    if (this.access == 'two') this.router.navigate(['/postoffice'])
    // this.router.navigate(['/home'])
  }
}
