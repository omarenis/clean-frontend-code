import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { Person } from 'src/app/models/person';
import { Supervise } from 'src/app/models/supervise';
import { DynamicTableCrud } from 'src/app/services/dynamic-table';
import { AbstractRestService } from 'src/app/services/genericservice';
import { SecureStorageService } from 'src/app/services/secure-storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-child-profile-tdah',
  templateUrl: './child-profile-tdah.component.html',
  styleUrls: ['./child-profile-tdah.component.css']
})
export class ChildProfileTDAHComponent extends DynamicTableCrud<Patient> implements OnInit{
  type_user !: string;
  token !: string;
  userId !: number;
  patient: any;
  parentpatient:any;
  access!:any
  superdoctor!:any
  constructor(protected override service: AbstractRestService<Patient>, protected override secureStorageService: SecureStorageService,
    private superviseService: AbstractRestService<Supervise>, private doctorService: AbstractRestService<Person>,private route:ActivatedRoute
    , private router: Router) {
super(service, `${environment.url}/api/patients`, secureStorageService);
}
  ngOnInit(): void {
    this.superdoctor=localStorage.getItem('is_super_doctor')
    const access = localStorage.getItem('access');
    const userId: number = Number(localStorage.getItem('userId'));
    const type_user = localStorage.getItem('type_user');
    this.access = localStorage.getItem('access');

    if( type_user !== null){
        this.type_user = type_user;
    }
    if (access !== null)
    {
        this.token = this.secureStorageService.getToken(access);
    }

  this.getDetailByEmpID()
  if (this.access) {
    this.options = {
        params: {type_user:String('doctor')},
        headers: {Authorization: `Bearer ${this.secureStorageService.getToken(this.access)}`}
    }
this.displayUser()
  }
  }
  displayaddsupervise:boolean=false
  getDetailByEmpID(){
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.service.get(this.type_user==='doctor'? `${environment.url}/api/patients/details`:`${environment.url}/api/patients`, id, {
        headers: {
            Authorization: `Bearer ${this.token}`}
          }).subscribe(
        res => {
          this.patient = res;
          this.parentpatient =this.patient.Patient.parent
          if (this.patient.is_supervised=== true){
            this.displayaddsupervise=true
          }
        })
    });
   }
   doctors!:any
   displayUser(): void {
    this.doctorService.list(`${environment.url}/api/persons`, this.options).subscribe(res => {
      this.doctors=res.filter(res =>res.profile?.is_super_doctor===false)
    console.log('dataaaa',res)});
    }
addSupervise(doctorId: number | undefined, $event: Event): void {
  console.log("🚀 ~ file: child-profile-tdah.component.ts:76 ~ ChildProfileTDAHComponent ~ addSupervise ~ doctorId:", doctorId)
  if (this.access) {
    this.options = {
        params: null,
        headers: {Authorization: `Bearer ${this.secureStorageService.getToken(this.access)}`}
    }
  }
  this.route.params.subscribe(params => {
    const id = params['id'];
    console.log("🚀 ~ file: child-profile-tdah.component.ts:85 ~ ChildProfileTDAHComponent ~ addSupervise ~ id:", id)
  $event.preventDefault();

  if (id !== null && id !== undefined && doctorId !== null && doctorId !== undefined)
  {
      this.superviseService.create(`${this.actionUrl}/supervises`,
          {patient: id, doctor: doctorId}, this.options).subscribe(res => {
           // this.toast.success({detail:"تمت العملية بنجاح",summary:'تم تعيين الطفل للطبيب بنجاح',duration:5000});
            this.router.navigate(['/dashboard/Children/all_patient']);
          });
  }
})}
saveItem(patient : Patient) {
  localStorage.setItem('patient', JSON.stringify(patient));
   }
}
