import { Component, OnInit } from '@angular/core';

class Personne {
    constructor ( public nom,
                  public prenom,
                  public decouverte,
                  public description){
      //this.nom = nom; //autogeneré
    }
}


@Component({
  selector: 'app-root',
  templateUrl: './scientifique.component.html',
  styleUrls: ['./scientifique.component.css']
})
export class ScientifiqueComponent implements OnInit {

  titre = "Détail sur ";
  
  personne = new Personne("Einstein", "Albert","relativité","Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sunt cum, dolores dignissimos culpa nihil! Repellendus exercitationem facere saepe? Alias quod magnam quaerat nulla dignissimos reprehenderit quae amet magni culpa?");

  constructor() { }

  ngOnInit() {
  }

  
  select(){
      this.personne.nom +="1"; 
  }

}
