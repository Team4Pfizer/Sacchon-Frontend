import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientDataHandlingService {

  constructor(private http: HttpClient) { }

  getPatientData(patientEmail: string) {
    let url = 'http://localhost:8080/api/v1/medidatavault/myaccount/' + patientEmail;
    return this.http.get(url);
  }

  getConsultations(patientEmail: string) {
    let url = 'http://localhost:8080/api/v1/medidatavault/consultations/' + patientEmail;
    return this.http.get(url);
  }
}
