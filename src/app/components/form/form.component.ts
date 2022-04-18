import { Component, OnInit,Input, Output,   EventEmitter } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { User } from 'src/app/classes/user';
import { Repository } from 'src/app/classes/repository';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [ GithubService ]
})

export class FormComponent implements OnInit {
  _user!: User;
  _repo: Repository[]=[];


  constructor( public searchService: GithubService) { }

  searchUser(searchName:string){
    if (searchName !=='') {
      this.searchService.getUser(searchName)
      console.log(searchName)
    };
  };

  
  searchRepos(searchName:string){
    if (searchName !=='') {
      this.searchService.getRepositories(searchName)
      console.log(searchName)
    };
  };

  ngOnInit(): void {
    this._user = this.searchService._user;
    this._repo = this.searchService._repositoryItems;
    this.searchUser("MutheuLinet");
    this.searchRepos("MutheuLinet");

  }




}
