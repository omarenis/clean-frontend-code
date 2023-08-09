import {Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Patient} from "../../models/patient";
import {SecureStorageService} from "../../services/secure-storage.service";
import {AbstractRestService} from "../../services/genericservice";
import {ActivatedRoute, Router} from "@angular/router";
import Option from "$GLOBAL$";

@Component({
  selector: 'app-child-profile-autisme',
  templateUrl: './child-profile-autisme.component.html',
  styleUrls: ['./child-profile-autisme.component.css']
})
export class ChildProfileAutismeComponent implements OnInit {
  type_user !: string;
  token !: string;
  userId !: number;
  data: any = {};
  patient !: Patient;
  parentpatient: any;
  questionautiste!: any
  FirstQautiste!: any
  SecondQautiste!: any
  protected options !: Option;

  constructor(private service: AbstractRestService<Patient>, private secureStorageService: SecureStorageService, private router: Router,
              private route: ActivatedRoute,) {
  }

  ngOnInit() {
    const access = localStorage.getItem('access');
    const userId: number = Number(localStorage.getItem('userId'));
    const type_user = localStorage.getItem('type_user');
    if (type_user !== null) {
      this.type_user = type_user;
    }
    if (access !== null) {
      this.token = this.secureStorageService.getToken(access);
    }
    this.route.params.subscribe(params => {
      this.service.get(`${environment.url}/api/autisme/autistics`, params['id'], {}).subscribe({
        next: (response: any) => {
          this.patient = response
          this.parentpatient = this.patient.parent
        }
      })
    })
  }

  getquestionautiste() {

    this.route.params.subscribe(params => {
      const access = localStorage.getItem('access');
      const type_user = localStorage.getItem('type_user');

      if (access) {
        this.options = {
          params: type_user === "doctor" ? {patient: Number(params['id'])} : null,
          headers: {Authorization: `Bearer ${this.secureStorageService.getToken(access)}`}
        }
        this.service.list(`${environment.url}/api/autisme/level1`, this.options).subscribe(res => {
          this.questionautiste = res
          this.FirstQautiste = this.questionautiste[0]
          this.SecondQautiste = this.questionautiste[1]
          console.log(this.questionautiste);
        })
      }
    })
  }

  saveItem(patient: Patient) {
    this.router.navigate(['/appointment', patient.id]);
  }
}
