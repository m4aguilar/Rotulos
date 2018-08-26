import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.scss']
})
export class PresupuestoComponent implements OnInit {

  public form:FormGroup;

  constructor(private fb:FormBuilder) {
     
  }
  ngOnInit() {
    this.form = this.fb.group({
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      telefono: new FormControl(''),
      email: new FormControl('', [Validators.email]),
      asunto: new FormControl(''),
      consulta: new FormControl('', [Validators.required, Validators.minLength(5)])

    });
    console.log(this.form);
  }

  onSubmit(){
    console.log(this.form);
  }

}
