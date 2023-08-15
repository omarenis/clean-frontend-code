import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { Person } from 'src/app/models/person';
import { Supervise } from 'src/app/models/supervise';
import { AbstractRestService } from 'src/app/services/genericservice';
import { SecureStorageService } from 'src/app/services/secure-storage.service';
import { environment } from 'src/environments/environment';
interface Option {
  headers: object;
  params: object | null | undefined;
}
@Component({
  selector: 'app-child-profile-autism',
  templateUrl: './child-profile-autism.component.html',
  styleUrls: ['./child-profile-autism.component.css']
})
export class ChildProfileAutismComponent implements OnInit{
  constructor(private  service: AbstractRestService<Patient>, private  secureStorageService: SecureStorageService, private router: Router,
    private route:ActivatedRoute,private superviseService: AbstractRestService<Supervise>,
    private doctorService: AbstractRestService<Person>) {
  }
  type_user !: string;
  token !: string;
  userId !: number;
  autiste: any;
  parentpatient:any;
   options !: Option;

  ngOnInit() {
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
    this.service.get(`${environment.url}/api/autisme/autistics`, params['id'], {
    }).subscribe((response: any)=> {
      this.autiste= response

})
})
if(type_user==='doctor'){
  this.getquestionautiste()
}
  }

  saveItem(patient : any) {
      localStorage.setItem('patient', JSON.stringify(patient));
if(patient.score_father>0){
 localStorage.setItem('type_parent','mother')
}
else{
  localStorage.setItem('type_parent','father')
}
this.router.navigate([`/public/Autistic_question/1`]);
}
doctors:any
getdoctors(){
  const access = localStorage.getItem('access');
  const type_user = localStorage.getItem('type_user');
  if (access){
    this.options = {
        params: type_user === "parent" ? {localisation__country: String(this.autiste.parent.localisation.country),
        localisation__state: String(this.autiste.parent.localisation.state),
        type_user: String('doctor'),
        profile__is_super_doctor:String('False')}: null,
        headers: {Authorization: `Bearer ${this.secureStorageService.getToken(access)}`}
  }
  }
  this.service.list(`${environment.url}/api/persons`,  this.options).subscribe( res =>{
    this.doctors=res
    console.log(  this.doctors)

        })
}

addSupervise(doctorId: number, $event: Event): void {
//api/autisme/supervices
const access = localStorage.getItem('access');
if(access){
  this.route.params.subscribe(params => {
    const id =Number(params['id'])
          this.superviseService.put(`${environment.url}/api/autisme/autistics`,id,
              {
                supervisor: doctorId,
              },
                this.options = {
                params: null,
                headers: {Authorization: `Bearer ${this.secureStorageService.getToken(access)}`}
          }).subscribe(res => {
              //  this.toast.success({detail:"تمت العملية بنجاح",summary:'تم تعيين الطفل للطبيب بنجاح',duration:5000});
                this.router.navigate(['/dashboard/Children']);
              });

            })
}

      }



      questionautiste!:any
FirstQautiste!:any
SecondQautiste!:any
getquestionautiste(){

  this.route.params.subscribe(params => {
    const access = localStorage.getItem('access');
    const type_user = localStorage.getItem('type_user');

    if(access){
      this.options={
        params: type_user === "doctor" ? {patient: Number(params['id'])}: null,
        headers:{Authorization: `Bearer ${this.secureStorageService.getToken(access)}`}
        }
          this.service.list(`${environment.url}/api/autisme/level1`,this.options).subscribe(res=>{
        this.questionautiste=res
        this.FirstQautiste=this.questionautiste[0]
        this.SecondQautiste=this.questionautiste[1]
           console.log(this.questionautiste);
          })
    }
})
}


  save_patient_to_appointement(patient : Patient) {
    localStorage.setItem('patient', JSON.stringify(patient));
    this.router.navigate(['/dashboard/consultation']);
     }
}
