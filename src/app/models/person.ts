import { Profile } from './profile';
import {Localisation} from './localisation';

export interface Person {

    name: string;
    telephone: string;
    telephone2?: string;
    login_number?: string;
    type_user?: string;
   // school ?: string | null;
   // family_name ?: string | null;
    //speciality ?: string;
    is_super ?: boolean;
    email?: string;
   // super_doctor ?: string | null;
    password?: string;
    id?: string;
    localisation?: Localisation;
    profile?:Profile ;

}
