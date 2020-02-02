import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { confirmpassword } from '../validators/confirmpassword';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class signupComponent implements OnInit {
  signupForm:FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService,private router: Router) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      firstname: ['',[Validators.required]],
      lastname: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]],
      confirmpassword: ['',[Validators.required]]
    }, {validators:confirmpassword});
  }

  onSubmit() {
    if(this.signupForm.invalid){
      return;
    }else {
      this.auth.signup(this.signupForm.value).subscribe(
        (res:any)=> {
          localStorage.setItem('token',res.token);
          this.router.navigate(['/']);
        },
        (err:any)=> console.log(err)
      );
    }
  }

}
