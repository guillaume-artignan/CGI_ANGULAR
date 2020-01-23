import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [ScientifiqueComponent]
})
export class AppModule { }
