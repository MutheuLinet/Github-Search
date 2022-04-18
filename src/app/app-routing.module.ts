import { RepoFormComponent } from './components/repo-form/repo-form.component';
import { FormComponent } from './components/form/form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  { path: 'user', component: FormComponent},
  { path: 'repo', component: RepoFormComponent},
  { path: '', redirectTo:"/user", pathMatch:"full"},
  { path:'**', component: NotFoundComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
