import { Pipe, PipeTransform } from '@angular/core';
import { FotoComponent } from './foto.component';

@Pipe({
    name: 'filtraPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform {
    transform(fotos: FotoComponent[], digitado: string) : FotoComponent[] {
        if (!fotos) return null;
        digitado = digitado.toLowerCase();
        return fotos.filter((foto) => foto.titulo.toLowerCase().includes(digitado));
    }
}