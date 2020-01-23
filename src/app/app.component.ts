import { Component } from '@angular/core';
import Article from './article/article.model';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  titre = "";
  lien = "";

  articles = [new Article("Google",0,"http://www.google.fr"),
              new Article("Le Monde",0,"http://www.lemonde.fr"),
              new Article("Le Figaro",0,"http://www.lefigaro.fr")];

  ajouterArticle(){
    this.articles.push(new Article(this.titre,0,this.lien));
  }

  supprimerArticle(event){
    this.articles.splice( this.articles.indexOf(event[1]), 1 );
  }
}
