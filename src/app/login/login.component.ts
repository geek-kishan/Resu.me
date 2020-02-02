import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class loginComponent implements OnInit {
  loginForm:FormGroup;
  isSubmitted: boolean = false;
  constructor(private fb:FormBuilder, private auth: AuthService, private router:Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['',[Validators.required]],
      password: ['',[Validators.required]]
    });
  }

  onLogin() {
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }else{
      this.auth.login(this.loginForm.value).subscribe(
        (res:any) => {
          localStorage.setItem('token',res.token);
          this.router.navigate(['/']);
        },
        (err:any) => console.log(err)
      );
    }
  }
}
