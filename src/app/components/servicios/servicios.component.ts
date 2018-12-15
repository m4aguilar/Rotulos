import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {

  public fileJson: string;
  public nameService: string;

  constructor(public ruteActive: ActivatedRoute,
              public router: Router) {

    this.ruteActive.params.subscribe(event => {
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.loadFile();
  }

  loadFile(){
    this.nameService = this.ruteActive.snapshot.params.service;
    this.fileJson = 'assets/json/' + this.ruteActive.snapshot.params.service + '.json';
    //Mientras tanto ponemos el json de ejemplo
    //this.fileJson = "assets/img/images.json";
  }

}
