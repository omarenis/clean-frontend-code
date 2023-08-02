export interface Form{
    score ?: number;
    parent_id ?: number;
    patient_id ?: number;
    teacher_id ?: number;
}


export interface Operation
{
  command: string;
  data: {[key: string]: any}
}
