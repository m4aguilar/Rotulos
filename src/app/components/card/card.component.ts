import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  
  @Input('logo') logo: string;
  @Input('title') title: string;
  @Input('description') description: string;
  @Input('url') url:string;

  constructor() { 
    
  }

  ngOnInit() {
  }

}
