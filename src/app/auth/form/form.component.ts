import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  username!: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.username = this.formBuilder.group({
      userForm: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.username.valid) {
      const userForm = this.username.get('userForm')?.value;

      sessionStorage.setItem('username', userForm);

      this.resetForm();
      this.router.navigate(['/lobby']);
    }
  }

  resetForm(): void {
    this.username.reset();
  }
}