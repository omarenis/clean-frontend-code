import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Person} from 'src/app/models/person';
import {AbstractRestService} from 'src/app/services/genericservice';
import {SecureStorageService} from 'src/app/services/secure-storage.service';
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";
import {LoginSignupService} from "../../services/login-signup.service";
import {DynamicTableCrud} from "../../services/dynamic-table";

interface algstate {
  id: number;
  governorate: string;
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

interface tunstates {
  id: number
  governorate: string
}

interface tundelegation {
  id: string;
  delegation: string;
}

const tunstate: tunstates[] = [
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
const tundelegation: tundelegation[] = [
  {
    id: 'أريانة',
    delegation: "أريانة المدينة"
  },
  {
    id: 'أريانة',
    delegation: "حي التضامن"
  },
  {
    id: 'أريانة',
    delegation: "قلعة الأندلس"
  },
  {
    id: 'أريانة',
    delegation: "المنيهلة"
  },
  {
    id: 'أريانة',
    delegation: "رواد"
  },
  {
    id: 'أريانة',
    delegation: "سيدي ثابت"
  },
  {
    id: 'أريانة',
    delegation: "سكرة"
  },
  {
    id: 'باجة',
    delegation: "عمدون"
  },
  {
    id: 'باجة',
    delegation: "باجة الجنوبية"
  },
  {
    id: 'باجة',
    delegation: "قبلاط"
  },
  {
    id: 'باجة',
    delegation: "مجاز الباب"
  },
  {
    id: 'باجة',
    delegation: "نفزة"
  },
  {
    id: 'باجة',
    delegation: "تبرسق"
  },
  {
    id: 'باجة',
    delegation: "تستور"
  },
  {
    id: 'باجة',
    delegation: "تيبار"
  },
  {
    id: 'باجة',
    delegation: "باجة الشمالية"
  },
  {
    id: 'بن عروس',
    delegation: "بن عروس"
  },
  {
    id: 'بن عروس',
    delegation: "بومهل"
  },
  {
    id: 'بن عروس',
    delegation: "حمام الأنف"
  },
  {
    id: 'بن عروس',
    delegation: "حمام الشط"
  },
  {
    id: 'بن عروس',
    delegation: "رادس"
  },
  {
    id: 'بن عروس',
    delegation: "الزهراء"
  },
  {
    id: 'بن عروس',
    delegation: "فوشانة"
  },
  {
    id: 'بن عروس',
    delegation: "المحمدية"
  },
  {
    id: 'بن عروس',
    delegation: "المدينة الجديدة"
  },
  {
    id: 'بن عروس',
    delegation: "مرناق"
  },
  {
    id: 'بن عروس',
    delegation: "المروج"
  },
  {
    id: 'بن عروس',
    delegation: "مقرين"
  },
  {
    id: 'بنزرت',
    delegation: "بنزرت المدينة"
  },
  {
    id: 'بنزرت',
    delegation: "جومين"
  },
  {
    id: 'بنزرت',
    delegation: "العالية"
  },
  {
    id: 'بنزرت',
    delegation: "غزالة"
  },
  {
    id: 'بنزرت',
    delegation: "ماطر"
  },
  {
    id: 'بنزرت',
    delegation: "منزل بورقيبة"
  },
  {
    id: 'بنزرت',
    delegation: "منزل جميل"
  },
  {
    id: 'بنزرت',
    delegation: "رأس الجبل"
  },
  {
    id: 'بنزرت',
    delegation: "سجنان"
  },
  {
    id: 'بنزرت',
    delegation: "تينجة"
  },
  {
    id: 'بنزرت',
    delegation: "أوتيك"
  },
  {
    id: 'بنزرت',
    delegation: "جرزونة"
  },
  {
    id: 'قابس',
    delegation: "قابس المدينة"
  },
  {
    id: 'قابس',
    delegation: "قابس الغربية"
  },
  {
    id: 'قابس',
    delegation: "قابس الجنوبية"
  },
  {
    id: 'قابس',
    delegation: "غنوش"
  },
  {
    id: 'قابس',
    delegation: "الحامة"
  },
  {
    id: 'قابس',
    delegation: "مارث"
  },
  {
    id: 'قابس',
    delegation: "مطماطة"
  },
  {
    id: 'قابس',
    delegation: "مطماطة الجديدة"
  },
  {
    id: 'قابس',
    delegation: "منزل الحبيب"
  },
  {
    id: 'قابس',
    delegation: "المطوية"
  },
  {
    id: 'قفصة',
    delegation: "بلخير"
  },
  {
    id: 'قفصة',
    delegation: "قفصة الشمالية"
  },
  {
    id: 'قفصة',
    delegation: "قفصة الجنوبية"
  },
  {
    id: 'قفصة',
    delegation: "القطار"
  },
  {
    id: 'قفصة',
    delegation: "القصر"
  },
  {
    id: 'قفصة',
    delegation: "المظيلة"
  },
  {
    id: 'قفصة',
    delegation: "المتلوي"
  },
  {
    id: 'قفصة',
    delegation: "أم العرائس"
  },
  {
    id: 'قفصة',
    delegation: "الرديف"
  },
  {
    id: 'قفصة',
    delegation: "السند"
  },
  {
    id: 'قفصة',
    delegation: "سيدي عيش"
  },
  {
    id: 'قفصة',
    delegation: "سيدي بوبكر"
  },
  {
    id: 'جندوبة',
    delegation: "جندوبة المدينة"
  },
  {
    id: 'جندوبة',
    delegation: "عين دراهم"
  },
  {
    id: 'جندوبة',
    delegation: "بلطة بوعوان"
  },
  {
    id: 'جندوبة',
    delegation: "بوسالم"
  },
  {
    id: 'جندوبة',
    delegation: "فرنانة"
  },
  {
    id: 'جندوبة',
    delegation: "غار الدماء"
  },
  {
    id: 'جندوبة',
    delegation: "جندوبة الشمالية"
  },
  {
    id: 'جندوبة',
    delegation: "وادي مليز"
  },
  {
    id: 'جندوبة',
    delegation: "طبرقة"
  },
  {
    id: 'القيروان',
    delegation: "العلا"
  },
  {
    id: 'القيروان',
    delegation: "بوحجلة"
  },
  {
    id: 'القيروان',
    delegation: "الشبيكة"
  },
  {
    id: 'القيروان',
    delegation: "الشراردة"
  },
  {
    id: 'القيروان',
    delegation: "حفوز"
  },
  {
    id: 'القيروان',
    delegation: "حاجب العيون"
  },
  {
    id: 'القيروان',
    delegation: "القيروان الشمالية"
  },
  {
    id: 'القيروان',
    delegation: "القيروان الجنوبية"
  },
  {
    id: 'القيروان',
    delegation: "نصر الله"
  },
  {
    id: 'القيروان',
    delegation: "الوسلاتية"
  },
  {
    id: 'القيروان',
    delegation: "السبيخة"
  },
  {
    id: 'القصرين',
    delegation: "العيون"
  },
  {
    id: 'القصرين',
    delegation: "الزهور"
  },
  {
    id: 'القصرين',
    delegation: "فريانة"
  },
  {
    id: 'القصرين',
    delegation: "فوسانة"
  },
  {
    id: 'القصرين',
    delegation: "حاسي الفريد"
  },
  {
    id: 'القصرين',
    delegation: "حيدرة"
  },
  {
    id: 'القصرين',
    delegation: "جدليان"
  },
  {
    id: 'القصرين',
    delegation: "القصرين الشمالية"
  },
  {
    id: 'القصرين',
    delegation: "القصرين الجنوبية"
  },
  {
    id: 'القصرين',
    delegation: "ماجل بلعباس"
  },
  {
    id: 'القصرين',
    delegation: "سبيطلة"
  },
  {
    id: 'القصرين',
    delegation: "سبيبة"
  },
  {
    id: 'القصرين',
    delegation: "تالة"
  },
  {
    id: 'قبلي',
    delegation: "دوز الشمالية"
  },
  {
    id: 'قبلي',
    delegation: "دوز الجنوبية"
  },
  {
    id: 'قبلي',
    delegation: "الفوار"
  },
  {
    id: 'قبلي',
    delegation: "قبلي الشمالية"
  },
  {
    id: 'قبلي',
    delegation: "قبلي الجنوبية"
  },
  {
    id: 'قبلي',
    delegation: "سوق الأحد"
  },
  {
    id: 'الكاف',
    delegation: "الدهماني"
  },
  {
    id: 'الكاف',
    delegation: "السرس"
  },
  {
    id: 'الكاف',
    delegation: "الجريصة"
  },
  {
    id: 'الكاف',
    delegation: "القلعة الخصبة"
  },
  {
    id: 'الكاف',
    delegation: "قلعة سنان"
  },
  {
    id: 'الكاف',
    delegation: "الكاف الشرقية"
  },
  {
    id: 'الكاف',
    delegation: "الكاف الغربية"
  },
  {
    id: 'الكاف',
    delegation: "القصور"
  },
  {
    id: 'الكاف',
    delegation: "نبر"
  },
  {
    id: 'الكاف',
    delegation: "ساقية سيدي يوسف"
  },
  {
    id: 'الكاف',
    delegation: "تاجروين"
  },
  {
    id: 'الكاف',
    delegation: "الطويرف"
  },
  {
    id: 'المهدية',
    delegation: "المهدية المدينة"
  },
  {
    id: 'المهدية',
    delegation: "بومرداس"
  },
  {
    id: 'المهدية',
    delegation: "الشابة"
  },
  {
    id: 'المهدية',
    delegation: "شربان"
  },
  {
    id: 'المهدية',
    delegation: "الجم"
  },
  {
    id: 'المهدية',
    delegation: "هبيرة"
  },
  {
    id: 'المهدية',
    delegation: "قصور الساف"
  },
  {
    id: 'المهدية',
    delegation: "ملولش"
  },
  {
    id: 'المهدية',
    delegation: "أولاد الشامخ"
  },
  {
    id: 'المهدية',
    delegation: "سيدي علوان"
  },
  {
    id: 'المهدية',
    delegation: "السواسي"
  },
  {
    id: 'المهدية',
    delegation: "البرادعة"
  },
  {
    id: 'منوبة',
    delegation: "منوبة المدينة"
  },
  {
    id: 'منوبة',
    delegation: "برج العامري"
  },
  {
    id: 'منوبة',
    delegation: "دوار هيشر"
  },
  {
    id: 'منوبة',
    delegation: "البطان"
  },
  {
    id: 'منوبة',
    delegation: "الجديدة"
  },
  {
    id: 'منوبة',
    delegation: "المرناقية"
  },
  {
    id: 'منوبة',
    delegation: "وادي الليل"
  },
  {
    id: 'منوبة',
    delegation: "طبربة"
  },
  {
    id: 'مدنين',
    delegation: "بنقردان"
  },
  {
    id: 'مدنين',
    delegation: "بني خداش"
  },
  {
    id: 'مدنين',
    delegation: "جربة أجيم"
  },
  {
    id: 'مدنين',
    delegation: "جربة ميدون"
  },
  {
    id: 'مدنين',
    delegation: "جرجيس"
  },
  {
    id: 'مدنين',
    delegation: "جربة حومة السوق"
  },
  {
    id: 'مدنين',
    delegation: "سيدي مخلوف"
  },
  {
    id: 'مدنين',
    delegation: "مدنين الشمالية"
  },
  {
    id: 'مدنين',
    delegation: "مدنين الجنوبية"
  },
  {
    id: 'المنستير',
    delegation: "المنستير المدينة"
  },
  {
    id: 'المنستير',
    delegation: "بنبلة"
  },
  {
    id: 'المنستير',
    delegation: "جمال"
  },
  {
    id: 'المنستير',
    delegation: "زرمدين"
  },
  {
    id: 'المنستير',
    delegation: "الساحلين"
  },
  {
    id: 'المنستير',
    delegation: "صيادة لمطة بوحجر"
  },
  {
    id: 'المنستير',
    delegation: "طبلبة"
  },
  {
    id: 'المنستير',
    delegation: "البقالطة"
  },
  {
    id: 'المنستير',
    delegation: "قصر هلال"
  },
  {
    id: 'المنستير',
    delegation: "قصيبة المديوني"
  },
  {
    id: 'المنستير',
    delegation: "المكنين"
  },
  {
    id: 'المنستير',
    delegation: "الوردانين"
  },
  {
    id: 'المنستير',
    delegation: "بني حسان"
  },
  {
    id: 'نابل',
    delegation: "نابل المدينة"
  },
  {
    id: 'نابل',
    delegation: "بني خلاد"
  },
  {
    id: 'نابل',
    delegation: "بني خيار"
  },
  {
    id: 'نابل',
    delegation: "بوعرقوب"
  },
  {
    id: 'نابل',
    delegation: "دار شعبان الفهري"
  },
  {
    id: 'نابل',
    delegation: "الميدة"
  },
  {
    id: 'نابل',
    delegation: "حمام الأغزاز"
  },
  {
    id: 'نابل',
    delegation: "قرمبالية"
  },
  {
    id: 'نابل',
    delegation: "الحمامات"
  },
  {
    id: 'نابل',
    delegation: "الهوارية"
  },
  {
    id: 'نابل',
    delegation: "قليبية"
  },
  {
    id: 'نابل',
    delegation: "قربة"
  },
  {
    id: 'نابل',
    delegation: "منزل بوزلفة"
  },
  {
    id: 'نابل',
    delegation: "منزل تميم"
  },
  {
    id: 'نابل',
    delegation: "سليمان"
  },
  {
    id: 'نابل',
    delegation: "تاكلسة"
  },
  {
    id: 'صفاقس',
    delegation: "صفاقس المدينة"
  },
  {
    id: 'صفاقس',
    delegation: "عقارب"
  },
  {
    id: 'صفاقس',
    delegation: "بئر علي بن خليفة"
  },
  {
    id: 'صفاقس',
    delegation: "العامرة"
  },
  {
    id: 'صفاقس',
    delegation: "الغريبة"
  },
  {
    id: 'صفاقس',
    delegation: "الحنشة"
  },
  {
    id: 'صفاقس',
    delegation: "جبنيانة"
  },
  {
    id: 'صفاقس',
    delegation: "قرقنة"
  },
  {
    id: 'صفاقس',
    delegation: "المحرس"
  },
  {
    id: 'صفاقس',
    delegation: "منزل شاكر"
  },
  {
    id: 'صفاقس',
    delegation: "ساقية الزيت"
  },
  {
    id: 'صفاقس',
    delegation: "صفاقس الغربية"
  },
  {
    id: 'صفاقس',
    delegation: "صفاقس الجنوبية"
  },
  {
    id: 'صفاقس',
    delegation: "الصخيرة"
  },
  {
    id: 'صفاقس',
    delegation: "طينة"
  },
  {
    id: 'صفاقس',
    delegation: "ساقية الدائر"
  },
  {
    id: 'سيدي بوزيد',
    delegation: "بئر الحفي"
  },
  {
    id: 'سيدي بوزيد',
    delegation: "جلمة"
  },
  {
    id: 'سيدي بوزيد',
    delegation: "المزونة"
  },
  {
    id: 'سيدي بوزيد',
    delegation: "المكناسي"
  },
  {
    id: 'سيدي بوزيد',
    delegation: "منزل بوزيان"
  },
  {
    id: 'سيدي بوزيد',
    delegation: "أولاد حفوز"
  },
  {
    id: 'سيدي بوزيد',
    delegation: "الرقاب"
  },
  {
    id: 'سيدي بوزيد',
    delegation: "السبالة"
  },
  {
    id: 'سيدي بوزيد',
    delegation: "سيدي علي بن عون"
  },
  {
    id: 'سيدي بوزيد',
    delegation: "سيدي بوزيد الشرقية"
  },
  {
    id: 'سيدي بوزيد',
    delegation: "سيدي بوزيد الغربية"
  },
  {
    id: 'سيدي بوزيد',
    delegation: "السوق الجديد"
  },
  {
    id: 'سليانة',
    delegation: "برقو"
  },
  {
    id: 'سليانة',
    delegation: "بوعرادة"
  },
  {
    id: 'سليانة',
    delegation: "العروسة"
  },
  {
    id: 'سليانة',
    delegation: "الكريب"
  },
  {
    id: 'سليانة',
    delegation: "قعفور"
  },
  {
    id: 'سليانة',
    delegation: "كسرى"
  },
  {
    id: 'سليانة',
    delegation: "مكثر"
  },
  {
    id: 'سليانة',
    delegation: "الروحية"
  },
  {
    id: 'سليانة',
    delegation: "سيدي بورويس"
  },
  {
    id: 'سليانة',
    delegation: "سليانة الشمالية"
  },
  {
    id: 'سليانة',
    delegation: "سليانة الجنوبية"
  },
  {
    id: 'سوسة',
    delegation: "سوسة المدينة"
  },
  {
    id: 'سوسة',
    delegation: "أكودة"
  },
  {
    id: 'سوسة',
    delegation: "بوفيشة"
  },
  {
    id: 'سوسة',
    delegation: "النفيضة"
  },
  {
    id: 'سوسة',
    delegation: "حمام سوسة"
  },
  {
    id: 'سوسة',
    delegation: "هرقلة"
  },
  {
    id: 'سوسة',
    delegation: "القلعة الكبرى"
  },
  {
    id: 'سوسة',
    delegation: "القلعة الصغرى"
  },
  {
    id: 'سوسة',
    delegation: "كندار"
  },
  {
    id: 'سوسة',
    delegation: "مساكن"
  },
  {
    id: 'سوسة',
    delegation: "سيدي بوعلي"
  },
  {
    id: 'سوسة',
    delegation: "سيدي الهاني"
  },
  {
    id: 'سوسة',
    delegation: "سوسة جوهرة"
  },
  {
    id: 'سوسة',
    delegation: "سوسة الرياض"
  },
  {
    id: 'سوسة',
    delegation: "سوسة سيدي عبد الحميد"
  },
  {
    id: 'سوسة',
    delegation: "الزاوية قصيبة الثريات"
  },
  {
    id: 'تطاوين',
    delegation: "بئر الأحمر"
  },
  {
    id: 'تطاوين',
    delegation: "الذهيبة"
  },
  {
    id: 'تطاوين',
    delegation: "غمراسن"
  },
  {
    id: 'تطاوين',
    delegation: "رمادة"
  },
  {
    id: 'تطاوين',
    delegation: "الصمار"
  },
  {
    id: 'تطاوين',
    delegation: "تطاوين الشمالية"
  },
  {
    id: 'تطاوين',
    delegation: "تطاوين الجنوبية"
  },
  {
    id: 'تطاوين',
    delegation: "بني مهيرة"
  },
  {
    id: 'توزر',
    delegation: "توزر المدينة"
  },
  {
    id: 'توزر',
    delegation: "دقاش"
  },
  {
    id: 'توزر',
    delegation: "حزوة"
  },
  {
    id: 'توزر',
    delegation: "نفطة"
  },
  {
    id: 'توزر',
    delegation: "تمغزة"
  },
  {
    id: 'توزر',
    delegation: "حامة الجريد"
  },
  {
    id: 'تونس',
    delegation: "تونس المدينة"
  },
  {
    id: 'تونس',
    delegation: "باب البحر"
  },
  {
    id: 'تونس',
    delegation: "باب السويقة"
  },
  {
    id: 'تونس',
    delegation: "باردو"
  },
  {
    id: 'تونس',
    delegation: "ضفاف البحيرة"
  },
  {
    id: 'تونس',
    delegation: "قرطاج"
  },
  {
    id: 'تونس',
    delegation: "حي الخضراء"
  },
  {
    id: 'تونس',
    delegation: "المنزه"
  },
  {
    id: 'تونس',
    delegation: "الوردية"
  },
  {
    id: 'تونس',
    delegation: "حي التحرير"
  },
  {
    id: 'تونس',
    delegation: "الزهور"
  },
  {
    id: 'تونس',
    delegation: "الحرايرية"
  },
  {
    id: 'تونس',
    delegation: "جبل الجلود"
  },
  {
    id: 'تونس',
    delegation: "الكبارية"
  },
  {
    id: 'تونس',
    delegation: "حلق الوادي"
  },
  {
    id: 'تونس',
    delegation: "المرسى"
  },
  {
    id: 'تونس',
    delegation: "الكرم"
  },
  {
    id: 'تونس',
    delegation: "العمران"
  },
  {
    id: 'تونس',
    delegation: "العمران الأعلى"
  },
  {
    id: 'تونس',
    delegation: "سيدي البشير"
  },
  {
    id: 'تونس',
    delegation: "سيدي حسين"
  },
  {
    id: 'تونس',
    delegation: "السيجومي"
  },
  {
    id: 'زغوان',
    delegation: "زغوان المدينة"
  },
  {
    id: 'زغوان',
    delegation: "صواف"
  },
  {
    id: 'زغوان',
    delegation: "بئر مشارقة"
  },
  {
    id: 'زغوان',
    delegation: "الفحص"
  },
  {
    id: 'زغوان',
    delegation: "الناظور"
  },
  {
    id: 'زغوان',
    delegation: "الزريبة"
  }
]

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent extends DynamicTableCrud<Person> implements OnInit {
  shown = false;
  signupFormControl !: FormGroup;
  selected = false;
  passwordForm!: FormGroup;
  error !: string;
  validated !: boolean;
  state: any = [];
  public success = false;
  public msg = '';
  selectedOption: string;
  created!: boolean;
  country: string;
  isColorRed: boolean = true;
  test: any;
  errorsignup!: string;
  password: string = '';
  showPassword: boolean = false;
  xpassword!: any
  xconfirmPassword!: any
  nodelegation: boolean = false
  delegationoption: any = [];

  constructor(protected override service: AbstractRestService<Person>, private loginSignUpService: LoginSignupService,
              private router: Router, protected override secureStorageService: SecureStorageService) {
    super(service, `${environment.url}/api/persons/gov`, secureStorageService);
    this.selectedOption = '';
    this.country = '';

  }

  ngOnInit() {
    this.signupFormControl = new FormGroup({
      name: new FormControl('', [Validators.required]),
      family_name: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required, Validators.minLength(8)]),
      telephone2: new FormControl('', Validators.minLength(8)),
      login_number: new FormControl('', [Validators.required, Validators.minLength(8),Validators.maxLength(11)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      state: new FormControl('', [Validators.required]),
      delegation: new FormControl('', [Validators.required]),
      zip_code: new FormControl('', [Validators.required]),

      country: new FormControl('', [Validators.required]),
    });
    this.error = '';
    this.created = false

    //  this.states()

  }

  submit(): void {
    this.xpassword = this.signupFormControl.value.password;
    this.xconfirmPassword = this.signupFormControl.value.confirmPassword;

    if (this.xpassword != this.xconfirmPassword) {
      this.error = "Passwords do not match.";
    //  this.toast.error({detail: "خطأ في التسجيل", summary: 'كلمة المرور غير مطابقة', duration: 5000});

      this.isColorRed = false;
    } else {

      this.error = "Passwords  match.";

      this.loginSignUpService.signup({
        name: this.signupFormControl.value.name,
        login_number: this.signupFormControl.value.login_number.toString(),
        email: this.signupFormControl.value.email,
        password: this.signupFormControl.value.password,
        telephone: this.signupFormControl.value.telephone.toString(),
        telephone2: this.signupFormControl.value.telephone.toString(),
        type_user: 'parent',
        localisation: {
          country: this.signupFormControl.value.country,
          state: this.signupFormControl.value.state,
          delegation: this.signupFormControl.value.delegation,
          zip_code: this.signupFormControl.value.zip_code.toString()
        },
        profile: {
          family_name: this.signupFormControl.value.family_name,
          school: null,
          is_super_doctor: null,
          speciality: null,
          super_doctor: null,
        }
      }).subscribe({
        next: async response => {
         // this.toast.success({detail: "تمت العملية بنجاح", summary: 'تم إنشاء الحساب بنجاح', duration: 5000});
          this.success = true
          this.msg = 'ajout'
          this.test = response

          await this.router.navigate(['login']);
        },
        error: (err) => {
          this.created = true
          this.errorsignup = err.error;
          if (this.created) {
          //  this.toast.error({detail: "خطأ في التسجيل", summary: 'هذا الحساب مسجل بالفعل', duration: 5000});
          }
        }
      });
    }
  }

  togglePassword(passwordField: HTMLInputElement): void {
    this.showPassword = !this.showPassword;
    passwordField.type = this.showPassword ? 'text' : 'password';
  }

  choicecountry() {
    if (this.country == 'algerie') {
      this.nodelegation = true
      this.signupFormControl.controls['delegation'].setValue('none');
    } else {
      this.nodelegation = false
    }
  }

  states() {
    if (this.country == 'algerie') {
      this.state = algstate
      this.nodelegation = true
    } else {
      this.state = tunstate
    }
  }

  delegation() {

    this.delegationoption = tundelegation.filter(tundelegation => tundelegation.id == this.selectedOption)
  }

}
