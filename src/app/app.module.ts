import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { CompteurService } from './compteur.service';
import { ScientifiquesService } from './scientifiques.service';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ScientifiqueComponent } from './scientifique/scientifique.component';
import { CalculatriceComponent } from './calculatrice/calculatrice.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { BoutonTestComponent } from './bouton-test/bouton-test.component';
import { RequeteApiComponent } from './requete-api/requete-api.component';
import { RouterComponent } from './router-component/router.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ScientifiqueComponent,
    CalculatriceComponent,
    FormulaireComponent,
    BoutonTestComponent,
    RequeteApiComponent,
    RouterComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule,
    RouterModule.forRoot([{"path":"scientifiques", component : ScientifiqueComponent},
                          {"path": "calculatrice", component : CalculatriceComponent},
                          {"path": "formulaire", component : FormulaireComponent},
                          {"path": "requete", component : RequeteApiComponent},
                          {"path": "article", component : AppComponent},
                          {"path": "", component : AppComponent}])
  ],
  exports : [RouterModule],
  providers: [CompteurService,ScientifiquesService],
  bootstrap: [RouterComponent]
})
export class AppModule { }
