import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/services/json-service.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  public logo: string;
  public title: string;
  public description: string;
  public url: string;
  public fileJson: string = "assets/json/catalogues.json";
  public proveedores: Array<string>;
  

  constructor(private jsonService: JsonService) { }

  ngOnInit() {
    this.loadFile();
  }

  loadFile(){
    this.jsonService.getData(this.fileJson).subscribe(data =>{
      this.proveedores = data;
    });
  }

}
