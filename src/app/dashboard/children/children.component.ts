import { Operation } from './../../models/form';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Patient} from "../../models/patient";
import {AbstractRestService} from "../../services/genericservice";
import {SecureStorageService} from "../../services/secure-storage.service";
import {DynamicTableCrud} from "../../services/dynamic-table";
import {environment} from "../../../environments/environment";
import { Person } from 'src/app/models/person';
import { Supervise } from 'src/app/models/supervise';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent extends DynamicTableCrud<Patient> implements OnInit {
  constructor(protected override service: AbstractRestService<Patient>, protected override secureStorageService: SecureStorageService,
    private superviseService: AbstractRestService<Supervise>, private doctorService: AbstractRestService<Person>) {
super(service, `${environment.url}/api/patients`, secureStorageService);
}
access !: string | null;
patient !: Patient;
userId !: number;
numberPatients !: number;
type_user !: string | null;
doctors !: Person[];
spinner:boolean=false
  async ngOnInit(): Promise<void> {
    this.access = localStorage.getItem('access');
  const type_user = localStorage.getItem('type_user');
  if (type_user !== null){
      this.type_user = type_user;
  }
  if (this.access) {
      this.options = {
          params: type_user === "parent" ? {parent_id: Number(localStorage.getItem('userId'))}: null,
          headers: {Authorization: `Bearer ${this.secureStorageService.getToken(this.access)}`}
      };
      await this.getTDAH();
      console.log(this.result);
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
      this.actionUrl = `${environment.url}/api/patients`;
      this.getData();
    }
    autistes:Patient[]=[]
    response!:any
    getautiste(){
       this.actionUrl = `${environment.url}/api/autisme/autistics`;
      this.getData();

      }
  }


  // override async getData(): Promise<void> {
  //   this.service.list(this.actionUrl, this.options).subscribe(res => {
  //     this.result = res.filter(patient => patient.score_parent != 0);
  //     this.spinner = true
  //   });

  //   console.log('result', this.result);
  // }

  // async getPatients(type_illness: string) {
  //   this.actionUrl = `${environment.url}/api/${type_illness === 'autisme' ? 'autisme/autistics' : 'patients'}`;
  //   await this.getData();
  // }

