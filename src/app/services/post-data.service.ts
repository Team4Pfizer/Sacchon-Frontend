import { BgMeasurementPost, DciMeasurementPost } from './../Interfaces';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostDataService {

  constructor(private http: HttpClient) { }

  postBgMeasurementData(data: BgMeasurementPost, patientEmail: string) {
    let url = 'http://localhost:8080/api/v1/medidatavault/bgmeasurement/' + patientEmail;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(url, data, { headers });
  }

  postDciMeasurementData(data: DciMeasurementPost, patientEmail: string) {
    let url = 'http://localhost:8080/api/v1/medidatavault/dcimeasurement/' + patientEmail;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(url, data, { headers });
  }
}
