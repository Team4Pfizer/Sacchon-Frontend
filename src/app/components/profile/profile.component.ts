import { DeleteDataService } from './../../services/delete-data.service';
import { PatientData, BgMeasurement, DciMeasurement, Consultation } from './../../Interfaces';
import { PatientDataHandlingService } from './../../services/patient-data-handling.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  patientData!: PatientData;
  bgMeasurements: MatTableDataSource<BgMeasurement> = new MatTableDataSource<BgMeasurement>([]);
  dciMeasurements: MatTableDataSource<DciMeasurement> = new MatTableDataSource<DciMeasurement>([]);
  consultations: MatTableDataSource<Consultation> = new MatTableDataSource<Consultation>([]);
  displayedColumnsConsultations: string[] = ['id', 'dosage', 'medication', 'date'];
  displayedColumnsBgMeasurements: string[] = ['id', 'data', 'date', 'time', 'delete'];
  displayedColumnsDciMeasurements: string[] = ['id', 'data', 'date', 'delete'];


  constructor(private patientService: PatientDataHandlingService, private deleteDataService: DeleteDataService) { }

  ngOnInit(): void {
    this.patientService.getPatientData('michael.lawson@gmail.com').subscribe(data => {
      this.patientData = data;
      this.bgMeasurements.data = data.bgMeasurementList;
      this.dciMeasurements.data = data.dciMeasurementList;
      console.log(data);
    });

    this.patientService.getConsultations('michael.lawson@gmail.com').subscribe(data => {
      this.consultations.data = data;
      console.log(data);
    });
  }

  deleteMeasurement(measurementId: number, measurementType: string, patientEmailID: string, index: number) {
    if (measurementType === 'bg') {
      this.deleteDataService.deleteBgMeasurement(measurementId, patientEmailID).subscribe(data => {
        console.log(data);
      });
      this.bgMeasurements.data.splice(index, 1);
      this.bgMeasurements._updateChangeSubscription();
    }
    else {
      this.deleteDataService.deleteDciMeasurement(measurementId, patientEmailID).subscribe(data => {
        console.log(data);
      });
    }
    this.dciMeasurements.data.splice(index, 1);
    this.dciMeasurements._updateChangeSubscription();
  }

}
