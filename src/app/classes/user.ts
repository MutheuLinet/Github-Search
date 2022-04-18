export class User {
    static result: any;
    constructor(public login: string, public followers: number, public following:number, public avatar_url:string, public created_at: Date, public html_url:string ){

    }
}
