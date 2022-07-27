import { Component, Input, OnInit } from '@angular/core';
import { alunos } from '../model/alunos'

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  valor: number;
  exibeTabela:  boolean = false;

  listaAlunos: alunos[] = [
    { nome: 'Teste 1', idade: 20, email: 'test.test@gmail.com', curso: 'Teste' },
    { nome: 'Teste 2', idade: 25, email: 'teste@test.com', curso: 'Analise e desenvolvimento de sistemas' },
    { nome: 'Teste 3', idade: 37, email: 'Testee@hotmail.com', curso: 'Engenharia da computacao' },
    { nome: 'Teste 4', idade: 52, email: 'test.tes.t@tes.t.com', curso: 'Sistemas da informacao' }
  ];

  displayedColumns: string[] = ['Nome', 'Idade', 'E-mail', 'Curso'];

  ngOnInit(): void {
    this.valor = 5;
  }

  mudarValor() {
    this.valor++;
  }

  reiniciarValor() {
    this.valor = 0;
  }

  exibirTabela(){
    this.exibeTabela = true;
  }

}
