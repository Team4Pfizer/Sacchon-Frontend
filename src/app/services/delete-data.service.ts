import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteDataService {

  constructor(private http:HttpClient) { }

  deleteBgMeasurement(measurementId: number, patientEmail: string) {
    let url = 'http://localhost:4200/api/v1/medidatavault/bgmeasurement/' + patientEmail + '/' + measurementId;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    });
    return this.http.delete(url, { headers });
  }

  deleteDciMeasurement(measurementId: number, patientEmail: string) {
    let url = 'http://localhost:4200/api/v1/medidatavault/dcimeasurement/' + patientEmail + '/' + measurementId;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    });
    return this.http.delete(url, { headers });
  }
}
