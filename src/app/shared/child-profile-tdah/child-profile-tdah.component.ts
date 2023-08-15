import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { AbstractRestService } from 'src/app/services/genericservice';
import { SecureStorageService } from 'src/app/services/secure-storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-child-profile-tdah',
  templateUrl: './child-profile-tdah.component.html',
  styleUrls: ['./child-profile-tdah.component.css']
})
export class ChildProfileTDAHComponent implements OnInit{
  type_user !: string;
  token !: string;
  userId !: number;
  data: any={};
  patient: any;
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
   /* this.service.get(`${environment.url}/api/persons`, userId, {
        headers: {
            Authorization: `Bearer ${this.token}`}
          }).subscribe((response: Person) => {
           console.log('getdata',response)
           this.data =response
          });*/
  this.getDetailByEmpID()
  }
  getDetailByEmpID(){
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.service.get(this.type_user==='doctor'? `${environment.url}/api/patients/details`:`${environment.url}/api/patients`, id, {
        headers: {
            Authorization: `Bearer ${this.token}`}
          }).subscribe(
        res => {
          this.patient = res;
          this.parentpatient =this.patient.parent
          console.log('data',this.patient)
        })
    });
   }
}
