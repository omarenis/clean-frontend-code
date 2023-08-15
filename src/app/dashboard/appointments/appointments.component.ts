import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Appointment } from 'src/app/models/appointment';
import { DynamicTableCrud } from 'src/app/services/dynamic-table';
import { AbstractRestService } from 'src/app/services/genericservice';
import { SecureStorageService } from 'src/app/services/secure-storage.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent extends DynamicTableCrud<Appointment> implements OnInit{
  constructor( protected override service: AbstractRestService<Appointment>,
    protected override secureStorageService: SecureStorageService) {
    super(service, `${environment.url}/api/patients/consultations`, secureStorageService);
    }
    type_user!:any
    consultation!:any
    FormGroup !: FormGroup
    patient : any
    patientelement!:any
    ngOnInit(): void {
      this.FormGroup = new FormGroup({
        date: new FormControl('', [Validators.required])
    });
      this.type_user= localStorage.getItem('type_user')
      const access = localStorage.getItem('access');
if (access) {
  this.options = {
      headers: {
          Authorization: `Bearer ${this.secureStorageService.getToken(access)}`
      },
      params: null
  };
}
    this.getconsultationTdah()
    if(this.type_user==='doctor'){
      this.getconsultationautisme()
    }


const patientdata = localStorage.getItem('patient');
this.patientelement = patientdata
if (patientdata !== null) {
const patientselected = JSON.parse(patientdata);
this.patient=patientselected
console.log(this.patient.name)

}
   }
   getconsultationTdah(){
    this.service.list(`${environment.url}/api/patients/consultations`,{
      headers: this.options.headers
    }).subscribe((response) => {
      this.consultation=response
      this.numberItems = this.consultation.length;
  })
   }
   autisteconsultations!:any
   getconsultationautisme(){
     const access = localStorage.getItem('access');
     const type_user = localStorage.getItem('type_user');

   if (access) {
     this.options = {
         headers: {
             Authorization: `Bearer ${this.secureStorageService.getToken(access)}`
         },
         params:  type_user === "doctor" ? {patient__supervisor: Number(localStorage.getItem('userId'))}: null,
     };
     this.service.list(`${environment.url}/api/autisme/consultations`, this.options).subscribe((response) => {

     this.autisteconsultations= response
   console.log(this.autisteconsultations)
     });
   }
   }
   action !: string;
   submit(){
     console.log('daaateeee',this.FormGroup.value.date ,this.patient.id)
 if(this.patient.score_mother===undefined){
   console.log("tdah")

   this.service.create(`${environment.url}/api/patients/consultations`,  {
     date: this.FormGroup.value.date,
     patient: this.patient.Patient.id

   }, {
     headers: this.options.headers
 }).subscribe((response) => {
  // this.toast.success({detail:"تمت العملية بنجاح",summary:'تم تعيين الموعد بنجاح',duration:5000});

       const userId = localStorage.getItem('userId');
       const access = localStorage.getItem('access');
       const refresh = localStorage.getItem('refresh');
       const name = localStorage.getItem('name');
       const type_user = localStorage.getItem('type_user');
       const family_name = localStorage.getItem('family_name');
       const is_super_doctor = localStorage.getItem('is_super_doctor');
       const lastLogin = localStorage.getItem('lastLogin');
       const id = localStorage.getItem('id');
       localStorage.clear();
       if (userId !== null && access !== null && refresh !== null && type_user !== null && name !== null && family_name !== null && is_super_doctor !== null && lastLogin !== null&& id !== null) {
           localStorage.setItem('userId', userId);
           localStorage.setItem('access', access);
           localStorage.setItem('refresh', refresh);
           localStorage.setItem('name', name);
           localStorage.setItem('family_name', family_name);
           localStorage.setItem('is_super_doctor', is_super_doctor);
           localStorage.setItem('type_user', type_user);
           localStorage.setItem('lastLogin', lastLogin);
           localStorage.setItem('id', id);
       }
   });

 }
 else{
   console.log("autisme")


   this.service.create(`${environment.url}/api/autisme/consultations`,  {
     date: this.FormGroup.value.date,
     patient: this.patient.id
   }, {
     headers: this.options.headers
 }).subscribe((response) => {
   //this.toast.success({detail:"تمت العملية بنجاح",summary:'تم تعيين الموعد بنجاح',duration:5000});

       const userId = localStorage.getItem('userId');
       const access = localStorage.getItem('access');
       const refresh = localStorage.getItem('refresh');
       const name = localStorage.getItem('name');
       const type_user = localStorage.getItem('type_user');
       const family_name = localStorage.getItem('family_name');
       const is_super_doctor = localStorage.getItem('is_super_doctor');
       localStorage.clear();
       if (userId !== null && access !== null && refresh !== null && type_user !== null && name !== null && family_name !== null && is_super_doctor !== null ) {
           localStorage.setItem('userId', userId);
           localStorage.setItem('access', access);
           localStorage.setItem('refresh', refresh);
           localStorage.setItem('name', name);
           localStorage.setItem('family_name', family_name);
           localStorage.setItem('is_super_doctor', is_super_doctor);
           localStorage.setItem('type_user', type_user);
       }
   });

 }
     }
     delete_consultation(id:number){
      this.service.delete(`${environment.url}/api/autisme/consultations`,id, this.options).subscribe((response) => {
      this.getconsultationautisme()
        });
     }

     clearlocalstorage(){
       const userId = localStorage.getItem('userId');
       const access = localStorage.getItem('access');
       const refresh = localStorage.getItem('refresh');
       const name = localStorage.getItem('name');
       const type_user = localStorage.getItem('type_user');
       const family_name = localStorage.getItem('family_name');
       const is_super_doctor = localStorage.getItem('is_super_doctor');
       const lastLogin = localStorage.getItem('lastLogin');
       const id = localStorage.getItem('id');
       localStorage.clear();
       if (userId !== null && access !== null && refresh !== null && type_user !== null && name !== null && family_name !== null && is_super_doctor !== null && lastLogin !== null&& id !== null) {
           localStorage.setItem('userId', userId);
           localStorage.setItem('access', access);
           localStorage.setItem('refresh', refresh);
           localStorage.setItem('name', name);
           localStorage.setItem('family_name', family_name);
           localStorage.setItem('is_super_doctor', is_super_doctor);
           localStorage.setItem('type_user', type_user);
           localStorage.setItem('lastLogin', lastLogin);
           localStorage.setItem('id', id);
       }
     }
     consultations!:any;

}
