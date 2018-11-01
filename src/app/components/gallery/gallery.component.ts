import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  private images:any;
  private elementos = 3;
  
  constructor() { 
  }

  ngOnInit() {
  }

  
}
