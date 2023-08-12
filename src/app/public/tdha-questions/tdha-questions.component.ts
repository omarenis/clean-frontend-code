import {Component, OnInit} from '@angular/core';
import {AbstractRestService, saveDataToLocalhost} from "../../services/genericservice";
import {FormGroup} from "@angular/forms";
import {Question} from "../../models/question";
import {QuestionService} from "../../services/question.service";
import {Patient} from "../../models/patient";
import {ActivatedRoute, Router} from "@angular/router";
import {SecureStorageService} from "../../services/secure-storage.service";
import {environment} from "../../../environments/environment";

function getformdata(parentformdata: boolean) {
  const dreamer = localStorage.getItem('dreamer');
  const pout_sulk_easily = localStorage.getItem('pout_sulk_easily');
  const moody = localStorage.getItem('moody');
  const trouble_finishing_things = localStorage.getItem('trouble_finishing_things');
  const immature = localStorage.getItem('immature');
  const deny_mistakes_blame_others = localStorage.getItem('deny_mistakes_blame_others');
  const has_learning_difficulties = localStorage.getItem('has_learning_difficulties');
  const chew_mib_things = localStorage.getItem('chew_mib_things');
  const insolent_with_grown_ups = localStorage.getItem('insolent_with_grown_ups');
  const trouble_make_keep_friends = localStorage.getItem('trouble_make_keep_friends');
  const excitable_impulsive = localStorage.getItem('excitable_impulsive');
  const want_dominate = localStorage.getItem('want_dominate');
  const suck_chew_things = localStorage.getItem('suck_chew_things');
  const cry_often_easily = localStorage.getItem('cry_often_easily');
  const feels_attacked_defensive = localStorage.getItem('feels_attacked_defensive');
  const squirms = localStorage.getItem('squirms');
  const afraid_new_things = localStorage.getItem('afraid_new_things');
  const restless_needs_do_something = localStorage.getItem('restless_needs_do_something');
  const destructive = localStorage.getItem('destructive');
  const lie_made_up_stories = localStorage.getItem('lie_made_up_stories');
  const shy = localStorage.getItem('shy');
  const get_troubles_more_than_others = localStorage.getItem('get_troubles_more_than_others');
  const speak_like_baby_stutters = localStorage.getItem('speak_like_baby_stutters');
  const quarrelsome_get_involved_fight = localStorage.getItem('quarrelsome_get_involved_fight');
  const steal_things = localStorage.getItem('steal_things');
  const disobey_reluctantly_obey = localStorage.getItem('disobey_reluctantly_obey');
  const worry_much = localStorage.getItem('worry_much');
  const easily_wrinkled_easily_angry = localStorage.getItem('easily_wrinkled_easily_angry');
  const bully_intimidate_comrades = localStorage.getItem('bully_intimidate_comrades');
  const trouble_finish_repetitive_activity = localStorage.getItem('trouble_finish_repetitive_activity');
  const cruel = localStorage.getItem('cruel');
  const easily_being_distracted = localStorage.getItem('easily_being_distracted');
  const headaches = localStorage.getItem('headaches');
  const break_rules = localStorage.getItem('break_rules');
  const constantly_fight = localStorage.getItem('constantly_fight');
  const not_get_along_with_brothers = localStorage.getItem('not_get_along_with_brothers');
  const enability_finish_when_do_effort = localStorage.getItem('enability_finish_when_do_effort');
  const disturb_other_children = localStorage.getItem('disturb_other_children');
  const unhappy = localStorage.getItem('unhappy');
  const feeding_problems = localStorage.getItem('feeding_problems');
  const upset_stomach = localStorage.getItem('upset_stomach');
  const sleeping_problems = localStorage.getItem('sleeping_problems');
  const physical_aches = localStorage.getItem('physical_aches');
  const vomiting_nausea = localStorage.getItem('vomiting_nausea');
  const feel_wronged_cry_out_injustice = localStorage.getItem('feel_wronged_cry_out_injustice');
  const brags_boastful = localStorage.getItem('brags_boastful');
  const being_crashed_manipulated = localStorage.getItem('being_crashed_manipulated');
  const bowel_movement_problems = localStorage.getItem('bowel_movement_problems');
  const restless_squirms_chair = localStorage.getItem('restless_squirms_chair');
  const inappropriate_noises = localStorage.getItem('inappropriate_noises');
  const arrogant_impolite = localStorage.getItem('arrogant_impolite');
  const immediately_satisfied_needs = localStorage.getItem('immediately_satisfied_needs');
  const angry_unexpected_behavior = localStorage.getItem('angry_unexpected_behavior');
  const sensitive_criticism = localStorage.getItem('sensitive_criticism');
  const distracted = localStorage.getItem('distracted');
  const annoy_students = localStorage.getItem('annoy_students');
  const brawler = localStorage.getItem('brawler');
  const submissive_attitude_towards_authority = localStorage.getItem('submissive_attitude_towards_authority');
  const goes_left_right = localStorage.getItem('goes_left_right');
  const easily_turn_on_impulsive = localStorage.getItem('easily_turn_on_impulsive');
  const excessive_attention_from_teacher = localStorage.getItem('excessive_attention_from_teacher');
  const less_accepted_by_group = localStorage.getItem('less_accepted_by_group');
  const led_by_others = localStorage.getItem('led_by_others');
  const refuse_defeat = localStorage.getItem('unacceptDefeat');
  const trouble_guiding_others = localStorage.getItem('trouble_guiding_others');
  const trouble_integrating_with_other_students = localStorage.getItem('trouble_integrating_with_other_students');
  const less_cooperate_with_others = localStorage.getItem('less_cooperate_with_others');
  const upset_easily_make_effort = localStorage.getItem('upset_easily_make_effort');
  const few_relations_school = localStorage.getItem('few_relations_school');
  return parentformdata ? {
    behaviortroubleparent: {
      insolent_with_grown_ups,
      feels_attacked_defensive,
      destructive,
      deny_mistakes_blame_others,
      quarrelsome_get_involved_fight,
      bully_intimidate_comrades,
      constantly_fight,
      unhappy
    },
    anxitytroubleparent: {
      afraid_new_things, being_crashed_manipulated, shy, worry_much
    },
    hyperactivitytroubleparent: {
      excitable_impulsive,
      want_dominate,
      squirms,
      restless_needs_do_something
    },
    somatisationtroubleparent: {
      headaches, upset_stomach, physical_aches, vomiting_nausea
    },
    learningtroubleparent: {
      has_learning_difficulties,
      trouble_finishing_things,
      enability_finish_when_do_effort,
      easily_being_distracted
    },

    formabrparent: {
      excitable_impulsive,
      cry_often_easily,
      squirms,
      restless_needs_do_something,
      destructive,
      trouble_finishing_things,
      easily_being_distracted,
      moody,
      enability_finish_when_do_effort,
      disturb_other_children
    }

  } : {
    behaviortroubleteacher: {
      arrogant_impolite,
      angry_unexpected_behavior,
      sensitive_criticism,
      pout_sulk_easily,
      moody,
      brawler,
      deny_mistakes_blame_others,
      few_relations_school,
    }, hyperactivitytroubleteacher: {
      restless_squirms_chair,
      inappropriate_noises,
      immediately_satisfied_needs,
      annoy_students,
      goes_left_right,
      easily_turn_on_impulsive,
      excessive_attention_from_teacher,
    }, inattentiontroubleteacher: {
      distracted,
      dreamer,
      led_by_others,
      trouble_guiding_others,
      trouble_finishing_things,
      immature,
      upset_easily_make_effort,
      has_learning_difficulties,
    },
    formabrteacher: {
      restless_squirms_chair,
      angry_unexpected_behavior,
      distracted,
      annoy_students,
      pout_sulk_easily,
      moody,
      goes_left_right,
      easily_turn_on_impulsive,
      trouble_finishing_things,
      upset_easily_make_effort,
    }
  }
}

