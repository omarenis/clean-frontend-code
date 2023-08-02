
import {Person} from './person';
import {Supervise} from './supervise';
import { FormAbrParent } from './parent/form.abr.parent.ts.module';
import { FormAbrTeacher } from './teacher/formabrteacher';
import { AnxityTroubleParent } from './parent/anxity.trouble.parent';
import { BehaviorTroubleParent } from './parent/behaviorTroubleParent (1)';
import { HyperactivityTroubleParent } from './parent/hyperactivity.trouble.parent (1)';
import { LearningTroubleParent } from './parent/learning.trouble.parent (1)';
import { SomatisationTroubleParent } from './parent/somatisation.trouble.parent (1)';
import { hyperactivitytroubleteacher } from './teacher/hyperactivity.trouble.teacher (1)';
import { inattentiontroubleteacher } from './teacher/inattention.trouble.teacher (1)';
import { behaviortroubleteacher } from './teacher/behaviorTroubleTeacher';


export interface Patient {
  is_consulted?: boolean;
    type_user?: string;
    name?: string;
    family_name?: string;
    birthdate?: Date | string;
    gender?:string;
    sick?: boolean;
    supervise ?: Supervise;
    doctor_id ?: number;
    id?: string;
    parent?: Person;
    teacher?: Person;
    behaviortroubleparent?: BehaviorTroubleParent;
    learningtroubleparent?: LearningTroubleParent;
    anxitytroubleparent?: AnxityTroubleParent;
    somatisationtroubleparent?: SomatisationTroubleParent;
    hyperactivitytroubleparent?: HyperactivityTroubleParent;
    formabrparent?:FormAbrParent,
    formabrteacher?:FormAbrTeacher,
    behaviortroubleteacher?: behaviortroubleteacher;
    hyperactivitytroubleteacher?: hyperactivitytroubleteacher;
    inattentiontroubleteacher?: inattentiontroubleteacher;
    score_parent?: number;
    is_supervised?: boolean;
    score_teacher?: number;
    patient ?:number
    score_father ?:number;
    score_mother?:number
    saved?: boolean,
    supervisor?:number
}
