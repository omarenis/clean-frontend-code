import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Patient} from "../../models/patient";
import {AbstractRestService} from "../../services/genericservice";
import {SecureStorageService} from "../../services/secure-storage.service";
import {DynamicTableCrud} from "../../services/dynamic-table";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent extends DynamicTableCrud<Patient> implements OnInit {
  headers = ['', 'الاسم', 'اللقب', 'تاريخ الميلاد'];
  access !: string | null;
  patient !: Patient;
  userId !: number;
  type_user !: string | null;
  spinner: boolean = false
  @ViewChild('superviseModel') superviseModel !: ElementRef;
  response!: any;
  is_valid!: boolean

  constructor(protected override service: AbstractRestService<Patient>,
              protected override secureStorageService: SecureStorageService,) {
    super(service, `${environment.url}/api/patients`, secureStorageService);
  }

  async ngOnInit(): Promise<void> {
    this.access = localStorage.getItem('access');
    const type_user = localStorage.getItem('type_user');
    if (type_user !== null) {
      this.type_user = type_user;
    }
    if (this.access) {
      this.options = {
        params: type_user === "parent" ? {parent_id: Number(localStorage.getItem('userId'))} : null,
        headers: {Authorization: `Bearer ${this.secureStorageService.getToken(this.access)}`}
      };
      await this.getPatients('tdah');
      console.log(this.result);
    }
  }

  override async getData(): Promise<void> {
    this.service.list(this.actionUrl, this.options).subscribe(res => {
      this.result = res.filter(patient => patient.score_parent != 0);
      this.spinner = true
    });

    console.log('result', this.result);
  }

  async getPatients(type_illness: string) {
    this.actionUrl = `${environment.url}/api/${type_illness === 'autisme' ? 'autisme/autistics' : 'patients'}`;
    await this.getData();
  }
}
