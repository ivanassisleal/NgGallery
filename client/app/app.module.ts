import 'rxjs/add/operator/map';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FotoModule } from './foto/foto.module';
import { HttpModule } from '@angular/http';
import { PainelModule } from './painel/painel.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { routing }  from './app.routes';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BotaoModule } from './botao/botao.module'

@NgModule({
    imports: [
        BrowserModule,
        FotoModule, 
        HttpModule, 
        PainelModule,
        routing,
        FormsModule,
        ReactiveFormsModule,
        BotaoModule
    ],
    declarations: [
        AppComponent,
        MenuComponent,
        ListagemComponent,
        CadastroComponent
    ], // Componentes que fazem parte do módulo
    bootstrap: [AppComponent] // Primeiro componente carregado do módulo
})
export class AppModule { }