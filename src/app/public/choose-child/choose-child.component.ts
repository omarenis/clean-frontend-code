import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { Person } from 'src/app/models/person';
import { Supervise } from 'src/app/models/supervise';
import { DynamicTableCrud } from 'src/app/services/dynamic-table';
import { AbstractRestService } from 'src/app/services/genericservice';
import { SecureStorageService } from 'src/app/services/secure-storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-choose-child',
  templateUrl: './choose-child.component.html',
  styleUrls: ['./choose-child.component.css']
})
export class ChooseChildComponent extends DynamicTableCrud<Patient> implements OnInit{
  constructor(protected override service: AbstractRestService<Patient>, protected override secureStorageService: SecureStorageService,
    private superviseService: AbstractRestService<Supervise>, private doctorService: AbstractRestService<Person>, private router: Router) {
super(service, `${environment.url}/api/patients`, secureStorageService);
}
access !: string | null;
patient !: Patient;
userId !: number;
numberPatients !: number;
type_user !: string | null;
doctors !: Person[];
formGroup !: FormGroup;
async ngOnInit(): Promise<void> {
  this.formGroup = new FormGroup({
    login_number: new FormControl('', [Validators.required]),
});
  this.access = localStorage.getItem('access');
  const type_user = localStorage.getItem('type_user');
  if (type_user !== null){
      this.type_user = type_user;
  }
  if (this.access) {
      this.options = {
          params: null,
          headers: {Authorization: `Bearer ${this.secureStorageService.getToken(this.access)}`}
      };
      await this.getData();

  }
}

override async getData(): Promise<void> {
this.service.list(this.actionUrl, this.options).subscribe(res => {
  this.result=res.filter(patient =>patient.score_parent == 0 );
  this.numberItems = this.result.length;
});
console.log('result', this.result)
}

saveItem(patient : Patient) {
  console.log('idpatient',patient)
localStorage.setItem('patient', JSON.stringify(patient));
 this.router.navigate([`/question/${localStorage.getItem('type_user')}/1`]);
}
}
