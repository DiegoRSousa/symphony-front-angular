import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-novo-produto',
    templateUrl: './novo-produto.component.html',
    styleUrls: ['./novo-produto.component.scss']
})
export class NovoProdutoComponent {

    @Output() aoSalvar = new EventEmitter<any>();

    codigo = '';
    nome = '';
    preco = 0;
    status = 'ATIVADO';

    salvar() {
        console.log("salvando produto");    
        this.aoSalvar.emit({
            codigo: this.codigo, 
            nome: this.nome});
        this.limparCampos();
    }

    limparCampos() {
        this.codigo = '';
        this.nome = '';
        this.preco = 0;
        this.status = 'ATIVADO'
    }


}