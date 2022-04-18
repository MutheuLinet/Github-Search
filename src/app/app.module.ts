import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RepoFormComponent } from './components/repo-form/repo-form.component';
import { RepoSearchService } from './services/repo-search.service';
import { GithubService } from './services/github.service';
import { HighlightDirective } from './directives/highlight.directive';
import { DateChangerPipe } from './pipes/date-changer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NavbarComponent,
    RepoFormComponent,
    HighlightDirective,
    DateChangerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    RepoSearchService,
    GithubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
