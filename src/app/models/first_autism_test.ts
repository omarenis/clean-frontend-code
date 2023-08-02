import {FormControl} from '@angular/forms';
import { SucessChoices } from './choices';
import { FailedChoices } from './failedchoices';

export interface firstAutismTest  {
  label: string;
  formControlName: string;
  id: number;
  formControl ?: FormControl;
  sucesschoices:SucessChoices[];
  failedchoices:FailedChoices[];
}
