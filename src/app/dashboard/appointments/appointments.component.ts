import { Component, OnInit } from '@angular/core';
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
    consultation!:any
    ngOnInit(): void {
      const access = localStorage.getItem('access');
if (access) {
  this.options = {
      headers: {
          Authorization: `Bearer ${this.secureStorageService.getToken(access)}`
      },
      params: null
  };
}
      this.service.list(`${environment.url}/api/patients/consultations`,{
        headers: this.options.headers
      }).subscribe((response) => {
        this.consultation=response
        this.numberItems = this.consultation.length;
console.log( this.numberItems )
    })
   }
}
