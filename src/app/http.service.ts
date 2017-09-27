import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {

    url = 'https://hvgbackend.herokuapp.com/';

    constructor(private http: Http) { }

    putToBackend(obj) {
        console.log(obj);
        return this.http.put(this.url, obj);
    }

    getEmailList() {
        // const env = '/process.env.DATAENDPOINT';
        const data = {'any': 'any'};
        const headers = new Headers({'Content-Type': 'application/json'});
        // return this.http.put(this.url + 'process.env.DATAENDPOINT', data, {headers: headers});
        return this.http.put(this.url + process.env.DATAENDPOINT, data, {headers: headers});
    }
}
