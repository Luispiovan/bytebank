import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {
  @Output() aoTransferir = new EventEmitter<any>();
  @Output() valoresComErro = new EventEmitter<string>();

  transferencia = [];
  valor: number = 0;
  destino: number = 0;

  constructor() {}

  ngOnInit() {}

  transferir() {
    console.log('Solicitada nova transferência');
    if (this.ehValido()) {
      const valorEmitir = { valor: this.valor, destino: this.destino };
      this.aoTransferir.emit(valorEmitir);
    }
  }

  private ehValido() {
    const valido = this.valor > 0;
    if (!valido) {
      this.valoresComErro.emit('Informe um valor válido');
    }
    return valido;
  }

  exibirModalErro(mensagem: any){ }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
