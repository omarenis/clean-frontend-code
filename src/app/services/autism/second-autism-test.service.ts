import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { secondAutismTest } from 'src/app/models/second_autism_test';

export interface TemplateForm {
  firstautismtest: secondAutismTest[];
  formGroup: FormGroup;
}

@Injectable({
  providedIn: 'root'
})
export class SecondAutismTestService {

  constructor() { }
  private parentQuestions: secondAutismTest[] = [
    {
      id: 1,
      label: 'يلتفت الى مصدر صوت الجرس  حين يكون مشغولا  بنشاط ما',
      formControlName: 'chew_mib_things'
  },
  {
      id: 2,
      label: 'يضع ثلاثة اشكال  في  مكانها  الصحيح',
      formControlName: 'insolent_with_grown_ups'
  },
  {
      id: 3,
      label: 'يضع أربعة  اشكال  في  مكانها  الصحيح',
      formControlName: 'trouble_make_keep_friends'
  },
  {
      id: 4,
      label: 'يضع خمسة  اشكال  في  مكانها  الصحيح ',
      formControlName: 'excitable_impulsive'
  },
  {
      id: 5,
      label: 'يضع ستة  اشكال  في  مكانها  الصحيح',
      formControlName: 'want_dominate'
  },
  {
      id: 6,
      label: 'ركب  صورة  حيوان او  خريطة  كاملة',
      formControlName: 'suck_chew_things'
  },
  {
      id: 7,
      label: 'يركب صورة  طفل  او  طفلة',
      formControlName: 'cry_often_easily'
  },
  {
      id: 8,
      label: 'يستخدم ثلاثة أدوات تصدر الصوت بالترتيب  مثلما  تفعل امامه',
      formControlName: 'feels_attacked_defensive'
  },
  {
      id: 9,
      label: 'يطابق خمسة أشياء  مع صورها',
      formControlName: 'dreamer'
  },
  {
      id: 10,
      label: 'يجد شيء  مخبىء',

      formControlName: 'has_learning_difficulties'
  },
  {
      id: 11,
      label: 'يجد طعام مخبا تحت ثلاثة اكواب متشابهة',
      formControlName: 'squirms',
  },
  {
      id: 12,
      label: 'يمكنه التعرف  على خمسة أشياء  موضوعة في كيس  اسود بمجرد لمسها',
      formControlName: 'afraid_new_things'
  },
  {
      id: 13,
      label: 'ينسخ خط عمودي',
      formControlName: 'restless_needs_do_something'
  },
  {
      id: 14,
      label: 'ينسخ دائرة',
      formControlName: 'destructive'
  },
  {
      id: 15,
      label: 'ينسخ مربع',
      formControlName: 'lie_made_up_stories'
  },
  {
      id: 16,
      label:'ينسخ مثلث',
      formControlName: 'shy'
  },
  {
      id: 17,
      label:'ينسخ شكل  الماسة',
      formControlName: 'get_troubles_more_than_others',
  },
  {
      id: 18,
      label: 'ينسخ سبعة حروف',
      formControlName: 'speak_like_baby_stutters',
  },
  {
      id: 19,
      label:'يرسم رجل',
      formControlName: 'deny_mistakes_blame_others',
  },
  {
      id: 20,
      label: 'يكتب  اسمه الأول',
      formControlName: 'quarrelsome_get_involved_fight'
  },
  {
      id: 21,
      label: 'يقص ورقة بالمقص',
      formControlName: 'pout_sulk_easily',
  },
  {
      id: 22,
      label: 'يهتم بكتاب الصور  وينشغل به',
      formControlName: 'steal_things',
  },
  {
      id: 23,
      label: 'يقوم بتمثبل  صامت لاستخدام خمسة أشياء ',
      formControlName: 'disobey_reluctantly_obey',
  },
  {
      id: 24,
      label: 'يطابق  تسعة حروف',
      formControlName: 'worry_much',
  },
  {
      id: 25,
      label: 'يصنف المكعبات في  حاويتين منفصلتين  حسب اللون',
      formControlName: 'trouble_finishing_things',
  },
  {
      id: 26,
      label: 'يطابق  الاشكال  حسب لونها',
      formControlName: 'easily_wrinkled_easily_angry',
  },
  {
      id: 27,
      label: 'يصنف البطاقات حسب المجموعات الضمنية  15 بطاقة',
      formControlName: 'bully_intimidate_comrades',
  },
  {
      id: 28,
      label: 'ينتبه حين تقلد حركاته ويستجيب  لك بطريقة  ما',
      formControlName: 'trouble_finish_repetitive_activity'
  },
  {
      id: 29,
      label: 'ينتبه حين تقلد اصواته ويستجيب لك بطريقة  ما ',
      formControlName: 'cruel',
  },
  {
      id: 30,
      label: 'يردد ثلاثة أصوات خلف الفاحص',
      formControlName: 'immature',
  },
  {
      id: 31,
      label: 'يردد رقمين  خلف الفاحص',
      formControlName: 'easily_being_distracted',
  },
  {
      id: 32,
      label: 'يردد حرفين خلف الفاحص',
      formControlName: 'headaches',
  }, {
      id: 33,
      label: 'يردد كلمتين خلف الفاحص',
      formControlName: 'moody'
  },
  {
      id: 34,
      label: 'ينفد ثلاثة أوامر  في  طلب  واحد ',
      formControlName: 'break_rules',
  }
];
generateFormGroup( start: number, end: number): TemplateForm {
  let formArray = {};
  let questionArray: secondAutismTest[];

  questionArray = this.parentQuestions.slice(start, end);

  const pair: any = {};
  questionArray.forEach((question: secondAutismTest) => {
      Object.assign(pair, {[question.formControlName]: new FormControl('', [Validators.required])});
  });
  formArray = {...pair, ...formArray};
  return {
    firstautismtest: questionArray,
      formGroup: new FormGroup(formArray)
  };
}

getParentQuestions(): secondAutismTest[]{
  return this.parentQuestions;
}
}
