import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Article from './article.model';

@Component({
  selector: 'ipi-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  article : Article;

  @Output()
  tropMauvais : EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit() {
  }

  votePour(){
    this.article.upVote();
  }

  voteContre(){
    this.article.downVote();
    if (this.article.vote<-9){
      this.tropMauvais.emit(["SUPPRIME MOI",this.article]);
    }
  }

}
