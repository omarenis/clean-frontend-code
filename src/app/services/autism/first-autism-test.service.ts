import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { firstAutismTest } from 'src/app/models/first_autism_test';

export interface TemplateForm {
  firstautismtest: firstAutismTest[];
  formGroup: FormGroup;
}




@Injectable({
  providedIn: 'root'
})
export class FirstAutismTestService {
  constructor() {}
  private parentQuestions: firstAutismTest[] = [
    {
        id: 1,
        label: 'لو أشرت إلي شئ فى الغرفة ،هل ينظر طفلك إليه؟(مثال: اذا أشرت إلى لعبة أو حيوان, هل ينظر طفلك إلى اللعبة أو الحيوان؟)',
        formControlName: 'looks_at_pointed_item',
        sucesschoices:[{
          result:'sucess',
          listsucesschoices:[
            {
              id:1,
              choice:'ينظر الى الشئ',
              value:'success'
            },{
              id:2,
              choice:'يشير إلى الشئ',
              value:'success'
            },{
              id:3,
              choice:'ينظر مع التعليق على الشئ',
              value:'success'
            },{
              id:4,
              choice:'ينظر عندما يقول له الأهل أنظر',
              value:'success'
            }
          ]

        }
      ],
      failedchoices:[{
        result:'failed',
        listfailedchoices:[
          {
            id:1,
            choice:'يتجاهل الوالدين',
            value:'failed'
          },{
            id:2,
            choice:'ينظر الى الغرفة بعشوائية',
            value:'failed'
          },{
            id:3,
            choice:'ينظر إلى اصبع األهل',
            value:'failed'
          }]
        }],


    },
  {
        id: 2,
        label: ' هل تسائلت أبدا إذا كان طفلك من المحتمل أن يكون أصم؟',
        formControlName: 'possibly_deaf',
        sucesschoices:[{
          result:'failed',
          listsucesschoices:[
            {
              id:1,
              choice:'غالبا يتجاهل الاصوات',
              value:'failed'

            },{
              id:2,
              choice:'غالبا يتجاهل الاشخاص',
              value:'failed'

            },
          ]}

      ]   ,
         failedchoices:[{
        result:'sucess',
        listfailedchoices:[
          {
            id:1,
            choice:'لا',

          },
         ]
}
    ],


    },
     {
        id: 3,
        label: 'هل يتظاهر أثناء اللعب ليجعلك تعتقد أنه يمثل دور ما ( اللعب التخيلي ) ؟',
        formControlName: 'pretending_playing',
        sucesschoices:[{
          result:'sucess',
          listsucesschoices:[

          {id:2,
            choice:'يتظاهر بالشرب من لعبة الكوب',
            value:'success'
          },{
            id:3,
            choice:'يتظاهر باألكل من لعبة الملعقة أو الشوكة',
            value:'success'
          },{
            id:4,
            choice:'يتظاهر وكأنه يتكلم بالهاتف',
            value:'success'
          },{
            id:5,
            choice:'يتظاهر بإطعام اللعبة )العروس أو الحيوان ( بأكل حقيقى أو خيالى؟',
            value:'success'
          },{
            id:6,
            choice:'يدفع السيارة كما لو كانت تسير على طريق تخيلى ؟',
            value:'success'
          },{
            id:7,
            choice:'يتظاهر بأنه انسان ألى أو طائرة أو راقصة باليه أو اى شخصية أخرى مفضلة لديه؟',
            value:'success'
          },{
            id:8,
            choice:'يضع القدر اللعبة)الوعاء اللعبة ( على فرن تخيلى',
            value:'success'
          },{
            id:9,
            choice:'يمثل كانه يحرك الطعام في وعاء',
            value:'success'
          },{
            id:10,
            choice:'ضع لعبة أو دمية تمثل شخصية معينة داخل السيارة أو الشاحنة كأنها سائق أو مسافر',
            value:'success'
          },{
            id:11,
            choice:'هل يتظاهر بكنس السجاد أو مسح األرضية أو تقليم الحشائش',
            value:'success'
          }],
     }],
          failedchoices:[{
          result:'failed',
          listfailedchoices:[
            { id:1,
              choice:'لا',
              value:'failed'
            }
           ]

        }]
    },
    {
        id: 4,
        label: 'هل يحب طفلك التسلق أو التشعبط على األشياء؟( مثال ، الأثاث، أدوات الملعب، أو السلالم )؟',
        formControlName: 'climbing_things',
        sucesschoices:[{
          result:'sucess',
          listsucesschoices:[
            { id:1,
              choice:'لا',
              value:'failed'
            },{
              id:2,
              choice:'السلم؟',
              value:'success'
            },{
              id:3,
              choice:'الكراسى؟',
              value:'success'

            },
            {
              id:4,
              choice:' الأثاث ؟',
              value:'success'

            },
            {
              id:5,
              choice:'التجهيزات والمعدات فى حديقة األلعاب؟',
              value:'success'

            },

          ]

     } ],
      failedchoices:[{
        result:'failed',
        listfailedchoices:[
          { id:1,
            choice:'لا',
            value:'failed'
          }
         ]

      }]
    },
   {
        id: 5,
        label: 'هل يقوم طفلك بتحريك أصابعه بطريقة غير عادية بالقرب من عينيه ؟',
        formControlName: 'unusual_moves_next_to_eyes',
        sucesschoices:[{
          result:'sucess',
          listsucesschoices:[
          {
          id:1,
          choice:'هل طفلك في أي وقت مضى نظر إلى يديه ؟ ',
          value:'success'

        },{
          id:2,
          choice:'هل طفلك في أي وقت مضى حرك أصابعه عندما لعب الغميضة ؟',
          value:'success'
        },]

    } ],
      failedchoices:[{
        result:'failed',
        listfailedchoices:[
       {
            id:3,
            choice:'هل طفلك في أي وقت مضى تلاعب أو هزهز أصابعه بالقرب من عينيه ؟',
            value:'failed'
          },
          {
            id:4,
            choice:'هل طفلك في أي وقت مضى رفع قبضة يديه و و ضعها بالقرب من عينيه ؟',
            value:'failed'
          },
          {
            id:5,
            choice:'هل طفلك في أي وقت مضى وضع قبضة يديه بجانب عينيه و نظر بطرف عينيه؟',
            value:'failed'
          },
          {
            id:6,
            choice:'هل طفلك في أي وقت مضى رفرف بيده بالقرب من وجهه ؟',
            value:'failed'
          },

          {
            id:7,
            choice:'لا',
            value:'success'
          }
         ]

      }]
    },
    {
        id: 6,
        label: 'هل يشير طفلك بإصبع واحد ليطلب شئ ما أو ليحصل على مساعدة؟ مثال ، يشير لطعام أو للعبة ال يستطيع الوصول اليها؟',
        formControlName: 'point_to_get_assistance',
        sucesschoices:[{
          result:'sucess',
          listsucesschoices:[
            {
              id:1,
              choice:' هل الطفل يحاول أن يصل إلى الشئ بكل يده؟',

            },{
              id:2,
              choice:' هل الطفل يحاول أن يقودك الى الشئ؟',

            },
            {
              id:3,
              choice:' هل الطفل يحاول الحصول على الشيئ بنفسه؟',

            },
            {
              id:4,
              choice:' هل الطفل يحاول أن يطلب الشئ بإستخدام كلمات أو أصوات؟',
            },
          ]}

      ] ,
      failedchoices:[{
     result:'failed',
     listfailedchoices:[
       {
         id:1,
         choice:'لا',

       },  {
        id:2,
        choice:'إذا طلبت من الطفل أن يريك الشيئ ! هل سوف يشير لما يريد ؟',

      },
      ]
}
 ],
    },
  {
        id: 7,
        label: 'هل يشير طفلك بإصبع واحد ليريك شيئا يثير الاهتمام؟',
        formControlName: 'point_to_show_smth',
        sucesschoices:[{
          result:'sucess',
          listsucesschoices:[
            {
              id:1,
              choice:'طائرة في السماء؟',

            },{
              id:2,
              choice:'شاحنة على الطريق؟',

            },
            {
              id:3,
              choice:'حشرة على الأرض ؟',

            },
            {
              id:4,
              choice:'حيوان فى الفناء؟',
            },
          ]}

      ] ,
      failedchoices:[{
     result:'failed',
     listfailedchoices:[
       {
         id:1,
         choice:'لا',

       }
      ]
}
 ],
    },
        {
        id: 8,
        label: 'هل يهتم طفلك بالاطفال الآخرين؟',
        formControlName: 'cares_abt_other_children',
        sucesschoices:[{
          result:'sucess',
          listsucesschoices:[
            {
              id:1,
              choice:'هل يهتم الطفل بأقرانه من الأطفال عدا اخوته',

            },{
              id:2,
              choice:'عندما يكون طفلك في الأماكن العامة مثل الحديقة أو الأسواق أو المالعب هل يهتم لوجود الأطفال الّاخرين',

            },
            {
              id:3,
              choice:'يلعب أو يتكلم مع طفل آخر؟',

            },
            {
              id:4,
              choice:'يراقب طفل آخر؟',
            },
            {
              id:5,
              choice:'يضحك مع طفل آخر؟',
            },
            {
              id:6,
              choice:' يتصرف بخجل في البداية ثم يبتسم؟',
            },
            {
              id:7,
              choice:'يبتهج لوجود رغيره من الأطفال؟',
            },
          ]}

      ] ,
      failedchoices:[{
     result:'failed',
     listfailedchoices:[
       {
         id:1,
         choice:'لا',
       },
       {
        id:1,
        choice:'هل يتفاعل بشكل ايجابي مع الأطفال الّاخرين لكن أقل من نصف الوقت ؟',
      },


      ]
    },]
    },
   {
        id: 9,
        label: 'هل ُيريك طفلك الأشياء بأن يجلبها لك أو يحملها لك لكى تراها- ليس من اجل المساعدة- ولكن لمجرد المشاركة ؟)',
        formControlName: 'bring_smth_to_show',
        sucesschoices:[{
          result:'sucess',
          listsucesschoices:[
            {
              id:1,
              choice:'لعبه أو صورة لمجرد أن يريها لك ؟',

            },
            {
              id:2,
              choice:'إحدى رسوماته ؟',

            },
            {
              id:3,
              choice:'زهرة قطفها ؟',

            },
            {
              id:4,
              choice:'حشر ة وجدها بين الحشائش أو على الأرض ؟',
            },
            {
              id:5,
              choice:'بعض المكعبات رتبها بطريقة معينة ؟',
            },
          ]
        }] ,
      failedchoices:[{
      result:'failed',
      listfailedchoices:[
       {
         id:1,
         choice:'لا',
       }

      ]
}]
    },
   {
         id: 10,
        label: 'هل يستجيب طفلك عندما تناديه بإسمه؟',

        formControlName: 'response_to_his_name',
        sucesschoices:[{
          result:'sucess',
          listsucesschoices:[
            {
              id:1,
              choice:'ينظر إلى األعلى ؟',

            },
            {
              id:2,
              choice:'يتكلم أو ينارغى ؟',

            },
            {
              id:3,
              choice:'يوقف ما يقوم به ؟',

            },

          ]
        }] ,
      failedchoices:[{
      result:'failed',
      listfailedchoices:[
       {
         id:1,
         choice:'لا يستجيب! ؟',
       },
        {
        id:2,
        choice:'يبدو لك أنه يسمعك ولكن يتجاهلك !؟',

      },
      {
        id:3,
        choice:'يستجيب فقط إذا كنت أمامه مباشرة ! ؟',

      },
      {
        id:4,
        choice:' يستجيب فقط إذا لمسه أحد !؟',

      },

      ]
    }]
    },
    {
        id: 11,
        label: 'عندما تبتسم لطفلك، هل يرد لك اإلبتسامة ؟',
        formControlName: 'smiles_back',
        sucesschoices:[{
          result:'sucess',
          listsucesschoices:[
            {
              id:1,
              choice:'يبتسم عندما تبتسم ؟',

            },{
              id:2,
              choice:'يبتسم عندما تدخل إلى الغر فة؟',

            },
            {
              id:3,
              choice:'يبتسم عندما تعود بعد ما كنت بعيدا( تعود من العمل ) ؟',

            },

          ]}

      ] ,
      failedchoices:[{
     result:'failed',
     listfailedchoices:[
       {
         id:1,
         choice:'يبتسم دائما ؟',

       },
       {
        id:2,
        choice:'يبتسم ولكن مع لعبته أو نشاطه المفضل ؟ ',

      },
      {
        id:3,
        choice:'يبتسم لوحده مع نفسه أو لشئ غير محدد؟',

      },

      ]
}
 ],
    },
       {
        id: 12,
        label: 'هل ينزعج طفلك من الضوضاء اليومية؟( مثل صوت المكنسة , المواصالت , بكاء , صراخ الأطفال أو الموسيقى العالية؟)',
        formControlName: 'annoyed_by_daily_noise',
        sucesschoices:[{
          result:'failed',
          listsucesschoices:[
            {
              id:1,
              choice:'يصرخ ؟',

            },{
              id:2,
              choice:'يبكي ؟',

            },
            {
              id:3,
              choice:'يغطي أذنيه بغضب ؟',

            },

          ]}

      ] ,
      failedchoices:[{
     result:'sucess',
     listfailedchoices:[
       {
         id:1,
         choice:'لا',

       },
       {
        id:2,
        choice:'يسد أذنيه بهدوء ؟',

      },
      {
        id:3,
        choice:'يقول لك انه ال يحب هذا الضجيج ؟',

      },

      ]
}
 ],
    },
   {
        id: 13,
        label: 'هل يمشى طفلك؟',
        formControlName: 'walks',
        sucesschoices:[{
          result:'sucess',
          listsucesschoices:[
            {
              id:1,
              choice:'نعم',

            }

          ]}

      ] ,
      failedchoices:[{
     result:'failed',
     listfailedchoices:[
       {
         id:1,
         choice:'لا',

       },
       {
        id:2,
        choice:'يمشي  باستناد ؟',

      },


      ]
}
 ],
    },
   {
        id: 14,
        label: 'هل ينظر طفلك غالبا فى عينيك أثناء الكلام معه، اللعب معه، أو تغيير ملابسه؟',
        formControlName: 'makes_eye_contact',
        sucesschoices:[{
          result:'sucess',
          listsucesschoices:[
            {
              id:1,
              choice:'نعم',

            },
            {
              id:2,
              choice:'عندما يحتاج شئ ؟',

            },
            {
              id:3,
              choice:'عندما تطعمه ؟  ',

            },
            {
              id:4,
              choice:'عندما تقرأ له قصة؟',

            },

          ]}

      ] ,
      failedchoices:[{
     result:'failed',
     listfailedchoices:[
       {
         id:1,
         choice:'لا',

       },
       {
        id:2,
        choice:'لا ينظر كثيرا ( عندما تقضي اليوم كله مع طفلك ينظر في فى عينيك أقل من خمس مرات)',

      },


      ]
}
 ],
    },
   {
        id: 15,
        label: 'هل يحاول طفلك أن يقلد ما تفعل؟',
        formControlName: 'imitate_parent_action',
        sucesschoices:[{
          result:'sucess',
          listsucesschoices:[
            {
              id:1,
              choice:'عندما تخرج لسانك للأمام ؟ ',

            },
            {
              id:2,
              choice:'عندما تصدر أصوات مبهجة ؟',

            },
            {
              id:3,
              choice:'عندما تشير بيدك مودعا (باي ـ باي )؟',

            },
            {
              id:4,
              choice:'عندما تصفق بيدك؟',

            },
            {
              id:5,
              choice:'عندما تضع إصبعك على شفتيك كإشارة ل"اصمت" أو "صه" ؟',

            },
            {
              id:6,
              choice:'عندما ترسل قبلة فى الهواء؟',

            },
            {
              id:7,
              choice:'عندما ترسل قبلة فى الهواء؟',

            },

          ]}

      ] ,
      failedchoices:[{
     result:'failed',
     listfailedchoices:[
       {
         id:1,
         choice:'لا',

       },



      ]
}
 ],
    },
        {
        id: 16,
        label:'إذا أدرت رأسك للنظر إلى شئ ما، هل يلتفت طفلك حوله ليرى على ما تنظر؟',
        formControlName: 'turn_head_like_parent',
        sucesschoices:[{
          result:'sucess',
          listsucesschoices:[
            {
              id:1,
              choice:'ينظر إلى الشئ الذى تنظر إليه؟',

            },
            {
              id:2,
              choice:'يشير إلى الشئ الذى تنظر اليه؟',

            },
            {
              id:3,
              choice:'ينظر حوله ليرى ما تنظر إليه؟',

            },


          ]}

      ] ,
      failedchoices:[{
     result:'failed',
     listfailedchoices:[
       {
         id:1,
         choice:'يتجاهلك ؟',

       },
       {
        id:2,
        choice:'ينظر إلى وجهك ؟',

      },


      ]
}
 ],
    },
    {
        id: 17,
        label: 'هل يحاول طفلك أن يجعلك تشاهده؟( مثال ، هل ينظر إليك لتثنى عليه، أو يقول "انظر" أو "شاهدنى")؟',
        formControlName: 'make_parent_watch',
        sucesschoices:[{
          result:'sucess',
          listsucesschoices:[
            {
              id:1,
              choice:'يصدر أصواتا أو يغمغم ليجعلك تشاهد ما يفعله؟',

            },
            {
              id:2,
              choice:'ينظر إليك أن تثني عليه أو تعقب معلقا ؟',

            },
            {
              id:3,
              choice:'يتابع النظر إليك ليرى هل تنظر إليه؟',

            },


          ]}

      ] ,
      failedchoices:[{
     result:'failed',
     listfailedchoices:[
       {
         id:1,
         choice:'لا',

       },
      ]
}
 ],
    },
  {
        id: 18,
        label: 'هل يفهم طفلك عندما تطلب منه تنفيذ أمر ما ؟',
        formControlName: 'understand_assignments',
        sucesschoices:[{
          result:'sucess',
          listsucesschoices:[
            {
              id:1,
              choice:'إذا قلت" دعني أرى حذاءك "بدون إشارة، أو إيماءات أو إعطاء تلميحات ( عندما تكون لست خارجا و المرتديا مالبس الخروج )، هل يريك حذاءه؟',

            },
            {
              id:2,
              choice:'إذا قلت" احضر لى البطانية "أو طلبت شيئا اخر بدون إشارة، أو إيماءات أو إعطاء تلميحات، هل سيحضره لك ؟',

            },
            {
              id:3,
              choice:'إذا قلت"ضع الكتاب فوق الكرسى "بدون إشارة، أو إيماءات أو إعطاء أى تلميحات أخرى، هل سيضع الكتاب فوق الكرسى؟',

            },


          ]}

      ] ,
      failedchoices:[{
     result:'failed',
     listfailedchoices:[
       {
         id:1,
         choice:'لا',

       },
      ]
}
 ],
    },
     {
        id: 19,
        label: 'إذا حدث شئ جديد، هل ينظر طفلك إلى وجهك ليرى كيف تشعر حيال ذلك؟ ',
        formControlName: 'check_parent_reaction',
        sucesschoices:[{
          result:'sucess',
          listsucesschoices:[
            {
              id:1,
              choice:'إذا سمع طفلك صوتا غريبا أو مفاجئا مخيفا، هل عادة ينظر إليك ليرى ردّ فعلك قبل الاستجابة ؟',

            },
            {
              id:2,
              choice:'هل طفلك ينظر إليك عندما يقترب منه شخصا لا يعرفه ؟',

            },
            {
              id:3,
              choice:'هل طفلك ينظراليك عندما عندما يواجه شيئا غير مألوف أو مخيف قليلًا ؟',

            },


          ]}

      ] ,
      failedchoices:[{
     result:'failed',
     listfailedchoices:[
       {
         id:1,
         choice:'لا',

       },
      ]
}
 ],
    },
   {
        id: 20,
        label: 'هل يحب طفلك الأنشطة الحركية ( عندما تلعب معه وتجعله يقفز على ركبتيك أو يتأرجف ،كيف يكون شعوره وكيف يتفاعل معك ) ؟',
        formControlName: 'loves_dynamic_activities',
         sucesschoices:[{
          result:'sucess',
          listsucesschoices:[
            {
              id:1,
              choice:'هل يستمتع بالقفز والوثب على الحضن أو يستمتع بالأرجحة',

            },
            {
              id:2,
              choice:'يبتسم أو يضحك ',

            },
            {
              id:3,
              choice:'يتكلم ويريد المزيد من اللعب',

            },
             {
              id:4,
              choice:'يطلب ذلك بأن يرفع يديه لتبدأ معه اللعب ',

            },
             {
              id:5,
              choice:'يتجاوب بطرق أخرى ',
            },


          ]}

      ] ,
      failedchoices:[{
     result:'failed',
     listfailedchoices:[
       {
         id:1,
         choice:'لا',

       },
      ]
}
 ],
    }

];

generateFormGroup( start: number, end: number): TemplateForm {
    let formArray = {};
    let questionArray: firstAutismTest[];

    questionArray = this.parentQuestions.slice(start, end);

    const pair: any = {};
    questionArray.forEach((question: firstAutismTest) => {
        Object.assign(pair, {[question.formControlName]: new FormControl('', [Validators.required])});
    });
    formArray = {...pair, ...formArray};
    return {
      firstautismtest: questionArray,
        formGroup: new FormGroup(formArray)
    };
}

getParentQuestions(): firstAutismTest[]{
    return this.parentQuestions;
}
}
