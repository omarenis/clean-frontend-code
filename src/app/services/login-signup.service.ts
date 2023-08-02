import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from '../models/person';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';
export interface Token{
    profile: any;
    access: string;
    refresh: string;
    userId: number;
    type_user: string;
    name: string;
    family_name: string | undefined;
}

@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {


  path = `${environment.url}/api/persons`;

    constructor(private httpClient: HttpClient) {}

    public login(login_number: string, password: string): Observable<Token> {
        return this.httpClient.post<Token>(`${this.path}/login`, {login_number, password});
    }

    public signup(person: Person): Observable<void> {
        return this.httpClient.post<void>(`${this.path}/signup`, person);
    }

    public logout(refresh: string, access: string): Observable<void> {
        return this.httpClient.post<void>(`${this.path}/logout`, {refresh}, {
            headers: {
                Authorization: `Bearer ${access}`
            }
        });
    }

}
