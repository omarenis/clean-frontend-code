import {Component, OnInit} from '@angular/core';
import {AbstractRestService} from "../../services/genericservice";
import {Patient} from "../../models/patient";
import {SecureStorageService} from "../../services/secure-storage.service";
import {ActivatedRoute, Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {Person} from "../../models/person";

@Component({
  selector: 'app-child-profile-tdah',
  templateUrl: './child-profile-tdah.component.html',
  styleUrls: ['./child-profile-tdah.component.css']
})
export class ChildProfileTdahComponent implements OnInit {
  type_user !: string;
  token !: string;
  userId !: number;
  data: any={};
  parent !: Person;
  patient !: any;
  parentpatient:any;

  constructor(private service: AbstractRestService<Patient>, private secureStorageService: SecureStorageService, private router: Router,
    private route:ActivatedRoute,) {
  }
  ngOnInit(): void {
    const access = localStorage.getItem('access');
    const userId: number = Number(localStorage.getItem('userId'));
    const type_user = localStorage.getItem('type_user');
    if( type_user !== null){
        this.type_user = type_user;
    }
    if (access !== null)
    {
        this.token = this.secureStorageService.getToken(access);
    }
    this.route.params.subscribe(params => {
    this.service.get(`${environment.url}/api/patients/details`, params['id'], {
    }).subscribe((response: Patient)=> {
      this.patient= response;
      if(response.parent !== undefined)
      {
        this.parent = response.parent;
      }
})
})

 }

   saveItem(patient : Patient) {
    this.router.navigate(['/appointment', patient.id])
  }
}
