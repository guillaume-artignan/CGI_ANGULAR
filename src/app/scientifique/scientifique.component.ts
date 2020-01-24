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
  personnes:Personne[] = [];

  personne = {};

  ville = "";

  constructor(public compteur : CompteurService, 
              public data : ScientifiquesService) { 
    
      
      
  }

  donneesChargees(data:Personne[]){
    this.personnes = data;
    console.log(data);
    this.personne = this.personnes[0];
  }

  ngOnInit() {
    this.data.donneScientifiques()
            .subscribe((data:Personne[])=>{this.donneesChargees(data)});
  }

  
  select(event){
    this.personne = event; 
    this.compteur.ajouter();
  }

  estCool():boolean {
    return this.ville=="Sete";
  }

}
