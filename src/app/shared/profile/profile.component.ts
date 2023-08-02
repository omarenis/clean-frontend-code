import {Component} from '@angular/core';
import {AbstractRestService} from "../../services/genericservice";
import {Person} from "../../models/person";
import {SecureStorageService} from "../../services/secure-storage.service";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {Profile} from "../../models/profile";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  type_user !: string;
  token !: string;
  userId !: number;
  data: any = {};
  profile !: Profile;

  constructor(private service: AbstractRestService<Person>, private secureStorageService: SecureStorageService, private router: Router) {
  }

  ngOnInit(): void {
    const access = localStorage.getItem('access');
    const userId: number = Number(localStorage.getItem('userId'));
    const type_user = localStorage.getItem('type_user');


    if (type_user !== null) {
      this.type_user = type_user;
    }
    if (access !== null) {
      this.token = this.secureStorageService.getToken(access);
    }
    this.service.get(`${environment.url}/api/persons`, userId, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    }).subscribe((response: Person) => {
      console.log('getdata', response)
      this.data = response;
      this.profile = response.profile;
    });

  }

}
