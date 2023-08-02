import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
export interface Connection {
    type_user: string;
    name: string;
    is_superuser: boolean;
}
@Injectable({
    providedIn: 'root'
})
export class ConnectionService {
    private connection = new Subject<Connection>();
    connected$ = this.connection.asObservable();
    constructor() {
    }
    setConnection(connection: Connection): void{
        this.connection.next(connection);
    }
}
