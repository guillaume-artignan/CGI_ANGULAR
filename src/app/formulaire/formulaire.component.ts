import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  monFormulaire : FormGroup;

  constructor(fb : FormBuilder) { 
    this.monFormulaire = fb.group({
      nom : ["Artignan",Validators.required],
      prenom : ["Guillaume",Validators.required]
    })
  }

  ngOnInit() {
  }

  valide(values){
    console.log(values);
  }

  valide2(){
    console.log(this.monFormulaire.value);
    console.log(this.monFormulaire.valid);
  }
}
