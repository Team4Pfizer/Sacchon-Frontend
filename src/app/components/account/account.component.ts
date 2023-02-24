import { Component, OnInit } from '@angular/core';
import { PatientData } from 'src/app/Interfaces';
import { PatientDataHandlingService } from 'src/app/services/patient-data-handling.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  patientData!: PatientData;

  constructor(private patientService: PatientDataHandlingService) { }

  ngOnInit(): void {
    this.patientService.getPatientData('michael.lawson@gmail.com').subscribe(data => {
      this.patientData = data;
      console.log(data);
    });
  }

}
