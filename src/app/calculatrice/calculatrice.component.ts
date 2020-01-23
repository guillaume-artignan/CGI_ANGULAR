import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.css']
})
export class CalculatriceComponent implements OnInit {

  resultat = " ";

  constructor() { }

  ngOnInit() {
  }

  ajoute(nb){
      this.resultat += nb;
  }

  nettoyer(){
      this.resultat = " ";
  }

  egal(){
      this.resultat = eval(this.resultat);
  }

}
