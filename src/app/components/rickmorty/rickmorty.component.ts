import { Component, OnInit } from '@angular/core';
import { RickmortyApiService } from 'src/app/services/rickmorty-api.service';

@Component({
  selector: 'spa-rickmorty',
  templateUrl: './rickmorty.component.html',
  styleUrls: ['./rickmorty.component.css']
})
export class RickmortyComponent implements OnInit {

  chars;
  visivel: boolean = false;

  constructor(private rm: RickmortyApiService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.rm.listar().subscribe(dados => {
      this.chars = dados.results
    })
  }

  mostar(){
    this.visivel = true;
  }

}
