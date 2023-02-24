import { DciMeasurement } from './../../Interfaces';
import { PostDataService } from './../../services/post-data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { DciMeasurementPost } from 'src/app/Interfaces';

@Component({
  selector: 'app-dci-store',
  templateUrl: './dci-store.component.html',
  styleUrls: ['./dci-store.component.scss']
})
export class DciStoreComponent implements OnInit {
  createForm: any;
  submitted!: boolean;
  response: any;

  constructor(private fb: FormBuilder, private PostDataService: PostDataService) { 
    this.createForm = this.fb.group({
      date: new FormControl('', [Validators.required]),
      dci: new FormControl('', [Validators.required, Validators.min(0), Validators.max(1000)])
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    const dciMeasurement: DciMeasurementPost = {
      dciMeasurementData: this.createForm.get('date')!.value,
      dciMeasurementDate: this.createForm.get('dci')!.value
    };

    this.PostDataService.postDciMeasurementData(dciMeasurement, 'michael.lawson@gmail.com').subscribe({
      next: res => this.response = res,
    });
  }

}
