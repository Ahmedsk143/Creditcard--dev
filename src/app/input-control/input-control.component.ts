import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-control',
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.css'],
})
export class InputControlComponent implements OnInit {
  @Input() mask: string;
  @Input() control: FormControl;
  constructor() {}

  ngOnInit(): void {}
}
