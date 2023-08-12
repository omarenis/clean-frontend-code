import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/models/person';
import { DynamicTableCrud } from 'src/app/services/dynamic-table';
import { AbstractRestService } from 'src/app/services/genericservice';
import { SecureStorageService } from 'src/app/services/secure-storage.service';
import { environment } from 'src/environments/environment';
interface algstate {
  id: number;
  governorate: string;
}
interface algdelegation {
  id: string;
  delegation: string;
}

const algstate: algstate[] = [
  {
    "id": 1,
    "governorate": "أدرار"
  },
  {
    "id": 2,
    "governorate": "الشلف"
  },
  {
    "id": 3,
    "governorate": "الأغواط"
  },
  {
    "id": 4,
    "governorate": "أم البواقي"
  },
  {
    "id": 5,
    "governorate": "باتنة"
  },
  {
    "id": 6,
    "governorate": "بجاية"
  },
  {
    "id": 7,
    "governorate": "بسكرة"
  },
  {
    "id": 9,
    "governorate": "البليدة"
  },
  {
    "id": 10,
    "governorate": "البويرة"
  },
  {
    "id": 11,
    "governorate": "تمنراست"
  },
  {
    "id": 12,
    "governorate": "تبسة"
  },
  {
    "id": 13,
    "governorate": "تلمسان"
  },
  {
    "id": 14,
    "governorate": "تيارت"
  },
  {
    "id": 15,
    "governorate": "تيزي وزو"
  },
  {
    "id": 16,
    "governorate": "الجزائر"
  },
  {
    "id": 17,
    "governorate": "الجلفة"
  },
  {
    "id": 18,
    "governorate": "جيجل"
  },
  {
    "id": 19,
    "governorate": "سطيف"
  },
  {
    "id": 20,
    "governorate": "سعيدة"
  },
  {
    "id": 21,
    "governorate": "سكيكدة"
  },
  {
    "id": 22,
    "governorate": "سيدي بلعباس"
  },
  {
    "id": 23,
    "governorate": "عنابة"
  },
  {
    "id": 24,
    "governorate": "قالمة"
  },
  {
    "id": 25,
    "governorate": "قسنطينة"
  },
  {
    "id": 26,
    "governorate": "المدية"
  },
  {
    "id": 27,
    "governorate": "مستغانم"
  },
  {
    "id": 28,
    "governorate": "المسيلة"
  },
  {
    "id": 29,
    "governorate": "معسكر"
  },
  {
    "id": 30,
    "governorate": "ورقلة"
  },
  {
    "id": 31,
    "governorate": "وهران"
  },
  {
    "id": 32,
    "governorate": "البيض"
  },
  {
    "id": 33,
    "governorate": "إليزي"
  },
  {
    "id": 34,
    "governorate": "برج بوعريريج"
  },
  {
    "id": 35,
    "governorate": "بومرداس"
  },
  {
    "id": 36,
    "governorate": "الطارف"
  },
  {
    "id": 37,
    "governorate": "تيندوف"
  },
  {
    "id": 38,
    "governorate": "تيسمسيلت"
  },
  {
    "id": 39,
    "governorate": "الوادي"
  },
  {
    "id": 40,
    "governorate": "خنشلة"
  },
  {
    "id": 41,
    "governorate": "سوق أهراس"
  },
  {
    "id": 42,
    "governorate": "تيبازة"
  },
  {
    "id": 43,
    "governorate": "ميلة"
  },
  {
    "id": 44,
    "governorate": "عين الدفلى"
  },
  {
    "id": 45,
    "governorate": "النعامة"
  },
  {
    "id": 46,
    "governorate": "عين تموشنت"
  },
  {
    "id": 47,
    "governorate": "غرداية"
  },
  {
    "id": 48,
    "governorate": "غليزان"
  },
  {
    "id": 49,
    "governorate": "المغير"
  },
  {
    "id": 50,
    "governorate": "المنيعة"
  },
  {
    "id": 51,
    "governorate": "أولاد جلال"
  },
  {
    "id": 52,
    "governorate": "برج الشاوية"
  },
  {
    "id": 53,
    "governorate": "الرويبة"
  },
  {
    "id": 54,
    "governorate": "سيدي عكاشة"
  },
  {
    "id": 55,
    "governorate": "تندلة"
  },
  {
    "id": 56,
    "governorate": "تنركوك"
  },
  {
    "id": 57,
    "governorate": "تيميمون"
  },
  {
    "id": 58,
    "governorate": "تينركوك"
  },
  {
    "id": 59,
    "governorate": "تقرت"
  },
  {
    "id": 60,
    "governorate": "زمورة"
  },
  {
    "id": 61,
    "governorate": "تقانة"
  },
  {
    "id": 62,
    "governorate": "زريبة"
  }
]
const algdelegation : algdelegation[]=[

  {
    id: 'أدرار',
    delegation: 'عين قزام',
  },
  {
    id: 'أدرار',
    delegation: 'برج باجي مختار',
  },
  {
    id: 'أدرار',
    delegation: 'تامنراست',
  },
  {
    id: 'الشلف',
    delegation: 'الشلف',
  },
  {
    id: 'الشلف',
    delegation: 'بني راشد',
  },
  {
    id: 'الشلف',
    delegation: 'الزبوجة',
  },
  {
    id: 'الشلف',
    delegation: 'الزراردة',
  },
  {
    id: 'الشلف',
    delegation: 'وادي قوسين',
  },
  {
    id: 'الشلف',
    delegation: 'الأبيض سيدي شيح',
  },
  {
    id: 'الأغواط',
    delegation: 'الأغواط',
  },
  {
    id: 'الأغواط',
    delegation: 'تاودموت',
  },
  {
    id: 'الأغواط',
    delegation: 'تازولت',
  },
  {
    id: 'الأغواط',
    delegation: ' بن ناصر',
  },
  {
    id: 'الأغواط',
    delegation: 'فجرة',
  },
  {
    id: 'أم البواقي',
    delegation: 'أم البواقي',
  },
  {
    id: 'أم البواقي',
    delegation: 'عين فكرون',
  },
  {
    id: 'أم البواقي',
    delegation: 'عين مليلة',
  },
  {
    id: 'أم البواقي',
    delegation: 'الهادي خلف',
  },
  {
    id: 'باتنة',
    delegation: 'باتنة',
  },
  {
    id: 'باتنة',
    delegation: 'فسديس',
  },
  {
    id: 'باتنة',
    delegation: 'سريانة',
  },
  {
    id: 'باتنة',
    delegation: 'مشتة الأمل',
  },
  {
    id: 'باتنة',
    delegation: 'تيمقاد',
  },
  {
    id: 'باتنة',
    delegation: 'تازولت',
  },
  {
    id: 'بجاية',
    delegation: 'بجاية المركز',
  },
  {
    id: 'بجاية',
    delegation: ' أقبو',
  },
  {
    id: 'بجاية',
    delegation: 'بوقاعة',
  },
  {
    id: 'بجاية',
    delegation: 'سيدي عيسى',
  },
  {
    id: 'بجاية',
    delegation: 'تيشي',
  },
  {
    id: 'بجاية',
    delegation: 'الكرمة',
  },
  {
    id: 'بجاية',
    delegation: 'تيمزريت',
  },
  {
    id: 'بجاية',
    delegation: 'إفرحونان',
  },
  {
    id: 'بجاية',
    delegation: 'عين تاقراوت',
  },
  {
    id: 'بسكرة',
    delegation: 'بسكرة',
  },
  {
    id: 'بسكرة',
    delegation: 'الدوسن',
  },
  {
    id: 'بسكرة',
    delegation: 'زرزور',
  },
  {
    id: 'بسكرة',
    delegation: 'الشهبونية',
  },
  {
    id: 'بسكرة',
    delegation: 'الشلالة',
  },
  {
    id: 'بسكرة',
    delegation: 'الغروس',
  },
  {
    id: 'البليدة ',
    delegation: 'البليدة المركز',
  },
  {
    id: 'البليدة ',
    delegation: 'موزاية',
  },
  {
    id: 'البليدة ',
    delegation: 'العفرون',
  },
  {
    id: 'البليدة ',
    delegation: 'بوفاريك',
  },
  {
    id: 'البليدة ',
    delegation: 'بوفاريك',
  },
  {
    id: 'البويرة',
    delegation: 'البويرة المركز',
  },
  {
    id: 'البويرة',
    delegation: 'عين بسام',
  },
  {
    id: 'البويرة',
    delegation: 'الأربعاء',
  },
  {
    id: 'البويرة',
    delegation: 'الأخضرية',
  },
  {
    id: 'البويرة',
    delegation: 'الصومعة',
  },
  {
    id: 'البويرة',
    delegation: 'الشياح',
  },
  {
    id: 'البويرة',
    delegation: 'حسين رشيد',
  },
  {
    id: 'البويرة',
    delegation: 'برجمندل',
  },
  {
    id: 'تمنراست ',
    delegation: 'تمنراست المركز',
  },
  {
    id: 'تمنراست ',
    delegation: 'إيليزي',
  },
  {
    id: 'تمنراست ',
    delegation: 'عين غزالة',
  },
  {
    id: 'تمنراست ',
    delegation: 'عين أمقل',
  },
  {
    id: 'تبسة  ',
    delegation: 'تبسة المركز',
  },
  {
    id: 'تبسة  ',
    delegation: 'سفيان',
  },
  {
    id: 'تبسة  ',
    delegation: 'العقلة',
  },
  {
    id: 'تبسة  ',
    delegation: 'بريش',
  },
  {
    id: 'تبسة  ',
    delegation: ' الأربعاء الأخضر',
  },
  {
    id: 'تبسة  ',
    delegation: 'مريغة',
  },
  {
    id: 'تبسة  ',
    delegation: 'قريقر',
  },
  {
    id: 'تبسة  ',
    delegation: 'برج بونعامة',
  },
  {
    id: 'تبسة  ',
    delegation: 'الغزوات',
  },
  {
    id: 'تلمسان',
    delegation: 'تلمسان المركز',
  },
  {
    id: 'تلمسان',
    delegation: 'بني مستر',
  },
  {
    id: 'تلمسان',
    delegation: 'تيانت',
  },
  {
    id: 'تلمسان',
    delegation: 'سيدي عابد',
  },
  {
    id: 'تلمسان',
    delegation: 'سبدو',
  },
  {
    id: 'تلمسان',
    delegation: 'غزوات',
  },
  {
    id: 'تلمسان',
    delegation: 'الأرز',
  },
  {
    id: 'تلمسان',
    delegation: 'العمارنة',
  },
  {
    id: 'تلمسان',
    delegation: ' سيدي العبدلي',
  },
  {
    id: 'تلمسان',
    delegation: 'السواقي',
  },
  {
    id: 'تلمسان',
    delegation: 'عين فتاح',
  },
  {
    id: 'تلمسان',
    delegation: 'المنصورة',
  },
  {
    id: 'تلمسان',
    delegation: 'حمام بوغرارة',
  },
  {
    id: 'تلمسان',
    delegation: 'عين الخضراء',
  },
  {
    id: 'تلمسان',
    delegation: 'بني خلاد',
  },
  {
    id: 'تلمسان',
    delegation: 'البيوض',
  },
  {
    id: 'تيارت ',
    delegation: 'تيارت المركز',
  },
  {
    id: 'تيارت ',
    delegation: 'سيدي بختي',
  },
  {
    id: 'تيارت ',
    delegation: 'مدريسة',
  },
  {
    id: 'تيارت ',
    delegation: 'تسالة لمطاعي',
  },
  {
    id: 'تيارت ',
    delegation: 'الرشايقة',
  },
  {
    id: 'تيارت ',
    delegation: 'اليحيى',
  },
  {
    id: 'تيارت ',
    delegation: 'حاسي العقبة',
  },
  {
    id: 'تيارت ',
    delegation: 'حساني عبد الكريم',
  },
  {
    id: 'تيارت ',
    delegation: 'أحمر الدشرة',
  },
  {
    id: 'تيزي وزو ',
    delegation: 'تيزي وزو المركز',
  },
  {
    id: 'تيزي وزو ',
    delegation: 'عين الحمام',
  },
  {
    id: 'تيزي وزو ',
    delegation: 'بوزقرون',
  },
  {
    id: 'تيزي وزو ',
    delegation: 'تيزي راشد',
  },
  {
    id: 'تيزي وزو ',
    delegation: 'بوغني',
  },
  {
    id: 'تيزي وزو ',
    delegation: 'بني يني',
  },
  {
    id: 'تيزي وزو ',
    delegation: 'الذرعان',
  },
  {
    id: 'تيزي وزو ',
    delegation: ' أيت يحي',
  },
  {
    id: 'تيزي وزو ',
    delegation: 'أذرار',
  },
  {
    id: 'تيزي وزو ',
    delegation: 'تيميزار',
  },
  {
    id: 'تيزي وزو ',
    delegation: 'الأربعاء ناث إيراثن',
  },
  {
    id: 'تيزي وزو ',
    delegation: ' بومالن دادس',
  },
  {
    id: 'تيزي وزو ',
    delegation: 'مقطع الدوز',
  },
  {
    id: 'تيزي وزو ',
    delegation: 'الشماعة',
  },
  {
    id: 'تيزي وزو ',
    delegation: 'بسكرة',
  },
  {
    id: 'تيزي وزو ',
    delegation: 'أيت يحي العليا',
  },
  {
    id: 'تيزي وزو ',
    delegation: 'بسكرة',
  }
]
interface tunstates{
  id:number
  governorate: string
}
interface tundelegation{
  id: string;
  delegation: string;
}
const tunstate : tunstates[]=[
  {
    id: 1,
    governorate: 'أريانة'
  },

{id: 2, governorate: 'باجة'},

{id: 3, governorate: 'بن عروس'},

{id: 4, governorate: 'بنزرت'},

{id: 5, governorate: 'قابس'},

{id: 6, governorate: 'قفصة'},

{id: 7, governorate: 'جندوبة'},

{id: 8, governorate: 'القيروان'},

{id: 9, governorate: 'القصرين'},

{id: 10, governorate: 'قبلي'},

{id: 11, governorate: 'الكاف'},

{id: 12, governorate: 'المهدية'},

{id: 13, governorate: 'منوبة'},

{id: 14, governorate: 'مدنين'},

{id: 15, governorate: 'المنستير'},

{id: 16, governorate: 'نابل'},

{id: 17, governorate: 'صفاقس'},

{id: 18, governorate: 'سيدي بوزيد'},

{id: 19, governorate: 'سليانة'},

{id: 20, governorate: 'سوسة'},

{id: 21, governorate: 'تطاوين'},

{id: 22, governorate: 'توزر'},

{id: 23, governorate: 'تونس'},

{id: 24, governorate: 'زغوان'},
]

