import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { CompteurService } from './compteur.service';
import { ScientifiquesService } from './scientifiques.service';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ScientifiqueComponent } from './scientifique/scientifique.component';
import { CalculatriceComponent } from './calculatrice/calculatrice.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { BoutonTestComponent } from './bouton-test/bouton-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ScientifiqueComponent,
    CalculatriceComponent,
    FormulaireComponent,
    BoutonTestComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule
  ],
  providers: [CompteurService,ScientifiquesService],
  bootstrap: [ScientifiqueComponent]
})
export class AppModule { }
