import { Observable } from 'rxjs';
import { Patient } from '../Models/Patient';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PatientService {
    
    constructor(private http: HttpClient){}
    
    getById(id): Observable<Patient> {
        return this.http.get<Patient>(`/api/Patient/${id}`);
    }

    getInfoById(id): Observable<Patient> {
        return this.http.get<Patient>(`/api/Patient/info/${id}`);
    }

    getAll(): Observable<any> {
        return this.http.get<any>('/api/Customer');
    }

    addPatient(patient: Patient): Observable<Patient> {
        return this.http.post<Patient>('/api/Patient/add', patient);
    }

    updatePatient(patient: Patient): Observable<any> {   
        const body = JSON.stringify(patient);
        const header = new HttpHeaders()
        .set('content-type', 'application/json');    
        return this.http.post<any>('/api/Patient/updatePatient/', body, {headers: header});
    }

    deletePatientById(id): Observable<any> {
        return this.http.delete('/api/Patient/' + id);
    }



}
