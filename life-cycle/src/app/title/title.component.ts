import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  @Input() nome: string = '';

  constructor() {
    //console.log(`Olá ${this.nome}`);
   }

  ngOnInit(): void {

  }
}
