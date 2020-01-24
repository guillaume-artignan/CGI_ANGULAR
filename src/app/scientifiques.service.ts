import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Personne from './scientifique/personne.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScientifiquesService {

  constructor(private http : HttpClient) { }

  donneScientifiques() : Observable<any>{

    return this.http.get("http://92.222.69.104/personnes/all");

    
  }
}
