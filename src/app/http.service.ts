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
        const data = {'code': '900f58c03d9673db3ad17f80256bbf7e'};
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.put(this.url + '160c6ff9e553b6556dddc408ae0b38ed', data, {headers: headers});
    }
}