const tundelegation : tundelegation[]=[
  {
    id:'أريانة',
    delegation: "أريانة المدينة"
},
{id:'أريانة',
    delegation: "حي التضامن"
},
{id:'أريانة',
    delegation: "قلعة الأندلس"
},
{id:'أريانة',
    delegation: "المنيهلة"
},
{id:'أريانة',
    delegation: "رواد"
},
{id:'أريانة',
    delegation: "سيدي ثابت"
},
{id:'أريانة',
    delegation: "سكرة"
},
{
  id:'باجة',
  delegation: "عمدون"
},
{id:'باجة',
  delegation: "باجة الجنوبية"
},
{id:'باجة',
  delegation: "قبلاط"
},
{id:'باجة',
  delegation: "مجاز الباب"
},
{id:'باجة',
  delegation: "نفزة"
},
{id:'باجة',
  delegation: "تبرسق"
},
{id:'باجة',
  delegation: "تستور"
},
{id:'باجة',
  delegation: "تيبار"
},
{id:'باجة',
  delegation: "باجة الشمالية"
},
{
  id:'بن عروس',
 delegation: "بن عروس"
},
{id:'بن عروس',
 delegation: "بومهل"
},
{id:'بن عروس',
 delegation: "حمام الأنف"
},
{id:'بن عروس',
 delegation: "حمام الشط"
},
{id:'بن عروس',
 delegation: "رادس"
},
{id:'بن عروس',
 delegation: "الزهراء"
},
{id:'بن عروس',
 delegation: "فوشانة"
},
{id:'بن عروس',
 delegation: "المحمدية"
},
{id:'بن عروس',
 delegation: "المدينة الجديدة"
},
{id:'بن عروس',
 delegation: "مرناق"
},
{id:'بن عروس',
 delegation: "المروج"
},
{id:'بن عروس',
 delegation: "مقرين"
},
{id:'بنزرت',
 delegation: "بنزرت المدينة"
},
{id:'بنزرت',
 delegation: "جومين"
},
{id:'بنزرت',
 delegation: "العالية"
},
{id:'بنزرت',
 delegation: "غزالة"
},
{id:'بنزرت',
 delegation: "ماطر"
},
{id:'بنزرت',
 delegation: "منزل بورقيبة"
},
{id:'بنزرت',
 delegation: "منزل جميل"
},
{id:'بنزرت',
 delegation: "رأس الجبل"
},
{id:'بنزرت',
 delegation: "سجنان"
},
{id:'بنزرت',
 delegation: "تينجة"
},
{id:'بنزرت',
 delegation: "أوتيك"
},
{id:'بنزرت',
 delegation: "جرزونة"
},
{id:'قابس',
 delegation: "قابس المدينة"
},
{id:'قابس',
 delegation: "قابس الغربية"
},
{id:'قابس',
 delegation: "قابس الجنوبية"
},
{id:'قابس',
 delegation: "غنوش"
},
{id:'قابس',
 delegation: "الحامة"
},
{id:'قابس',
 delegation: "مارث"
},
{id:'قابس',
 delegation: "مطماطة"
},
{id:'قابس',
 delegation: "مطماطة الجديدة"
},
{id:'قابس',
 delegation: "منزل الحبيب"
},
{id:'قابس',
 delegation: "المطوية"
},
{id:'قفصة',
 delegation: "بلخير"
},
{id:'قفصة',
 delegation: "قفصة الشمالية"
},
{id:'قفصة',
 delegation: "قفصة الجنوبية"
},
{id:'قفصة',
 delegation: "القطار"
},
{id:'قفصة',
 delegation: "القصر"
},
{id:'قفصة',
 delegation: "المظيلة"
},
{id:'قفصة',
 delegation: "المتلوي"
},
{id:'قفصة',
 delegation: "أم العرائس"
},
{id:'قفصة',
 delegation: "الرديف"
},
{id:'قفصة',
 delegation: "السند"
},
{id:'قفصة',
 delegation: "سيدي عيش"
},
{id:'قفصة',
 delegation: "سيدي بوبكر"
},
{id:'جندوبة',
 delegation: "جندوبة المدينة"
},
{id:'جندوبة',
 delegation: "عين دراهم"
},
{id:'جندوبة',
 delegation: "بلطة بوعوان"
},
{id:'جندوبة',
 delegation: "بوسالم"
},
{id:'جندوبة',
 delegation: "فرنانة"
},
{id:'جندوبة',
 delegation: "غار الدماء"
},
{id:'جندوبة',
 delegation: "جندوبة الشمالية"
},
{id:'جندوبة',
 delegation: "وادي مليز"
},
{id:'جندوبة',
 delegation: "طبرقة"
},
{id:'القيروان',
 delegation: "العلا"
},
{id:'القيروان',
 delegation: "بوحجلة"
},
{id:'القيروان',
 delegation: "الشبيكة"
},
{id:'القيروان',
 delegation: "الشراردة"
},
{id:'القيروان',
 delegation: "حفوز"
},
{id:'القيروان',
 delegation: "حاجب العيون"
},
{id:'القيروان',
 delegation: "القيروان الشمالية"
},
{id:'القيروان',
 delegation: "القيروان الجنوبية"
},
{id:'القيروان',
 delegation: "نصر الله"
},
{id:'القيروان',
 delegation: "الوسلاتية"
},
{id:'القيروان',
 delegation: "السبيخة"
},
{id:'القصرين',
 delegation: "العيون"
},
{id:'القصرين',
 delegation: "الزهور"
},
{id:'القصرين',
 delegation: "فريانة"
},
{id:'القصرين',
 delegation: "فوسانة"
},
{id:'القصرين',
 delegation: "حاسي الفريد"
},
{id:'القصرين',
 delegation: "حيدرة"
},
{id:'القصرين',
 delegation: "جدليان"
},
{id:'القصرين',
 delegation: "القصرين الشمالية"
},
{id:'القصرين',
 delegation: "القصرين الجنوبية"
},
{id:'القصرين',
 delegation: "ماجل بلعباس"
},
{id:'القصرين',
 delegation: "سبيطلة"
},
{id:'القصرين',
 delegation: "سبيبة"
},
{id:'القصرين',
 delegation: "تالة"
},
{id: 'قبلي',
 delegation: "دوز الشمالية"
},
{id: 'قبلي',
 delegation: "دوز الجنوبية"
},
{id: 'قبلي',
 delegation: "الفوار"
},
{id: 'قبلي',
 delegation: "قبلي الشمالية"
},
{id: 'قبلي',
 delegation: "قبلي الجنوبية"
},
{id: 'قبلي',
 delegation: "سوق الأحد"
},
{id:'الكاف',
 delegation: "الدهماني"
},
{id:'الكاف',
 delegation: "السرس"
},
{id:'الكاف',
 delegation: "الجريصة"
},
{id:'الكاف',
 delegation: "القلعة الخصبة"
},
{id:'الكاف',
 delegation: "قلعة سنان"
},
{id:'الكاف',
 delegation: "الكاف الشرقية"
},
{id:'الكاف',
 delegation: "الكاف الغربية"
},
{id:'الكاف',
 delegation: "القصور"
},
{id:'الكاف',
 delegation: "نبر"
},
{id:'الكاف',
 delegation: "ساقية سيدي يوسف"
},
{id:'الكاف',
 delegation: "تاجروين"
},
{id:'الكاف',
 delegation: "الطويرف"
},
{id:'المهدية',
 delegation: "المهدية المدينة"
},
{id:'المهدية',
 delegation: "بومرداس"
},
{id:'المهدية',
 delegation: "الشابة"
},
{id:'المهدية',
 delegation: "شربان"
},
{id:'المهدية',
 delegation: "الجم"
},
{id:'المهدية',
 delegation: "هبيرة"
},
{id:'المهدية',
 delegation: "قصور الساف"
},
{id:'المهدية',
 delegation: "ملولش"
},
{id:'المهدية',
 delegation: "أولاد الشامخ"
},
{id:'المهدية',
 delegation: "سيدي علوان"
},
{id:'المهدية',
 delegation: "السواسي"
},
{id:'المهدية',
 delegation: "البرادعة"
},
{id:'منوبة',
 delegation: "منوبة المدينة"
},
{id:'منوبة',
 delegation: "برج العامري"
},
{id:'منوبة',
 delegation: "دوار هيشر"
},
{id:'منوبة',
 delegation: "البطان"
},
{id:'منوبة',
 delegation: "الجديدة"
},
{id:'منوبة',
 delegation: "المرناقية"
},
{id:'منوبة',
 delegation: "وادي الليل"
},
{id:'منوبة',
 delegation: "طبربة"
},
{id:'مدنين',
 delegation: "بنقردان"
},
{id:'مدنين',
 delegation: "بني خداش"
},
{id:'مدنين',
 delegation: "جربة أجيم"
},
{id:'مدنين',
 delegation: "جربة ميدون"
},
{id:'مدنين',
 delegation: "جرجيس"
},
{id:'مدنين',
 delegation: "جربة حومة السوق"
},
{id:'مدنين',
 delegation: "سيدي مخلوف"
},
{id:'مدنين',
 delegation: "مدنين الشمالية"
},
{id:'مدنين',
 delegation: "مدنين الجنوبية"
},
{id: 'المنستير',
 delegation: "المنستير المدينة"
},
{id: 'المنستير',
 delegation: "بنبلة"
},
{id: 'المنستير',
 delegation: "جمال"
},
{id: 'المنستير',
 delegation: "زرمدين"
},
{id: 'المنستير',
 delegation: "الساحلين"
},
{id: 'المنستير',
 delegation: "صيادة لمطة بوحجر"
},
{id: 'المنستير',
 delegation: "طبلبة"
},
{id: 'المنستير',
 delegation: "البقالطة"
},
{id: 'المنستير',
 delegation: "قصر هلال"
},
{id: 'المنستير',
 delegation: "قصيبة المديوني"
},
{id: 'المنستير',
 delegation: "المكنين"
},
{id: 'المنستير',
 delegation: "الوردانين"
},
{id: 'المنستير',
 delegation: "بني حسان"
},
{id:'نابل',
 delegation: "نابل المدينة"
},
{id:'نابل',
 delegation: "بني خلاد"
},
{id:'نابل',
 delegation: "بني خيار"
},
{id:'نابل',
 delegation: "بوعرقوب"
},
{id:'نابل',
 delegation: "دار شعبان الفهري"
},
{id:'نابل',
 delegation: "الميدة"
},
{id:'نابل',
 delegation: "حمام الأغزاز"
},
{id:'نابل',
 delegation: "قرمبالية"
},
{id:'نابل',
 delegation: "الحمامات"
},
{id:'نابل',
 delegation: "الهوارية"
},
{id:'نابل',
 delegation: "قليبية"
},
{id:'نابل',
 delegation: "قربة"
},
{id:'نابل',
 delegation: "منزل بوزلفة"
},
{id:'نابل',
 delegation: "منزل تميم"
},
{id:'نابل',
 delegation: "سليمان"
},
{id:'نابل',
 delegation: "تاكلسة"
},
{id:'صفاقس',
 delegation: "صفاقس المدينة"
},
{id:'صفاقس',
 delegation: "عقارب"
},
{id:'صفاقس',
 delegation: "بئر علي بن خليفة"
},
{id:'صفاقس',
 delegation: "العامرة"
},
{id:'صفاقس',
 delegation: "الغريبة"
},
{id:'صفاقس',
 delegation: "الحنشة"
},
{id:'صفاقس',
 delegation: "جبنيانة"
},
{id:'صفاقس',
 delegation: "قرقنة"
},
{id:'صفاقس',
 delegation: "المحرس"
},
{id:'صفاقس',
 delegation: "منزل شاكر"
},
{id:'صفاقس',
 delegation: "ساقية الزيت"
},
{id:'صفاقس',
 delegation: "صفاقس الغربية"
},
{id:'صفاقس',
 delegation: "صفاقس الجنوبية"
},
{id:'صفاقس',
 delegation: "الصخيرة"
},
{id:'صفاقس',
 delegation: "طينة"
},
{id:'صفاقس',
 delegation: "ساقية الدائر"
},
{id:'سيدي بوزيد',
 delegation: "بئر الحفي"
},
{id:'سيدي بوزيد',
 delegation: "جلمة"
},
{id:'سيدي بوزيد',
 delegation: "المزونة"
},
{id:'سيدي بوزيد',
 delegation: "المكناسي"
},
{id:'سيدي بوزيد',
 delegation: "منزل بوزيان"
},
{id:'سيدي بوزيد',
 delegation: "أولاد حفوز"
},
{id:'سيدي بوزيد',
 delegation: "الرقاب"
},
{id:'سيدي بوزيد',
 delegation: "السبالة"
},
{id:'سيدي بوزيد',
 delegation: "سيدي علي بن عون"
},
{id:'سيدي بوزيد',
 delegation: "سيدي بوزيد الشرقية"
},
{id:'سيدي بوزيد',
 delegation: "سيدي بوزيد الغربية"
},
{id:'سيدي بوزيد',
 delegation: "السوق الجديد"
},
{id:'سليانة',
 delegation: "برقو"
},
{id:'سليانة',
 delegation: "بوعرادة"
},
{id:'سليانة',
 delegation: "العروسة"
},
{id:'سليانة',
 delegation: "الكريب"
},
{id:'سليانة',
 delegation: "قعفور"
},
{id:'سليانة',
 delegation: "كسرى"
},
{id:'سليانة',
 delegation: "مكثر"
},
{id:'سليانة',
 delegation: "الروحية"
},
{id:'سليانة',
 delegation: "سيدي بورويس"
},
{id:'سليانة',
 delegation: "سليانة الشمالية"
},
{id:'سليانة',
 delegation: "سليانة الجنوبية"
},
{id:'سوسة',
 delegation: "سوسة المدينة"
},
{id:'سوسة',
 delegation: "أكودة"
},
{id:'سوسة',
 delegation: "بوفيشة"
},
{id:'سوسة',
 delegation: "النفيضة"
},
{id:'سوسة',
 delegation: "حمام سوسة"
},
{id:'سوسة',
 delegation: "هرقلة"
},
{id:'سوسة',
 delegation: "القلعة الكبرى"
},
{id:'سوسة',
 delegation: "القلعة الصغرى"
},
{id:'سوسة',
 delegation: "كندار"
},
{id:'سوسة',
 delegation: "مساكن"
},
{id:'سوسة',
 delegation: "سيدي بوعلي"
},
{id:'سوسة',
 delegation: "سيدي الهاني"
},
{id:'سوسة',
 delegation: "سوسة جوهرة"
},
{id:'سوسة',
 delegation: "سوسة الرياض"
},
{id:'سوسة',
 delegation: "سوسة سيدي عبد الحميد"
},
{id:'سوسة',
 delegation: "الزاوية قصيبة الثريات"
},
{id:'تطاوين',
 delegation: "بئر الأحمر"
},
{id:'تطاوين',
 delegation: "الذهيبة"
},
{id:'تطاوين',
 delegation: "غمراسن"
},
{id:'تطاوين',
 delegation: "رمادة"
},
{id:'تطاوين',
 delegation: "الصمار"
},
{id:'تطاوين',
 delegation: "تطاوين الشمالية"
},
{id:'تطاوين',
 delegation: "تطاوين الجنوبية"
},
{id:'تطاوين',
 delegation: "بني مهيرة"
},
{id:'توزر',
 delegation: "توزر المدينة"
},
{id:'توزر',
 delegation: "دقاش"
},
{id:'توزر',
 delegation: "حزوة"
},
{id:'توزر',
 delegation: "نفطة"
},
{id:'توزر',
 delegation: "تمغزة"
},
{id:'توزر',
 delegation: "حامة الجريد"
},
{id:'تونس',
 delegation: "تونس المدينة"
},
{id:'تونس',
 delegation: "باب البحر"
},
{id:'تونس',
 delegation: "باب السويقة"
},
{id:'تونس',
 delegation: "باردو"
},
{id:'تونس',
 delegation: "ضفاف البحيرة"
},
{id:'تونس',
 delegation: "قرطاج"
},
{id:'تونس',
 delegation: "حي الخضراء"
},
{id:'تونس',
 delegation: "المنزه"
},
{id:'تونس',
 delegation: "الوردية"
},
{id:'تونس',
 delegation: "حي التحرير"
},
{id:'تونس',
 delegation: "الزهور"
},
{id:'تونس',
 delegation: "الحرايرية"
},
{id:'تونس',
 delegation: "جبل الجلود"
},
{id:'تونس',
 delegation: "الكبارية"
},
{id:'تونس',
 delegation: "حلق الوادي"
},
{id:'تونس',
 delegation: "المرسى"
},
{id:'تونس',
 delegation: "الكرم"
},
{id:'تونس',
 delegation: "العمران"
},
{id:'تونس',
 delegation: "العمران الأعلى"
},
{id:'تونس',
 delegation: "سيدي البشير"
},
{id:'تونس',
 delegation: "سيدي حسين"
},
{id:'تونس',
 delegation: "السيجومي"
},
{id:'زغوان',
 delegation: "زغوان المدينة"
},
{id:'زغوان',
 delegation: "صواف"
},
{id:'زغوان',
 delegation: "بئر مشارقة"
},
{id:'زغوان',
 delegation: "الفحص"
},
{id:'زغوان',
 delegation: "الناظور"
},
{id:'زغوان',
 delegation: "الزريبة"
}

]


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent  extends DynamicTableCrud<Person> implements OnInit{
  formGroup !: FormGroup;
  type_user: any;
  isSuperDoctor !: boolean;
  submitted !: boolean;
  isColorRed: boolean = true;
  xpassword!:any
  xconfirmPassword!:any
  error !: string;
  country:string;
  displayed_form!:string;
  userId!:any
  profileId!:any
  constructor(protected override service: AbstractRestService<Person>, protected override secureStorageService: SecureStorageService,
    private httpClient: HttpClient, private router: Router,private route:ActivatedRoute) {
super(service, `${environment.url}/api/persons`, secureStorageService);
this.country = '';
}
async ngOnInit(): Promise<void> {
  this.userId=localStorage.getItem('userId');
  this.profileId=localStorage.getItem('id');
  this.submitted = false;
  this.formGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      family_name : new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required]),
      login_number: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      email: new FormControl('', []),
      delegation: new FormControl(''),
      state: new FormControl('', [Validators.required]),
      zip_code: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
  });
  this.type_user = localStorage.getItem('type_user');
  this.get_type_user_to_add()

}
type_user_to_add!:any
get_type_user_to_add(){
  this.route.params.subscribe(params => {
    const type_user_to_add_params = params['type_user'];
    this.displayed_form=type_user_to_add_params
if(type_user_to_add_params==='doctor'){
  this.formGroup.addControl('speciality', new FormControl('', [Validators.required]));
  this.type_user_to_add='doctor';
}
else if(type_user_to_add_params==='school'){
  this.type_user_to_add='school';
}
else if(type_user_to_add_params==='super_doctor'){
  this.type_user_to_add='doctor';
}
else {
  this.type_user_to_add='teacher';
}

  })
}

