import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rifas',
  templateUrl: './rifas.component.html',
  styleUrls: ['./rifas.component.css']
})
export class RifasComponent implements OnInit {
  numeros = [''];
  constructor() { }

  ngOnInit() {
    let cont = 0;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        for (let k = 0; k < 10; k++) {
          this.numeros[cont] = i.toString() + j.toString() + k.toString();
          cont++;
        }
      }
    }
    console.log(this.numeros);
  }

}