@Component({
  selector: 'app-tdha-questions',
  templateUrl: './tdha-questions.component.html',
  styleUrls: ['./tdha-questions.component.css']
})
export class TdhaQuestionsComponent implements OnInit {
  formGroup !: FormGroup;
  questions !: Question[];
  type_user !: string;
  step !: number;
  idpatient: any;
  id: any;

  constructor(private questionService: QuestionService, private router: Router, private activatedRoute: ActivatedRoute,
              private patientService: AbstractRestService<Patient>, private secureStorageService: SecureStorageService,) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(() => {
      this.step = Number(this.activatedRoute.snapshot.params['id']);
      this.type_user = this.activatedRoute.snapshot.params['type_user'];
      const index = this.type_user === 'parent' ? 16 : 14;
      const templateForm = this.questionService.generateFormGroup(this.type_user, (this.step - 1) * index, this.step * index);
      this.questions = templateForm.questions;
      this.formGroup = templateForm.formGroup;
      console.log('type user', this.type_user)
      this.idpatient = localStorage.getItem('idpatient');
      console.log('idpatient idpatient', this.idpatient);
      console.log(localStorage.getItem('access'));
    });
  }

  async submit(event: Event): Promise<void> {
    event.preventDefault();
    saveDataToLocalhost(this.formGroup.value);
    if (this.type_user === 'teacher' && this.step === 2 || this.type_user === 'parent' && this.step === 3) {
      let patientData = localStorage.getItem('patient');
      let patient = patientData !== null ? JSON.parse(patientData) : {};
      patient = {
        ...patient,
        ...getformdata(this.type_user == 'parent')
      };
      let access = localStorage.getItem('access');
      if (access !== null) {
        const subscriber = patient.id === undefined ? this.patientService.create(`${environment.url}/api/patients`, patient, {
          headers: {Authorization: `Bearer ${this.secureStorageService.getToken(access)}`}
        }) : this.patientService.put(`${environment.url}/api/patients`, patient.id, {
          id: patient.id,
          ...getformdata(this.type_user == 'parent')
        }, {
          headers: {Authorization: `Bearer ${this.secureStorageService.getToken(access)}`}
        });

        subscriber.subscribe({
          next: async (response: Patient): Promise<void> => {
            console.log('responseresponseresponseresponseresponseresponseresponse', response)
        //    this.toast.success({detail: "تمت العملية بنجاح", summary: 'تمت إضافة الطفل بالنجاح', duration: 5000});
            const userId = localStorage.getItem('userId');
            const access = localStorage.getItem('access');
            const refresh = localStorage.getItem('refresh');
            const name = localStorage.getItem('name');
            const type_user = localStorage.getItem('type_user');
            const lastLogin = localStorage.getItem('lastLogin');
            const family_name = localStorage.getItem('family_name');

            localStorage.clear();
            if (userId !== null && access !== null && refresh !== null && type_user !== null && name !== null && family_name !== null && lastLogin !== null) {
              localStorage.setItem('userId', userId);
              localStorage.setItem('access', access);
              localStorage.setItem('refresh', refresh);
              localStorage.setItem('name', name);
              localStorage.setItem('type_user', type_user);
              localStorage.setItem('lastLogin', lastLogin);
              localStorage.setItem('family_name', family_name);
            }
            if (this.type_user == 'parent') {
              await this.router.navigate(['/dashboard/Children']);
            } else {
              await this.router.navigate(['/studentlist']);

            }
          }
        })
      }

    } else {
      await this.router.navigate([`/public/Tdah_question/${this.type_user}/${this.step + 1}`]);
    }
  }


  back() {
    const userId = localStorage.getItem('userId');
    const access = localStorage.getItem('access');
    const refresh = localStorage.getItem('refresh');
    const name = localStorage.getItem('name');
    const type_user = localStorage.getItem('type_user');
    const family_name = localStorage.getItem('family_name');
    const is_super_doctor = localStorage.getItem('is_super_doctor');
    localStorage.clear();
    if (userId !== null && access !== null && refresh !== null && type_user !== null && name !== null && family_name !== null && is_super_doctor !== null) {
      localStorage.setItem('userId', userId);
      localStorage.setItem('access', access);
      localStorage.setItem('refresh', refresh);
      localStorage.setItem('name', name);
      localStorage.setItem('family_name', family_name);
      localStorage.setItem('is_super_doctor', is_super_doctor);
      localStorage.setItem('type_user', type_user);
    }
  }
}
