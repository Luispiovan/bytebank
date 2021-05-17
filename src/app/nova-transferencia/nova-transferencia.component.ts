import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Transferencia } from '../models/transferencia.models';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {
  @Output() aoTransferir = new EventEmitter<any>();
  @Output() valoresComErro = new EventEmitter<string>();

  valor: number;
  destino: number;

  constructor(private transferenciaService: TransferenciaService) {}

  ngOnInit() {}

  transferir() {
    console.log('Solicitada nova transferência');
    if (this.ehValido()) {
      const valorEmitir: Transferencia = {
        valor: this.valor,
        destino: this.destino,
      };
      this.transferenciaService.adicionar(valorEmitir).subscribe(
        (resultado) => {
          console.log(resultado);
          this.limparCampos();
        },
        (err) => console.error(err)
      );
    }
  }

  private ehValido() {
    const valido = this.valor > 0;
    if (!valido) {
      this.valoresComErro.emit('Informe um valor válido');
    }
    return valido;
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
