import { Component, Input, OnInit, Output } from '@angular/core';
import { alunos } from 'src/app/model/alunos';

@Component({
  selector: 'spa-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  listaAlunos: alunos[] = [
    { nome: 'Teste 1', idade: 20, email: 'test.test@gmail.com', curso: 'Teste' },
    { nome: 'Teste 2', idade: 25, email: 'teste@test.com', curso: 'Analise e desenvolvimento de sistemas' },
    { nome: 'Teste 3', idade: 37, email: 'Testee@hotmail.com', curso: 'Engenharia da computacao' },
    { nome: 'Teste 4', idade: 52, email: 'test.tes.t@tes.t.com', curso: 'Sistemas da informacao' }
  ];

  displayedColumns: string[] = ['Nome', 'Idade', 'E-mail', 'Curso'];

}
