import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';

@Component({
  selector: 'app-bgl-store',
  templateUrl: './bgl-store.component.html',
  styleUrls: ['./bgl-store.component.scss']
})
export class BglStoreComponent implements OnInit {

  createForm: FormGroup;
  response: any;

  constructor(private fb: FormBuilder) {
    this.createForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      job: ['', new FormControl('', [Validators.required, Validators.minLength(3)])]
    });
  }

  ngOnInit(): void {
    // this.createForm = this.fb.group({
    //   name: new FormControl('', [Validators.required]),
    //   job: new FormControl('', [Validators.required, Validators.minLength(3)])
    // });
  }

  onSubmit() {
    const data = {
      name: this.createForm.get('name')!.value,
      job: this.createForm.get('job')!.value
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
