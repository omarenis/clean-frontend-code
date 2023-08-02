import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Appointment} from "../../models/appointment";
import {Operation} from "../../models/form";

@Component({
  selector: 'app-consultation-table',
  templateUrl: './consultation-table.component.html',
  styleUrls: ['./consultation-table.component.css']
})
export class ConsultationTableComponent {
  @Input() consultations !: Appointment[];
  @Input() editable !: boolean;
  @Output() operationEventEmitter: EventEmitter<Operation> = new EventEmitter<Operation>();

  sendOperation(operation: string, data: {[key: string]: any})
  {
    this.operationEventEmitter.emit(<Operation>{
      command: operation,
      data: data
    });
  }
}
