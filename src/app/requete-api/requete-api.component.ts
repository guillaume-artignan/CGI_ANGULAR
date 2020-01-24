import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './requete-api.component.html',
  styleUrls: ['./requete-api.component.css']
})
export class RequeteApiComponent implements OnInit {

  title = null;
  loading = null;

  constructor(private http : HttpClient) { 

      var a = (nom,prenom)=>{        console.log(this);};
      var b = function(nom,prenom) { console.log(this);};
    

  }

  ngOnInit() {
  }

  faireRequete(){
    this.loading = true;
    /*this.http.get("https://jsonplaceholder.typicode.com/posts/1")
             .subscribe((data)=>{this.donneeChargee(data)});*/

    this.http.get("https://jsonplaceholder.typicode.com/posts/1")
              .toPromise().then((data)=>{this.donneeChargee(data)});
  }

  donneeChargee(data){
    this.loading = false;
    this.title = data.title;
  }



}
