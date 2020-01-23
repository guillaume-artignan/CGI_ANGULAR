import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ScientifiqueComponent } from './scientifique/scientifique.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ScientifiqueComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ScientifiqueComponent]
})
export class AppModule { }
