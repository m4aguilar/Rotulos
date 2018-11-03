import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  
  @Input('flexBorderSize') flexBorderSize: string;
  @Input('flexImageSize') flexImageSize: string;
  @Input('metadataUri') metadataUri: string;
  @Input('maxRowsPerPage') maxRowsPerPage: string;
  @Input('galleryName') galleryName: string;
  

  constructor() { }

  ngOnInit() {
  }

}
