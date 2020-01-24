import { Component, OnInit } from '@angular/core';
import { CompteurService } from  '../compteur.service';
import { ScientifiquesService } from '../scientifiques.service';
import Personne from './personne.model';



@Component({
  selector: 'app-root',
  templateUrl: './scientifique.component.html',
  styleUrls: ['./scientifique.component.css'],
  providers : [CompteurService, ScientifiquesService]
})
export class ScientifiqueComponent implements OnInit {

  titre = "Détail sur ";
  personnes = [];

  personne = {};

  ville = "";

  constructor(public compteur : CompteurService, 
              public data : ScientifiquesService) { 
    
      this.personnes = this.data.donneScientifiques();
      this.personne = this.personnes[0];
  }

  ngOnInit() {
      
  }

  
  select(event){
    this.personne = event; 
    this.compteur.ajouter();
  }

  estCool():boolean {
    return this.ville=="Sete";
  }

}
