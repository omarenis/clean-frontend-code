import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectionService } from 'src/app/services/connection.service';
import { saveDataToLocalhost } from 'src/app/services/genericservice';
import { LoginSignupService } from 'src/app/services/login-signup.service';
import { SecureStorageService } from 'src/app/services/secure-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // password: string = '';
  // showPassword: boolean = false;
  // togglePassword(passwordField: HTMLInputElement): void {
  //   this.showPassword = !this.showPassword;
  //   passwordField.type = this.showPassword ? 'text' : 'password';

  // }
  formGroup !: FormGroup;
  validated !: boolean;
  error !: string;
  shown !: boolean;
  @Output() connected = new EventEmitter<boolean>();
  constructor(private loginSignupService: LoginSignupService, private secureStorageService: SecureStorageService,private router: Router,
    private connection: ConnectionService){
}
ngOnInit(): void {
  this.formGroup = new FormGroup({
      login_number: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });
        this.error = '';
        this.validated = true;
        this.shown = false;

}
submit($event: Event): void{
  $event.preventDefault();
  this.loginSignupService.login(this.formGroup.value.login_number, this.formGroup.value.password).subscribe( { next: (response: any) => {
      response.access = this.secureStorageService.setToken(response.access);
      response.refresh = this.secureStorageService.setToken(response.refresh);

      saveDataToLocalhost(response);
      saveDataToLocalhost(response.profile);

       let url: string;
      if (response.type_user == 'parent' || response.type_user == 'teacher' )
      {
          url = '/dashboard/Children';
      }
      else if(response.type_user == 'doctor' && response.profile.is_super_doctor === false ){
        url = '/dashboard/Children/all_patient';
      }
       else if ( response.profile.is_super_doctor === true)
      {
          url = '/dashboard/Users';
      }
      else if (response.type_user == 'school')
      {
          url = '/dashboard/Users';
      }

      else
      {
          url = '/dashboard/Users';
      }



      this.connection.setConnection({
        type_user: response.type_user,
        name: response.name,
        is_superuser: false
      });

       this.router.navigate([url]).then(() => {
        window.location.reload();
         });
this.date()
    },
      error: (err) => {
        this.validated = false;
        this.error=err.error.message;
        console.log("🚀 ~ file: login.component.ts:99 ~ LoginComponent ~ this.loginSignupService.login ~ this.error:", this.error)
      },

    })

  }
showOrHidePassword(event: Event): void {
  event.preventDefault();
  this.shown = !this.shown;
}
showAge!:any;
date(){
  localStorage.setItem('lastLogin', new Date().getTime().toString());
}


password: string = '';
showPassword: boolean = false;
togglePassword(passwordField: HTMLInputElement): void {
  this.showPassword = !this.showPassword;
  passwordField.type = this.showPassword ? 'text' : 'password';

}

}
