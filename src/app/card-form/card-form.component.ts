import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css'],
})
export class CardFormComponent implements OnInit {
  cardForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(32),
    ]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    cardNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16),
      Validators.pattern(/^[0-9]+$/),
    ]),
    Expir: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(4),
      Validators.pattern(/^[0-9]+$/),
    ]),
    SCode: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(20),
      Validators.pattern(/^[0-9]+$/),
    ]),
  });
  constructor() {}

  ngOnInit(): void {
    console.log(this.cardForm);
  }

  onSubmit() {
    console.log(this.cardForm);
  }
}
