import {Form} from '../form';


export interface SomatisationTroubleParent extends Form {
    headaches: string | null;
    upset_stomach: string | null;
    physical_aches: string | null;
    vomiting_nausea: string | null;
}
