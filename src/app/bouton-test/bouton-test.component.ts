import { Component, OnInit } from '@angular/core';
import { CompteurService } from '../compteur.service'

@Component({
  selector: 'app-bouton-test',
  templateUrl: './bouton-test.component.html',
  styleUrls: ['./bouton-test.component.css'],
  providers : [CompteurService]
})
export class BoutonTestComponent implements OnInit {

  constructor(public compteur : CompteurService) { }

  ngOnInit() {
  }

  augmente(){
    this.compteur.ajouter();
  }

}
