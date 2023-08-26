import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  nameForm!: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.nameForm = this.formBuilder.group({
      nameForm: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.nameForm.valid) {
      const nameForm = this.nameForm.get('nameForm')?.value;

      sessionStorage.setItem('nameForm', nameForm);

      this.resetForm();
    }
  }

  resetForm(): void {
    this.nameForm.reset();
  }
}
