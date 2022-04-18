import { Repository } from './../classes/repository';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { User } from '../classes/user';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  _user!: User;
  _repos!: Repository;
  _repositoryItems: any;

  constructor(private http: HttpClient) { 
    this._user= new User ('',0,0,'', new Date,'');
    this._repos=new Repository ('','','','');

    console.log('git service started');
  }

  getUser(searchName: any){
    interface ApiResponse{
      login: string;
      followers:number;
      following:number;
      avatar_url:string;
      created_at:Date;
      html_url:string;
    }

    return new Promise ((resolve:any, reject)=> {
      this.http.get<ApiResponse>('https://api.github.com/users/' + searchName ).toPromise().then(
        (result: any)=> {
          this._user.login = result.login;
          this._user.followers = result.followers;
          this._user.following = result.following;
          this._user.avatar_url = result.avatar_url;
          this._user.created_at = result.created_at;
          this._user.html_url = result.html_url;
          console.log(result);
          resolve();
        },
        (error)=> {
          console.log(error);
          reject();
        }
      );
    });
  }


  getRepositories(searchName:any){
    interface ApiResponse {
      repos:[];

    }
    
    return new Promise((resolve:any,reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/users/'+searchName+'/repos?').toPromise().then(
        (results) => {
          this._repositoryItems = results;
          console.log(results)
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