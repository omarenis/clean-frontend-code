import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Patient} from "../../models/patient";
import {Operation} from "../../models/form";

@Component({
  selector: 'app-children-table',
  templateUrl: './children-table.component.html',
  styleUrls: ['./children-table.component.css']
})
export class ChildrenTableComponent {
  @Input() children !: Patient [];
  @Input() type_user !: string;
  @Input() type_patients !: string;
  @Input() childrenLoaded !: boolean;
  @Output() patientOperationEvent: EventEmitter<Operation> = new EventEmitter<Operation>();

  sendOperation(operation: string, data: { [key: string]: any }): void {
    this.patientOperationEvent.emit(<Operation>{
      command: operation,
      data: data
    });
  }
}
