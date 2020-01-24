import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CompteurService } from './compteur.service';
import { ScientifiquesService } from './scientifiques.service';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ScientifiqueComponent } from './scientifique/scientifique.component';
import { CalculatriceComponent } from './calculatrice/calculatrice.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { BoutonTestComponent } from './bouton-test/bouton-test.component';
import { RequeteApiComponent } from './requete-api/requete-api.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ScientifiqueComponent,
    CalculatriceComponent,
    FormulaireComponent,
    BoutonTestComponent,
    RequeteApiComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [CompteurService,ScientifiquesService],
  bootstrap: [ScientifiqueComponent]
})
export class AppModule { }
