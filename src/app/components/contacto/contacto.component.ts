import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  private longitud:string = '-4.8781545';
  private latitud:string = '37.3010892';
  
  constructor() { }

  ngOnInit() {
  }

}
