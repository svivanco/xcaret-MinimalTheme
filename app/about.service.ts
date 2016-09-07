import {Injectable} from '@angular/core';
import {HTTP_PROVIDERS, Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs/Rx';

let headers = new Headers({'Content-Type' : 'application/json; charset=iso-8859-1'});

@Injectable()
export class AboutService {

    constructor(public http:Http) {
    }

    // Uses http.get() to load a single JSON file
    getBooks() {
        return this.http.get('/app/books.json').map((res:Response) => res.json());
    }

    
    getAbout2() {
    this.http
      .get('/app/front.json')
      .map(x => x.json() )
      .map( (data) => 
        this._data = data
      )
    console.log(this._data)
  }
  

  getAbouts(){
      return this.http.get('/app/front2.json').map((res:Response) => res.json());
  }

 

}
