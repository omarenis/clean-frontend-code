import {Person} from './person';

export interface Appointment {
    parent_id?: number;
    doctor_id?: number;
    date: Date | string;
    parent?: Person;
    doctor?: Person;
    id?: number;
    patient?: string
}
