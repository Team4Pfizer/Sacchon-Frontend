import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PatientData } from './../Interfaces';
import { Consultation } from './../Interfaces';

@Injectable({
  providedIn: 'root'
})
export class PatientDataHandlingService {

  constructor(private http: HttpClient) { }

  getPatientData(patientEmail: string): Observable<PatientData> {
    let url = 'http://localhost:8080/api/v1/medidatavault/myaccount/' + patientEmail;
    return this.http.get<PatientData>(url);
  }

  getConsultations(patientEmail: string): Observable<Consultation[]> {
    let url = 'http://localhost:8080/api/v1/medidatavault/consultations/' + patientEmail;
    return this.http.get<Consultation[]>(url);
  }
}
