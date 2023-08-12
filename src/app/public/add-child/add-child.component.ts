import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { AbstractRestService } from 'src/app/services/genericservice';

@Component({
  selector: 'app-add-child',
  templateUrl: './add-child.component.html',
  styleUrls: ['./add-child.component.css']
})
export class AddChildComponent implements OnInit{
  formGroup !: FormGroup;
    validated = true;
    type_user !: string | null;
    error !: boolean;
type_test!:any
    constructor(private patientService: AbstractRestService<Patient>, private router: Router, private activeRoute: ActivatedRoute) {}


     ngOnInit(){
      this.type_user = localStorage.getItem('type_user');
      this.formGroup = new FormGroup({
          name: new FormControl('', [Validators.required]),
          family_name: new FormControl('', [Validators.required]),
          birthdate: new FormControl('', [Validators.required]),
          gender: new FormControl('', [Validators.required]),
      });
      if (this.type_user !== 'parent')
      {
         this.formGroup.addControl('parent', new FormControl('', [Validators.required]));
      }
      this.activeRoute.params.subscribe(params=>{
        this.type_test=params['type_test']
        if (this.type_test === 'Autism')
        {
           this.formGroup.addControl('type_parent', new FormControl('', [Validators.required]));
        }
      })
  }

async submit(event: Event):Promise<void> {
await this.ageCalculator()
if(this.type_test === 'Tdah'){
  if (this.showAge<3 || this.showAge>17){
    //this.toast.error({detail:" خطأ في إدخال الطفل",summary:'هذه المنصة موجهة فقط للأطفال بين 3 و 17 سنة',duration:5000});
    }
    else{
      console.log('datachild',this.formGroup.value)
      this.validated = true;
      event.preventDefault();
      localStorage.setItem('patient', JSON.stringify(this.formGroup.value))
      this.router.navigate([`/public/Tdah_question/${localStorage.getItem('type_user')}/1`]);
    }
}else{
  if (this.showAge<1 || this.showAge>2){
   // this.toast.error({detail:" خطأ في إدخال الطفل",summary:'هذه المنصة موجهة فقط للأطفال بين  سنة و سنتين',duration:5000});
    }
    else{
      console.log('datachild',this.formGroup.value)
      this.validated = true;
      event.preventDefault();
      localStorage.setItem('type_parent',this.formGroup.value.type_parent)
      localStorage.setItem('patient', JSON.stringify({
        name: this.formGroup.value.name,
        family_name:this.formGroup.value.family_name ,
        birthdate: this.formGroup.value.birthdate ,
        gender : this.formGroup.value.gender ,
      }))

      this.router.navigate([`/public/Autistic_question/1`]);
    }
}


    }
age!:any;
showAge!:any;
ageCalculator(){
  if(this.age){
    const convertAge = new Date(this.age);
    const timeDiff = Math.abs(Date.now() - convertAge.getTime());
    this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
  }
}
}
