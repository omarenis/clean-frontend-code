import {Component, OnInit} from '@angular/core';
import {AbstractRestService} from "../../services/genericservice";
import {Person} from "../../models/person";
import {SecureStorageService} from "../../services/secure-storage.service";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {Profile} from "../../models/profile";
import { DynamicTableCrud } from 'src/app/services/dynamic-table';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent extends DynamicTableCrud<Person> implements OnInit{
  type_user !: string;
  token !: string;
  userId !: number;
  override data: any = {};
  profile !: any;
  iseditable : boolean= false
  acess!:any
  constructor(protected override service: AbstractRestService<Person>, protected override secureStorageService: SecureStorageService,
    private route:ActivatedRoute,private router: Router) {
super(service, `${environment.url}/api/persons`, secureStorageService);
}
  ngOnInit(): void {
    const access = localStorage.getItem('access');
    this.acess=access

    const userId = localStorage.getItem('userId');
    const type_user = localStorage.getItem('type_user');
    if (type_user !== null) {
      this.type_user = type_user;
    }
    if (access !== null) {
      this.token = this.secureStorageService.getToken(access);
    }

    this.route.params.subscribe(params => {
      const id = params['id'];
      id!==undefined?this.iseditable=true:false
      this.service.get(`${environment.url}/api/persons`, id!=undefined?id : userId, {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      }).subscribe((response: Person) => {
        console.log('getdata', response)
        this.data = response;
        this.profile = response.profile;
      });
    })
  }

  deleteuser(id: number | undefined): void {
    if (id !== undefined) {
        this.service.delete(this.actionUrl, id,   this.options = {
          params: null,
          headers: {Authorization: `Bearer ${this.secureStorageService.getToken(this.acess)}`}
      }).subscribe(async () => {
       // this.toast.success({detail:"تمت العملية بنجاح",summary:'تم حذف الطبيب الاول بنجاح',duration:5000});
      this.router.navigate(['/dashboard/Users'])
        });
    }
  }

}
