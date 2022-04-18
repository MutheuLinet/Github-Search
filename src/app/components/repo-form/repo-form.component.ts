import { Component, OnInit } from '@angular/core';
import { RepoSearch } from 'src/app/classes/repo-search';
import { RepoSearchService } from './../../services/repo-search.service';

@Component({
  selector: 'app-repo-form',
  templateUrl: './repo-form.component.html',
  styleUrls: ['./repo-form.component.css'],
  providers: [ RepoSearchService ],
})
export class RepoFormComponent implements OnInit {

  _repos!: RepoSearch;

  constructor(public repoSearch: RepoSearchService) { }

  ngOnInit(): void {
    this._repos = this.repoSearch._repos;
    this.searchRepo("Hello-World");

  }

  searchRepo(searchName:string){
    if (searchName !=='') {
      this.repoSearch.getRepos(searchName)
      console.log(searchName)
    };
  };
  
  

}
