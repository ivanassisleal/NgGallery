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

    cadastra(foto: FotoComponent): Observable<MensagemCadastro> {
        if (foto._id) {
            return this.http.put(this.url + '/' + foto._id, JSON.stringify(foto),
                { headers: this.headers }).map(() => new MensagemCadastro("Foto alterada com sucesso", false));
        } else {
            return this.http.post(this.url, JSON.stringify(foto),
                { headers: this.headers }).map(() => new MensagemCadastro("Foto incluída com sucesso", true));
        }
    }

    remove(foto: FotoComponent): Observable<Response> {
        return this.http.delete(this.url + '/' + foto._id);
    }

    obterPorId(id: string): Observable<FotoComponent> {
        return this.http.get(this.url + '/' + id).map(res => res.json());
    }
}

export class MensagemCadastro {

    private _mensagem: string;
    private _inclusao: boolean;

    constructor(mensagem: string, inclusao: boolean) {
        this._mensagem = mensagem;
        this._inclusao = inclusao;
    }

    get mensagem(): string {
        return this._mensagem;
    }

    get inclusao(): boolean {
        return this._inclusao;
    }
}