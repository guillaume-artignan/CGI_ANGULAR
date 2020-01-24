import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompteurService {

  compteur = 0;
  
  constructor() { }
  
  ajouter(){
	  this.compteur++;
  }
  
  donner(){
	  return this.compteur;
  }
  
}
