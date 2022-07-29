import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  exibeTabela:  boolean = false;
  exibeApi: boolean = false;
  exibeForm: boolean = false;

  ngOnInit(): void {

  }

  exibirTabela(){
    this.exibeTabela = true;
    this.exibeApi = false;
    this.exibeForm = false;
  }

  exibirApi(){
    this.exibeApi = true;
    this.exibeTabela = false;
    this.exibeForm = false;
  }

  exibirForm(){
    this.exibeForm = true;
    this.exibeTabela = false;
    this.exibeApi = false;
  }

  closeAll(){
    this.exibeTabela = false;
    this.exibeApi = false;
    this.exibeForm = false;
  }

}
