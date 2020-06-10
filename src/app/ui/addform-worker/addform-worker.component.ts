import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css'],
})
export class AddformWorkerComponent implements OnInit {
  myWorkerType = MyWorkerType;
  name: string;
  surname: string;
  type = 0;

  phoneNumber: string;
  public mask = ['+', '7', /[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];

  @Output() addWorker = new EventEmitter<MyWorker>();
  formWorker: FormGroup;

  constructor() {
    this.formWorker = new FormGroup({ 
      name: new FormControl(null, [Validators.required]), 
      surname: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
      phoneNumber: new FormControl(null, [Validators.pattern(/^[+,0-9]+$/), Validators.required])
    });
  }

  ngOnInit(): void {}

  onAddWorker() {
      this.addWorker.emit({
        name: this.formWorker.value.name,
        surname: this.formWorker.value.surname,
        type: this.formWorker.value.type,
        phoneNumber: this.formWorker.value.phoneNumber
      });
    } 
}
