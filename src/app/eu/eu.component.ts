import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.css']
})
export class EuComponent implements OnInit {

  nome: string = 'Keiny Katiuska Rivas Trompiz';
  idade: number = 28;
  amo: string = 'Viajar, Artes Marciales e Economia';
  vivo: string = 'Caracas, Venezuela';
  vivo2: string = 'Cordivil, Rio de Janeiro';
  foto: string = '../assets/minhafoto.jpg/200';

  getNome() {
    return this.nome;
    }

    getIdade() {
    return this.idade;
    }

    getAmo() {
    return this.amo;
    }

    getVivo() {
      return this.vivo;
    }

    getVivo2() {
      return this.vivo2;
    }

  constructor() { }

  ngOnInit(): void {
  }

}
