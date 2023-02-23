import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dci-store',
  templateUrl: './dci-store.component.html',
  styleUrls: ['./dci-store.component.scss']
})
export class DciStoreComponent implements OnInit {
  createForm: any;
  submitted!: boolean;

  constructor(private fb: FormBuilder) { 
    this.createForm = this.fb.group({
      date: new FormControl('', [Validators.required]),
      dci: new FormControl('', [Validators.required, Validators.min(0), Validators.max(1000)])
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    const data = {
      date: this.createForm.get('date')!.value,
      dci: this.createForm.get('dci')!.value
    };
  }

}
