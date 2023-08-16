import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Patient} from "../../models/patient";
import {Operation} from "../../models/form";
import { DynamicTableCrud } from 'src/app/services/dynamic-table';
import { Person } from 'src/app/models/person';
import { Supervise } from 'src/app/models/supervise';
import { AbstractRestService } from 'src/app/services/genericservice';
import { SecureStorageService } from 'src/app/services/secure-storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-children-table',
  templateUrl: './children-table.component.html',
  styleUrls: ['./children-table.component.css']
})
export class ChildrenTableComponent  extends DynamicTableCrud<Patient> implements OnInit{

  constructor(protected override service: AbstractRestService<Patient>, protected override secureStorageService: SecureStorageService,
    private superviseService: AbstractRestService<Supervise>, private doctorService: AbstractRestService<Person>) {
super(service, `${environment.url}/api/patients`, secureStorageService);
}
headers = ['', 'الاسم', 'اللقب', 'تاريخ الميلاد'];
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


  // @Input() children !: Patient [];
  // @Input() type_user !: string;
  // @Input() type_patients !: string;
  // @Input() childrenLoaded !: boolean;
  // @Output() patientOperationEvent: EventEmitter<Operation> = new EventEmitter<Operation>();

  // sendOperation(operation: string, data: { [key: string]: any }): void {
  //   this.patientOperationEvent.emit(<Operation>{
  //     command: operation,
  //     data: data
  //   });
  // }
}
