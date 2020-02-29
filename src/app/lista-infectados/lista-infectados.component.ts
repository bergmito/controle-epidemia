import { Component, OnInit } from '@angular/core';
import { Infectado } from '../classes/infectado';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'lista-infectados',
  templateUrl: './lista-infectados.component.html',
  styleUrls: ['./lista-infectados.component.sass']
})
export class ListaInfectadosComponent implements OnInit {

  infectados: Array<Infectado> = [];

  infectadoForm = new FormGroup({
    nome: new FormControl(''),
    idade: new FormControl(''),
    doenca: new FormControl(''),
    localizacao: new FormGroup({
      lat: new FormControl(''),
      long: new FormControl('')
    })
  });

  constructor() { }

  ngOnInit() {
    let infectado: Infectado = new Infectado();
    infectado.nome = 'Mike';
    infectado.doenca = 'corona virus';
    infectado.idade = 20;
    infectado.localizacao = {'lat': '0000', 'long': '1111'};
    this.infectados.push(infectado);
  }

  paraMaiusculo(nome: string) {

    //solução1
    // this.infectados.forEach((pessoa_infectada, index) => {
    //   if (pessoa_infectada == nome) {
    //     this.infectados[index] = nome.toUpperCase();
    //   }
    // });

    //solução2
    // let index: number = this.infectados.indexOf(nome);
    // this.infectados[index] = nome.toUpperCase(); 
      
  }

  incluirIfectado(nome: string) {
    console.log(this.infectadoForm.value);
    // let infectado: Infectado = new Infectado();
    // infectado.nome = 'Alan';
    // infectado.doenca = 'corona virus';
    // infectado.idade = 23;
    // infectado.localizacao = {'lat': '0000', 'long': '2222'};
    // this.infectados.push(infectado);
  }

}
