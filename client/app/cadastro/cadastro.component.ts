import { Component, Input } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from '../foto/foto.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: 'cadastro.component.html'
})
export class CadastroComponent {

    fotoService: FotoService;
    foto: FotoComponent = new FotoComponent();
    meuForm: FormGroup;

    constructor(fotoService: FotoService, fb: FormBuilder) {

        this.fotoService = fotoService;

        this.meuForm = fb.group({
            titulo: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            url: ['', Validators.required],
            descricao: [''],
        });
    }

    cadastrar(event) {

        event.preventDefault();

        let headers = new Headers();
        headers.append('content-type', 'application/json');

        this.fotoService.cadastra(this.foto)
            .subscribe(() => {
                this.foto = new FotoComponent();
                console.log('Foto salva com sucesso');
            }, erro => console.log(erro));
    }
}