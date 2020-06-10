import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MyWorkerType, MyWorker } from 'src/app/shared/worker.model';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-editform-worker',
  templateUrl: './editform-worker.component.html',
  styleUrls: ['./editform-worker.component.css']
})
export class EditformWorkerComponent implements OnInit {

  myWorkerType = MyWorkerType;
  name: string;
  surname: string;
  type = 0;

  phoneNumber: string;
  public mask = ['+', '7', /[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/];

  @Input() worker: MyWorker;
  userForm: FormGroup;

  constructor() { 
    this.userForm = new FormGroup({ 
      name: new FormControl(null, [Validators.required]), 
      surname: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
      phoneNumber: new FormControl(null, [Validators.pattern(/^[+,0-9]+$/), Validators.required])
    });
  }

  ngOnInit(): void {
    this.name = this.worker.name; //чтобы в полях были изначальные данные
    this.surname = this.worker.surname;
    this.type = this.worker.type;
    this.phoneNumber = this.worker.phoneNumber;
  }

  onChangeWorker() {
      this.changeWorker();
      console.log(this.worker);
  }

  changeWorker() {
      this.worker.name = this.userForm.value.name, //меняем данные работника на те что в полях
      this.worker.surname = this.userForm.value.surname,
      this.worker.type = this.userForm.value.type
      this.worker.phoneNumber = this.userForm.value.phoneNumber;
  }
}
