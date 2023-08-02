import {Injectable} from '@angular/core';
import {Question} from '../models/question';
import {FormControl, FormGroup, Validators} from '@angular/forms';
export interface TemplateForm {
    questions: Question[];
    formGroup: FormGroup;
}

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
    private parentQuestions: Question[] = [
        {
            id: 1,
            label: 'يقرض الاشياء اظافره - شعره - اصابعه - ثيابه',
            formControlName: 'chew_mib_things'
        },
        {
            id: 2,
            label: ' لا يحترم من هو اكبر منه سنا( يتقبح في العباد اللي أكبر منو) ',
            formControlName: 'insolent_with_grown_ups'
        },
        {
            id: 3,
            label: 'يجد صعوبة قي اقامة علاقات مع اترابه و المحافظة عليها (ما يطولش الصحبة)',
            formControlName: 'trouble_make_keep_friends'
        },
        {
            id: 4,
            label: 'سريع الانفعال و الاستثارة',
            formControlName: 'excitable_impulsive'
        },
        {
            id: 5,
            label: 'يريد ان يتحكم',
            formControlName: 'want_dominate'
        },
        {
            id: 6,
            label: 'يمص او يمضغ ابهامه- الثياب- اللحاف',
            formControlName: 'suck_chew_things'
        },
        {
            id: 7,
            label: 'يبكي كثيرا و بسهولة',
            formControlName: 'cry_often_easily'
        },
        {
            id: 8,
            label: 'يشعر بان الاخرين يريدون الاساءة اليه دفاعي',
            formControlName: 'feels_attacked_defensive'
        },
        {
            id: 9,
            label: 'يميل الى احلام اليقظة  (يسرح)',
            formControlName: 'dreamer'
        },
        {
            id: 10,
            label: 'يجد صعوبة في اكتساب المعلومات  (التعلم)',

            formControlName: 'has_learning_difficulties'
        },
        {
            id: 11,
            label: 'كثير الحركة لا يستطيع ان يبقى ماكثا في مكانه',
            formControlName: 'squirms',
        },
        {
            id: 12,
            label: 'يخاف من كل ما هو جديد (المواقف-اماكن-اناس-المدرسة)',
            formControlName: 'afraid_new_things'
        },
        {
            id: 13,
            label: 'كثير الحركة يحتاج دوما الى القيام بشي ما',
            formControlName: 'restless_needs_do_something'
        },
        {
            id: 14,
            label: 'متلف مخرب(فسايدي)',
            formControlName: 'destructive'
        },
        {
            id: 15,
            label: 'يكذب يختلق الاحاديث',
            formControlName: 'lie_made_up_stories'
        },
        {
            id: 16,
            label: 'محتشم(حشام)',
            formControlName: 'shy'
        },
        {
            id: 17,
            label: 'يورط نفسه و يضع نفسه في مازق خلافا عن اترابه(يفيقو بيه) ',
            formControlName: 'get_troubles_more_than_others',
        },
        {
            id: 18,
            label: 'لا يستعمل نفس السبل اللغوي الذي يوظفه اترابه ( لغة الطفل . يتلعثم في الكلام.كلام غير واضح)',
            formControlName: 'speak_like_baby_stutters',
        },
        {
            id: 19,
            label: 'ينكر اخطاءه و ينسبها لغيره',
            formControlName: 'deny_mistakes_blame_others',
        },
        {
            id: 20,
            label: 'كثير الخصام و يورط نفسه في المشاجرات',
            formControlName: 'quarrelsome_get_involved_fight'
        },
        {
            id: 21,
            label: 'يشتزر يقطب وجهه يكظم غيظه(يغضب، ينطر، يمد وجهو)',
            formControlName: 'pout_sulk_easily',
        },
        {
            id: 22,
            label: 'يستولى على ممتلكات غيره',
            formControlName: 'steal_things',
        },
        {
            id: 23,
            label: 'عنيد يطيع عن مضض',
            formControlName: 'disobey_reluctantly_obey',
        },
        {
            id: 24,
            label: 'يخاف من المرض الموت الوحدة اكثر من غيره',
            formControlName: 'worry_much',
        },
        {
            id: 25,
            label: 'يجد صعوبة في اتمام ما شرع في القيام به',
            formControlName: 'trouble_finishing_things',
        },
        {
            id: 26,
            label: 'يغضب بسهولة ',
            formControlName: 'easily_wrinkled_easily_angry',
        },
        {
            id: 27,
            label: 'يعنف و يشاكس زملاءه',
            formControlName: 'bully_intimidate_comrades',
        },
        {
            id: 28,
            label: 'يجد صعوبة لاتمام نشاط متكرر',
            formControlName: 'trouble_finish_repetitive_activity'
        },
        {
            id: 29,
            label: 'قاس/طاغ( قلبو كاسح ميرحمش)',
            formControlName: 'cruel',
        },
        {
            id: 30,
            label: 'غير ناضج على المستوى العاطفي يستعين بغيره عند القيام باعمال يستطيع القيام بها بمفرده و يحتاج دائما الى ان نطمئنه',
            formControlName: 'immature',
        },
        {
            id: 31,
            label: 'يجد صعوبة في التركيز ',
            formControlName: 'easily_being_distracted',
        },
        {
            id: 32,
            label: 'يشكو من الصداع',
            formControlName: 'headaches',
        }, {
            id: 33,
            label: 'له مزاج متقلب و بصفة متواصلة ',
            formControlName: 'moody'
        },
        {
            id: 34,
            label: 'لا يتقيد بالقوانين و القواعد الاجتماعية يحب اختراق الممنوعات',
            formControlName: 'break_rules',
        },
        {
            id: 35,
            label: 'يتخاصم بكثرة',
            formControlName: 'constantly_fight',
        },
        {
            id: 36,
            label: 'لا ينسجم مع اخوانه و اخواته',
            formControlName: 'not_get_along_with_brothers'
        },
        {
            id: 37,
            label: 'عند القيام بمجهود يحس بسرعة بعدم القدرة على ذلك',
            formControlName: 'enability_finish_when_do_effort',
        },
        {
            id: 38,
            label: 'يشوش يزعج الاطفال الاخرين',
            formControlName: 'disturb_other_children',
        },
        {
            id: 39,
            label: 'يبدو غير سعيد و مرتاح (حزين المظهر)',
            formControlName: 'unhappy',
        },
        {
            id: 40,
            label: 'يجد صعوبة في الاكل (قليل الشهية كثير الحركة اثناء الاكل يقف بين اللقمة و الاخرى )',
            formControlName: 'feeding_problems',
        },
        {
            id: 41,
            label: 'يشكو من الام في المعدة',
            formControlName: 'upset_stomach',
        },
        {
            id: 42,
            label: 'يشكو من صعوبات في النوم لا ينام بسهولة يفيق باكرا جدا ينهض اثناء اليل',
            formControlName: 'sleeping_problems',
        },
        {
            id: 43,
            label: 'يشكو من آلام جسدية مختلفة',
            formControlName: 'physical_aches',
        },
        {
            id: 44,
            label: 'يتقيأ يشكو من الغثيان',
            formControlName: 'vomiting_nausea'
        },
        {
            id: 45,
            label: 'يشعر بالظلم في عائلته و يندد به',
            formControlName: 'feel_wronged_cry_out_injustice',
        },
        {
            id: 46,
            label: 'يتباهى يتكلف(يتفوخر)',
            formControlName: 'brags_boastful',
        },
        {
            id: 47,
            label: 'انهزامي و ينقاد من قبل الاخرين',
            formControlName: 'being_crashed_manipulated',
        },
        {
            id: 48,
            label: 'يشكو من صعوبة في التفريغ المعوي مرض جريان الجوف او القبض.',
            formControlName: 'bowel_movement_problems',
        }
    ];
    private teacherQuestions: Question[] = [
        {
            id: 1,
            label: 'مضطرب (هائج) يستدير حول نفسه في اتجاهات مختلفة و هو جالس على مقعده',
            formControlName: 'restless_squirms_chair',
        },
        {
            id: 2,
            label: 'يصدر اصواتا في غير محلها و عندما لا يسمح الظرف بذلك',
            formControlName: 'inappropriate_noises',
        },
        {
            id: 3,
            label: 'يجب تلبية طلباته حالا',
            formControlName: 'immediately_satisfied_needs',
        },
        {
            id: 4,
            label: 'يميل الى الخبث وقح غير مهذب',
            formControlName: 'arrogant_impolite',
        },
        {
            id: 5,
            label: 'تنتابه نوبات غضب و يقوم بتصرفات غير متوقعة',
            formControlName: 'angry_unexpected_behavior',
        },
        {
            id: 6,
            label: 'له حساسية مفرطة للنقد',
            formControlName: 'sensitive_criticism',
        },
        {
            id: 7,
            label: 'يبدو شارد الذهن',
            formControlName: 'distracted',
        },
        {
            id: 8,
            label: 'يزعج غيره من التلاميذ',
            formControlName: 'annoy_students',
        },
        {
            id: 9,
            label: 'يبدو حالما,أحلام اليقظة ',
            formControlName: 'dreamer',
        },
        {
            id: 10,
            label: 'يعبس و يغضب بسهولة',
            formControlName: 'pout_sulk_easily',
        },
        {
            id: 11,
            label: 'له مزاج متقلب و بصفة واضحة',
            formControlName: 'moody',
        },
        {
            id: 12,
            label: 'يتشاجر بكثرة',
            formControlName: 'brawler',
        },
        {
            id: 13,
            label: 'يخضع لكل ذي سلطة',
            formControlName: 'submissive_attitude_towards_authority',
        },
        {
            id: 14,
            label: 'مضطرب (هائج) يتحرك باستمرار',
            formControlName: 'goes_left_right',
        },
        {
            id: 15,
            label: 'يثور (يهيج) بسهولة مندفع',
            formControlName: 'easily_turn_on_impulsive',
        },
        {
            id: 16,
            label: 'يستدعي انتباه المدرس بصفة مفرطة',
            formControlName: 'excessive_attention_from_teacher',
        },
        {
            id: 17,
            label: 'يبدو غير مقبول من قبل المجموعة',
            formControlName: 'less_accepted_by_group',
        },
        {
            id: 18,
            label: 'ينقاد من قبل الآخرين',
            formControlName: 'led_by_others',
        },
        {
            id: 19,
            label: 'لا يقبل الهزيمة',
            formControlName: 'unaccept_defeat',
        },
        {
            id: 20,
            label: 'ليست له القدرة على تدريب الاخرين او قيادتهم',
            formControlName: 'trouble_guiding_others',
        },
        {
            id: 21,
            label: 'يجد صعوبة في اتمام ما شرع القيام فيه',
            formControlName: 'trouble_finishing_things',
        },
        {
            id: 22,
            label: 'صبياني غير ناضج على المستوى العاطفي يتصرف تصرفات من هو اصغر منه سنا',
            formControlName: 'immature',
        },
        {
            id: 23,
            label: 'ينكر اخطاءه و يتهم غيره',
            formControlName: 'deny_mistakes_blame_others',
        },
        {
            id: 24,
            label: 'يجد صعوبة في التفاهم ( المفاهمة مع غيره من التلاميذ)',
            formControlName: 'trouble_integrating_with_other_students',
        },
        {
            id: 25,
            label: 'يتعاون بقلة مع اترابه بالقسم',
            formControlName: 'less_cooperate_with_others',
        },
        {
            id: 26,
            label: 'يتوتر بسهولة عندما يجب عليه القيام بمجهود ما',
            formControlName: 'upset_easily_make_effort',
        },
        {
            id: 27,
            label: 'يستعين بقلة بمعلمه- يطلب استعانة معلمه بقلة',
            formControlName: 'few_relations_school',
        },
        {
            id: 28,
            label: 'يجد صعوبات في التعلم',
            formControlName: 'has_learning_difficulties',
        }
    ];

    generateFormGroup(typeUser: string, start: number, end: number): TemplateForm {
        let formArray = {};
        let questionArray: Question[];
        if (typeUser === 'teacher') {
            questionArray = this.teacherQuestions.slice(start, end);
        } else {
            questionArray = this.parentQuestions.slice(start, end);
        }
        const pair: any = {};
        questionArray.forEach((question: Question) => {
            Object.assign(pair, {[question.formControlName]: new FormControl('', [Validators.required])});
        });
        formArray = {...pair, ...formArray};
        return {
            questions: questionArray,
            formGroup: new FormGroup(formArray)
        };
    }

    getParentQuestions(): Question[]{
        return this.parentQuestions;
    }
}
