import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RepoSearch } from '../classes/repo-search';

@Injectable({
  providedIn: 'root'
})
export class RepoSearchService {

  _repos!: RepoSearch;

  constructor( private http: HttpClient) { 
    this._repos=new RepoSearch ('', 0);

    console.log('repo service started');

  }

  getRepos(repoName:any){
    interface ApiResponse {
      items: any;
      total_count: number;

    }
    return new Promise((resolve:any,reject)=>{
      this.http.get<ApiResponse>(` https://api.github.com/search/repositories?q=${repoName}`).toPromise().then(
        (result:any) => {
          this._repos.items = result.items;
          this._repos.total_count = result.total_count;

          console.log(result)
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
  
}
  
}


