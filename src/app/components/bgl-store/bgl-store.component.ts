import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bgl-store',
  templateUrl: './bgl-store.component.html',
  styleUrls: ['./bgl-store.component.scss']
})
export class BglStoreComponent implements OnInit {

  createForm: FormGroup;
  response: any;
  submitted = false;
  router!: Router;

  constructor(private fb: FormBuilder) {
    this.createForm = this.fb.group({
      datetime: new FormControl('', [Validators.required]),
      bgl: new FormControl('', [Validators.required, Validators.min(0), Validators.max(1000)])
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    const data = {
      datetime: this.createForm.get('datetime')!.value,
      bgl: this.createForm.get('bgl')!.value
    };
  }

  get name(){
    return this.createForm.get('name');
  }

  get job(){
    return this.createForm.get('job');
  }

  hasError(controlName: string, errorName: string) {

  }

  onCancel(){
    
  }

}