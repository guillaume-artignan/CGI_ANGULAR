import { Injectable } from '@angular/core';
import Personne from './scientifique/personne.model'

@Injectable({
  providedIn: 'root'
})
export class ScientifiquesService {

  constructor() { }

  donneScientifiques(){
    return [new Personne("Einstein", "Albert","relativité","Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sunt cum, dolores dignissimos culpa nihil! Repellendus exercitationem facere saepe? Alias quod magnam quaerat nulla dignissimos reprehenderit quae amet magni culpa?"),
    new Personne("Curie", "Marie","Radioactivité","Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sunt cum, dolores dignissimos culpa nihil! Repellendus exercitationem facere saepe? Alias quod magnam quaerat nulla dignissimos reprehenderit quae amet magni culpa?"),
    new Personne("Curie", "Pierre","Radioactivité","Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sunt cum, dolores dignissimos culpa nihil! Repellendus exercitationem facere saepe? Alias quod magnam quaerat nulla dignissimos reprehenderit quae amet magni culpa?"),
    new Personne("Faraday", "Mickael","Electro-magnétisme","Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sunt cum, dolores dignissimos culpa nihil! Repellendus exercitationem facere saepe? Alias quod magnam quaerat nulla dignissimos reprehenderit quae amet magni culpa?"),
    new Personne("Nikola", "Tesla","Bobine Tesla","Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sunt cum, dolores dignissimos culpa nihil! Repellendus exercitationem facere saepe? Alias quod magnam quaerat nulla dignissimos reprehenderit quae amet magni culpa?")
   ];
  }
}
