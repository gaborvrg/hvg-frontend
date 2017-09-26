import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {

    url = 'http://hvgbackend.herokuapp.com';

    constructor(private http: Http) { }

    putToBackend(obj) {
        console.log(obj);
        return this.http.put(this.url, obj);
    }
}
