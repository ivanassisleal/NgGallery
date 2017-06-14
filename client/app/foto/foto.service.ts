import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { FotoComponent } from './foto.component';
import { Observable } from 'rxjs';

@Injectable()
export class FotoService {

    private http: Http;
    private headers: Headers;
    private url: string = 'v1/fotos';

    constructor(http: Http) {
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    Lista(): Observable<Array<FotoComponent>> {
        return this.http.get(this.url)
            .map(res => res.json());
    }

    cadastra(foto: FotoComponent): Observable<Response> {
        return this.http.post(this.url, JSON.stringify(foto),
            { headers: this.headers });
    }

    remove(foto: FotoComponent): Observable<Response> {
        return this.http.delete(this.url + '/' + foto._id);
    }
}