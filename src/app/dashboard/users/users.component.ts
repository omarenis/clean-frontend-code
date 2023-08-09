import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {DynamicTableCrud} from "../../services/dynamic-table";
import {Person} from "../../models/person";
import {AbstractRestService} from "../../services/genericservice";
import {SecureStorageService} from "../../services/secure-storage.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent extends DynamicTableCrud<Person> implements OnInit {
  typeUsersToDisplay !: string;
  type_user: any;
  formGroup !: FormGroup;
  access !: string | null;
  typeDoctorToDisplay !: string;
  selectedOption:string
  constructor(protected override service: AbstractRestService<Person>, protected override secureStorageService: SecureStorageService,
              private httpClient: HttpClient, private router: Router) {
    super(service, `${environment.url}/api/persons`, secureStorageService);
    this.selectedOption = '';
  }

  async ngOnInit(): Promise<void> {
    this.typeUsersToDisplay = 'super_doctors';
    this.access = localStorage.getItem('access');
    const type_user = localStorage.getItem('type_user');
    if (type_user !== null) {
      this.type_user = type_user;
    }
    if (this.access) {
      this.options = {
        params: null,
        headers: {Authorization: `Bearer ${this.secureStorageService.getToken(this.access)}`}
      };
      await this.displaysuperdoctor();
    }
  }

  dosplayUsers()
  {

  }

  displayUser(params?: object): void {
    const filter: {[key: string]: string | boolean | number} = {};
    if(this.typeDoctorToDisplay === 'doctor' )
    {
      filter["profile__is_super_doctor"] = false;
    }
    else if (this.typeUsersToDisplay === 'super_doctor')
    {
      filter["profile__is_super_doctor"] = true;
    }
    else if (this.typeUsersToDisplay === 'parent')
    {
      filter["type_user"] = 'parent';
    }
    this.options.params = filter;
    this.service.list(this.actionUrl, this.options).subscribe(res => {
      this.result = res
      this.numberItems = this.result.length;
    });
    if (params !== null && params !== undefined) {
      this.options.params = params;
    }
    this.service.list(this.actionUrl, this.options).subscribe(res => {
      this.result = res;
      this.numberItems = this.result.length;
      // this.spinner = true
      // this.isAnyperson = true
      // this.isSuperDoctor = false
      // this.isSchool = false
    })

  }

  displaysuperdoctor(): void {
    this.service.list(this.actionUrl, this.options).subscribe(res => {
      this.result = res.filter(person => person.profile?.is_super_doctor == true);
      this.numberItems = this.result.length;
      // this.spinner = true
      // this.isSuperDoctor = true
      // this.isSchool = false
      // this.isAnyperson = false
    });
  }

  displaykindergarten(): void {
    this.service.list(this.actionUrl, this.options).subscribe({
      next: (res: Person[]) => {
        this.result = res.filter((person: Person) => person.type_user === "school");
        this.numberItems = this.result.length;
        // this.spinner = true
        // this.isSchool = true
        // this.isAnyperson = false
        // this.isSuperDoctor = false
      },
      error: () => {

      }
    })
  }

  async change_data(event: any): Promise<void> {
    event.preventDefault();
    const type_user = event.target.value;
    console.log("🚀 ~ file: list-users.component.ts:93 ~ ListUsersComponent ~ change_data ~ type_user:", type_user)
    await this.displayUser(type_user)
  }
}
