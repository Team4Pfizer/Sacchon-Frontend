import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteDataService {

  constructor(private http:HttpClient) { }

  deleteBgMeasurement(measurementId: number, patientEmail: string): Observable<any> {
    const url = 'http://localhost:8080/api/v1/medidatavault/bgmeasurement/' + patientEmail + '/' + measurementId;
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('crossDomain', 'true');
    return this.http.delete(url, {headers: headers});
  }

  deleteDciMeasurement(measurementId: number, patientEmail: string): Observable<any> {
    const url = 'http://localhost:8080/api/v1/medidatavault/dcimeasurement/' + patientEmail + '/' + measurementId;
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('crossDomain', 'true');
    return this.http.delete(url, {headers: headers});
  }
}