async add_user($event: Event): Promise<void> {
  const access = localStorage.getItem('access');
  if (access !== null) {
    this.options = {
      headers: {Authorization: `Bearer ${this.secureStorageService.getToken(access)}`},
      params: null
    };
  }
  this.xpassword = this.formGroup.value.password;
  this.xconfirmPassword = this.formGroup.value.confirmPassword;

if(this.xpassword != this.xconfirmPassword ){
this.error = "Passwords do not match.";
//this.toast.error({detail:"خطأ في التسجيل",summary:'كلمة المرور غير مطابقة',duration:5000});
this.isColorRed = false;
}
else{
  $event.preventDefault();
  this.submitted = true;
  let type_user: string;
  
    const data = this.service.create(this.actionUrl, {
      login_number: this.formGroup.value.login_number,
      name: this.formGroup.value.name,
      telephone: this.formGroup.value.telephone.toString(),
      password: this.formGroup.value.password,
      email: this.formGroup.value?.email,
      type_user : this.type_user_to_add,
      profile: {
        family_name: this.formGroup.value?.family_name,
        school :this.displayed_form==='teacher'? this.userId : null,
        is_super_doctor: this.displayed_form==='super_doctor'? true : false,
        speciality: this.displayed_form==='doctor'? this.formGroup.value?.speciality : null,
        super_doctor: this.displayed_form==='doctor'? this.profileId : null,
      },
      localisation: {
        country: this.formGroup.value.country,
        state: this.formGroup.value.state,
        delegation: this.formGroup.value.delegation,
        zip_code: this.formGroup.value.zip_code
      },
    }, this.options);
    data.subscribe(res=>{
     // this.toast.success({detail:"تمت العملية بنجاح",summary:'تم إنشاء الحساب بنجاح',duration:5000});

      this.router.navigate([`/dashboard/Users`]);

    });

}
}

password: string = '';
  showPassword: boolean = false;
  togglePassword(passwordField: HTMLInputElement): void {
    this.showPassword = !this.showPassword;
    passwordField.type = this.showPassword ? 'text' : 'password';
  }


  nodelegation : boolean = false
  choicecountry(){
    if(this.country=='algerie'){
      this.nodelegation=true
      this.formGroup.controls['delegation'].setValue('none');
    }
    else{
      this.nodelegation=false
    }
  }
  state: any=[];
  selectedOption!: string;

  states(){
    if(this.country=='algerie'){
      this.state=algstate
      this.nodelegation=true
    }
    else{
        this.state=tunstate
    }

  }
delegationoption: any=[];
  delegation(){
    if(this.country=='algerie'){
      this.delegationoption=algdelegation.filter(algdelegation=>algdelegation.id==this.selectedOption)
     // .filter(patient => patient.is_consulted=== false);
    }
else{
  this.delegationoption=tundelegation.filter(tundelegation=>tundelegation.id==this.selectedOption)
}
}
}
