import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {routing, AppRoutingProviders} from './app-routing.module';
import { provideHttpClient  } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent,
    ExternoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing
  ],
  providers: [
      AppRoutingProviders,
      provideHttpClient()
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
