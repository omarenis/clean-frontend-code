import { Operation } from './../../models/form';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Patient} from "../../models/patient";
import {AbstractRestService} from "../../services/genericservice";
import {SecureStorageService} from "../../services/secure-storage.service";
import {DynamicTableCrud} from "../../services/dynamic-table";
import {environment} from "../../../environments/environment";
import { Person } from 'src/app/models/person';
import { Supervise } from 'src/app/models/supervise';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent extends DynamicTableCrud<Patient> implements OnInit {
  constructor(protected override service: AbstractRestService<Patient>, protected override secureStorageService: SecureStorageService,
    private superviseService: AbstractRestService<Supervise>, private doctorService: AbstractRestService<Person>,
    private router:ActivatedRoute) {
super(service, `${environment.url}/api/patients`, secureStorageService);
}
access !: string | null;
patient !: Patient;
userId !: number;
numberPatients !: number;
type_user !: string | null;
doctors !: Person[];
spinner:boolean=false
is_super_doctor!:any
  async ngOnInit(): Promise<void> {
  this.access = localStorage.getItem('access');
  const type_user = localStorage.getItem('type_user');
  this.is_super_doctor=localStorage.getItem('is_super_doctor');
  if (type_user !== null){
      this.type_user = type_user;
  }
  if (this.access) {
      this.options = {
          params: type_user === "parent" ? {parent_id: Number(localStorage.getItem('userId'))}: null,
          headers: {Authorization: `Bearer ${this.secureStorageService.getToken(this.access)}`}
      };
      this.router.params.subscribe(params=>{
        const state = params['state']
        if(type_user==='parent'){
          this.getTDAH();
        }
        else if(type_user==='teacher'){
          this.get_patient_to_teacher()
        }
        else if(this.is_super_doctor==='false'){
          this.get_patient_tdah_to_doctor(state)
        }
        else{
          this.get_patient_to_superdoctor(state)
          this.notification_superdoctor()
        }
      })



  }
      // await this.getPatients('tdah');
      // console.log(this.result);
    }
    override async getData(): Promise<void> {
      this.service.list(this.actionUrl, this.options).subscribe(res => {
        this.result = res.filter(patient =>patient.score_parent !=0 );
        this.numberItems = this.result.length;
    this.spinner=true
      });

      console.log('result', this.result);
    }
    getTDAH(){
      if (this.access) {
        this.options = {
            params: null,
            headers: {Authorization: `Bearer ${this.secureStorageService.getToken(this.access)}`}
        };}
      this.actionUrl = `${environment.url}/api/patients`;
      this.getData();
    }
    autistes:Patient[]=[]
    response!:any
    getautiste(){
       this.actionUrl = `${environment.url}/api/autisme/autistics`;
      this.getData();

      }

        get_patient_to_teacher() {
        this.service.list(this.actionUrl, this.options).subscribe(res => {
          this.result = res;
          this.numberItems = this.result.length;
          this.spinner=true

        });

      }
       get_patient_to_superdoctor(filter ?:any){
        this.service.list(this.actionUrl, this.options).subscribe(res => {
         this.data =res
         this.result= filter==='all_patient'?this.data :
         (filter==='waited_patient'?this.data.filter(patient => patient.is_supervised === false):
         this.data.filter(patient => patient.is_supervised === true));
         this.numberItems = this.result.length;
         this.spinner=true
        })
       }
       notification!:any
       array!:any
       notification_superdoctor(){
        this.service.list(this.actionUrl, this.options).subscribe(res => {
         this.data =res
         this.array= this.data.filter(patient => patient.is_supervised === false)
         this.notification = this.array.length;
        })
       }
       get_patient_tdah_to_doctor(filter ?:any){
        if (this.access) {
          this.options = {
              params: null,
              headers: {Authorization: `Bearer ${this.secureStorageService.getToken(this.access)}`}
          };}
        this.service.list(this.actionUrl, this.options).subscribe(res => {
          this.result =filter==='all_patient'?res :
          (filter==='waited_patient'?res.filter(patient => patient.is_consulted === false):
          res.filter(patient => patient.is_consulted === true));
          this.spinner=true
         })
       }
       getautistics(){
        this.access = localStorage.getItem('access');
        const type_user = localStorage.getItem('type_user');
        if (this.access) {
          this.options = {
              params: type_user === "doctor" ? {supervisor: Number(localStorage.getItem('id'))}: null,
              headers: {Authorization: `Bearer ${this.secureStorageService.getToken(this.access)}`}
          };
        this.service.list( `${environment.url}/api/autisme/autistics`, this.options).subscribe(res => {
      this.result=res
      console.log(this.result)
        })
      }

      }
       notification_doctor(){
        this.service.list(this.actionUrl, this.options).subscribe(res => {
          this.data =res
          this.notification = this.data.filter(patient => patient.is_consulted=== false).length;
         })

  }

}
