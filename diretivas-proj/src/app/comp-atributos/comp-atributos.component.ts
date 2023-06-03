import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {
  estilo: string = "enabled";
  corFundo: string = "red";
  corFonte: string = "yellow"
  item: string = ""
  lista: string[] = []

  constructor() { }

  adicionarLista() {
    this.lista.push(this.item)
  }

  trocar() {
    if (this.estilo === "disabled") {
      this.estilo = "enabled"
    } else {
      this.estilo = "disabled"
    }
  }

  ngOnInit(): void {
  }

}
