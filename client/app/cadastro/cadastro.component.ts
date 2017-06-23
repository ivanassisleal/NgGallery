import { Component, Input } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from '../foto/foto.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: 'cadastro.component.html'
})
export class CadastroComponent {

    fotoService: FotoService;
    foto: FotoComponent = new FotoComponent();
    meuForm: FormGroup;
    route: ActivatedRoute;
    router : Router;
    mensagem:string='';

    constructor(fotoService: FotoService, fb: FormBuilder,route: ActivatedRoute, router:Router) {

        this.route = route;
        this.fotoService = fotoService;
        this.router = router;

        this.route.params.subscribe(param => {
            let id = param['id'];

            if (id) {
                this.fotoService.obterPorId(id)
                    .subscribe(
                    foto => this.foto = foto,
                    erro => console.log(erro));
            }
        });

        this.meuForm = fb.group({
            titulo: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            url: ['', Validators.required],
            descricao: [''],
        });
    }

    cadastrar(event) {
        event.preventDefault();
        this.fotoService.cadastra(this.foto)
            .subscribe( res => {
                this.foto = new FotoComponent();
                this.mensagem = res.mensagem;
                if(!res.inclusao) this.router.navigate(['']);
                console.log('Foto salva com sucesso');
            }, erro => console.log(erro));
    }
}