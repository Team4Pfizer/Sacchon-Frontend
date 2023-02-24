import { PatientData, BgMeasurement, DciMeasurement, Consultation } from './../../Interfaces';
import { PatientDataHandlingService } from './../../services/patient-data-handling.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  patientData!: PatientData;
  bgMeasurements!: BgMeasurement[];
  dciMeasurements!: DciMeasurement[];
  consultations!: Consultation[];
  displayedColumnsConsultations: string[] = ['id', 'dosage', 'medication', 'date'];
  displayedColumnsBgMeasurements: string[] = ['id', 'data', 'date', 'time'];
  displayedColumnsDciMeasurements: string[] = ['id', 'data', 'date'];

  constructor(private patientService: PatientDataHandlingService) { }

  ngOnInit(): void {
    this.patientService.getPatientData('michael.lawson@gmail.com').subscribe(data => {
      this.patientData = data;
      this.bgMeasurements = data.bgMeasurementList;
      this.dciMeasurements = data.dciMeasurementList;
      console.log(data);
    });

    this.patientService.getConsultations('michael.lawson@gmail.com').subscribe(data => {
      this.consultations = data;
      console.log(data);
    });
  }

}
