import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  constructor( private fb: FormBuilder,
               private authService: AuthService,
               private router: Router ) { }

  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  miFormulario: FormGroup = this.fb.group({
    email   :['test1@test.com', [Validators.required, Validators.pattern( this.emailPattern )] ],
    password:['123456', [Validators.required, Validators.minLength(6)]] 
  });

  ngOnInit(): void {
  }


  login(){
    const { email, password } = this.miFormulario.value;
    this.authService.login( email, password )
      .subscribe(resp => {
        if ( resp ){
          console.log(resp)
          this.router.navigateByUrl('cafeteria')
        }
      });
    
  }

  invitado(){
    console.log('Invitado');
  }

}
