import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { AlunosComponent } from './components/alunos/alunos-list/alunos.component';

import { RickmortyApiService } from './services/rickmorty-api.service';
import { RickmortyComponent } from './components/rickmorty/rickmorty.component';
import { AlunosFormComponent } from './components/alunos/alunos-form/alunos-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlunosComponent,
    RickmortyComponent,
    AlunosFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [RickmortyApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
