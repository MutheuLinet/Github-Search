import { RepoFormComponent } from './components/repo-form/repo-form.component';
import { FormComponent } from './components/form/form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'user', component: FormComponent},
  { path: 'repo', component: RepoFormComponent},
  { path: '', redirectTo:"/user", pathMatch:"full"},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
