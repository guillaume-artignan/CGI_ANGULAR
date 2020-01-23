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
  personnes = [new Personne("Einstein", "Albert","relativité","Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sunt cum, dolores dignissimos culpa nihil! Repellendus exercitationem facere saepe? Alias quod magnam quaerat nulla dignissimos reprehenderit quae amet magni culpa?"),
               new Personne("Curie", "Marie","Radioactivité","Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sunt cum, dolores dignissimos culpa nihil! Repellendus exercitationem facere saepe? Alias quod magnam quaerat nulla dignissimos reprehenderit quae amet magni culpa?"),
               new Personne("Curie", "Pierre","Radioactivité","Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sunt cum, dolores dignissimos culpa nihil! Repellendus exercitationem facere saepe? Alias quod magnam quaerat nulla dignissimos reprehenderit quae amet magni culpa?"),
               new Personne("Faraday", "Mickael","Electro-magnétisme","Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sunt cum, dolores dignissimos culpa nihil! Repellendus exercitationem facere saepe? Alias quod magnam quaerat nulla dignissimos reprehenderit quae amet magni culpa?"),
               new Personne("Nikola", "Tesla","Bobine Tesla","Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sunt cum, dolores dignissimos culpa nihil! Repellendus exercitationem facere saepe? Alias quod magnam quaerat nulla dignissimos reprehenderit quae amet magni culpa?")
              ];

  personne = this.personnes[0];

  ville = "";

  constructor() { }

  ngOnInit() {
  }

  
  select(event){
    this.personne = event; 
  }

  estCool():boolean {
    return this.ville=="Sete";
  }

}
