import { HttpClient } from '@angular/common/http';
import {Component, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ConnectionService } from './services/connection.service';
import { LoginSignupService } from './services/login-signup.service';
import { SecureStorageService } from './services/secure-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hopitalproject-frontend';
  connected !: boolean;
  show = true;
  shown = true;
  validated!: boolean;
  error!: string;
  name !: string | null;
  family_name !: string | null;
  type_user !: string | null;
  public = false;
  constructor(private loginService: LoginSignupService, private domSanitizer: DomSanitizer,
    private secureStorageService: SecureStorageService, private connection: ConnectionService,
    @Inject(PLATFORM_ID) private platformId: any, private httpClient: HttpClient, public router: Router) {
}
  ngOnInit() {
    this.connected = localStorage.getItem('access') !== null;
    this.family_name = localStorage.getItem('family_name') !== null ? localStorage.getItem('family_name') : '';
    this.name = localStorage.getItem('name') !== null ? localStorage.getItem('name') : '';

    console.log("🚀 ~ file: app.component.ts:16 ~ AppComponent ~ ngOnInit ~  this.connected:",  this.connected)

  }
  async logout(): Promise<void> {
    let refresh = localStorage.getItem('refresh');
    let access = localStorage.getItem('access');
    if (refresh && access) {
        refresh = this.secureStorageService.getToken(refresh);
        access = this.secureStorageService.getToken(access);
        this.loginService.logout(refresh, access).subscribe(() => {
        localStorage.clear();
        this.type_user = null;
        this.connected = false;
        this.shown = false;
        this.public = true;
        this.router.navigate(['']);
      })
    }
}
}
