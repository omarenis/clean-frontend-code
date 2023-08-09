import {Component} from '@angular/core';
import {environment} from "../../../environments/environment";
import {AbstractRestService, saveDataToLocalhost} from "../../services/genericservice";
import {Patient} from "../../models/patient";
import {FirstAutismTestService} from "../../services/autism/first-autism-test.service";
import {ActivatedRoute, Router} from "@angular/router";
import {SecureStorageService} from "../../services/secure-storage.service";
import {FormGroup} from "@angular/forms";
import {firstAutismTest} from "../../models/first_autism_test";


function getformdata() {
  const looks_at_pointed_item = localStorage.getItem('looks_at_pointed_item');
  const possibly_deaf = localStorage.getItem('possibly_deaf');
  const pretending_playing = localStorage.getItem('pretending_playing');
  const climbing_things = localStorage.getItem('climbing_things');
  const unusual_moves_next_to_eyes = localStorage.getItem('unusual_moves_next_to_eyes');
  const point_to_get_assistance = localStorage.getItem('point_to_get_assistance');
  const point_to_show_smth = localStorage.getItem('point_to_show_smth');
  const cares_abt_other_children = localStorage.getItem('cares_abt_other_children');
  const bring_smth_to_show = localStorage.getItem('bring_smth_to_show');
  const response_to_his_name = localStorage.getItem('response_to_his_name');
  const smiles_back = localStorage.getItem('smiles_back');
  const annoyed_by_daily_noise = localStorage.getItem('annoyed_by_daily_noise');
  const walks = localStorage.getItem('walks');
  const makes_eye_contact = localStorage.getItem('makes_eye_contact');
  const imitate_parent_action = localStorage.getItem('imitate_parent_action');
  const turn_head_like_parent = localStorage.getItem('turn_head_like_parent');
  const make_parent_watch = localStorage.getItem('make_parent_watch');
  const understand_assignments = localStorage.getItem('understand_assignments');
  const check_parent_reaction = localStorage.getItem('check_parent_reaction');
  const loves_dynamic_activities = localStorage.getItem('loves_dynamic_activities');
  const type_parent = localStorage.getItem('type_parent');


  return {
    looks_at_pointed_item,
    possibly_deaf,
    pretending_playing,
    climbing_things,
    unusual_moves_next_to_eyes,
    point_to_get_assistance,
    point_to_show_smth,
    cares_abt_other_children,
    bring_smth_to_show,
    response_to_his_name,
    smiles_back,
    annoyed_by_daily_noise,
    walks,
    makes_eye_contact,
    imitate_parent_action,
    turn_head_like_parent,
    make_parent_watch,
    understand_assignments,
    check_parent_reaction,
    loves_dynamic_activities,
    type_parent
  }
}


@Component({
  selector: 'app-autistic-questions',
  templateUrl: './autistic-questions.component.html',
  styleUrls: ['./autistic-questions.component.css']
})
export class AutisticQuestionsComponent {

  formGroup !: FormGroup;
  questions !: firstAutismTest[];
  type_user !: string;
  step !: number;
  id: any;
  i: any
  j: any
  x: any
  failed: any
  sucess: any
  listfailedchoices: any
  listsucesschoices: any
  allValues: { result: any; }[] = [];

  constructor(private questionService: FirstAutismTestService, private router: Router, private activatedRoute: ActivatedRoute,
              private patientService: AbstractRestService<Patient>, private secureStorageService: SecureStorageService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(() => {
      this.step = Number(this.activatedRoute.snapshot.params['id']);
      const index = 5;
      const templateForm = this.questionService.generateFormGroup((this.step - 1) * index, this.step * index);
      this.questions = templateForm.firstautismtest;
      this.formGroup = templateForm.formGroup;

      for (this.i = 0; this.i < this.questions.length; this.i++) {
        this.x = this.questions[this.i].failedchoices
        for (this.j = 0; this.j < this.x.length; this.j++) {
          this.failed = this.x[this.j].result
          this.listfailedchoices = this.x[this.j].listfailedchoices;
          this.allValues.push({
            result: this.failed,
//let value of allValues; let k=index
          });
        }
      }

      for (this.i = 0; this.i < this.questions.length; this.i++) {
        this.x = this.questions[this.i].sucesschoices
        for (this.j = 0; this.j < this.x.length; this.j++) {
          this.sucess = this.x[this.j].result
          this.listsucesschoices = this.x[this.j].listsucesschoices
        }
      }
    });
  }


  async submit(event: Event): Promise<void> {
    event.preventDefault();
    saveDataToLocalhost(this.formGroup.value);

    if (this.step === 4) {
      console.log('getformdata()getformdata()getformdata()', getformdata())
      let patientData = localStorage.getItem('patient');
      let patient = patientData !== null ? JSON.parse(patientData) : {};
      patient = {
        ...patient,
        level1: {
          ...getformdata()
        }
      };
      let access = localStorage.getItem('access');
      if (access !== null) {
        const subscriber = patient.id === undefined ? this.patientService.create(`${environment.url}/api/autisme/autistics`, patient, {
          headers: {Authorization: `Bearer ${this.secureStorageService.getToken(access)}`}
        }) : this.patientService.create(`${environment.url}/api/autisme/level1`, {
          patient: patient.id,
          ...getformdata(),
        }, {
          headers: {Authorization: `Bearer ${this.secureStorageService.getToken(access)}`}
        });
        subscriber.subscribe(async () => {
          const userId = localStorage.getItem('userId');
          const access = localStorage.getItem('access');
          const refresh = localStorage.getItem('refresh');
          const name = localStorage.getItem('name');
          const type_user = localStorage.getItem('type_user');
          const family_name = localStorage.getItem('family_name');
          const lastLogin = localStorage.getItem('lastLogin');

          localStorage.clear();
          if (userId !== null && access !== null && refresh !== null && type_user !== null && name !== null && patient !== null && family_name !== null && lastLogin !== null) {
            localStorage.setItem('userId', userId);
            localStorage.setItem('access', access);
            localStorage.setItem('refresh', refresh);
            localStorage.setItem('name', name);
            localStorage.setItem('type_user', type_user);
            localStorage.setItem('family_name', family_name);
            localStorage.setItem('lastLogin', lastLogin);

          }
       //   this.toast.success({detail: "تمت العملية بنجاح", summary: 'تمت إضافة الطفل بالنجاح', duration: 5000})
          await this.router.navigate(['/childlist']);
        })
      }
    } else {
      console.log('this.formGroup.value', this.formGroup.value)
      await this.router.navigate([`/firstautismtest/${this.step + 1}`]);
    }
  }

}
