import {Injectable} from '@angular/core';
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {About} from "../models/about";

@Injectable()
export class AboutService{
	constructor(private _http: Http){}

	getAbouts(){
		return this._http.get("/app/front2.json").map(res => res.json());
	}

}
