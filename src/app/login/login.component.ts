import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.loginform = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  Onsubmit() {
    this.submitted = true;
    if (this.loginform.invalid) {
      console.log('err');
      return;
  }
  console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginform.value));
  setTimeout(() => {
    this.router.navigate(['dashboard']);
  }, 1000);
}

}
