import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-do-test',
  templateUrl: './do-test.component.html',
  styleUrls: ['./do-test.component.css']
})
export class DoTestComponent {
  constructor(private router : Router){

  }
    userId!:any
type_user!:any
  seturl(){
    this.userId=localStorage.getItem('userId')
    this.type_user=localStorage.getItem('type_user')
if( this.type_user==undefined){
  this.router.navigate(["/public/Login"])
}

else if(this.type_user==='parent'){
    this.router.navigate(["/dashboard/Children"])
  }
  else{

  }
}
}
