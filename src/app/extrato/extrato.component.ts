import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia.models';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  transferencias: any[] = [];

  constructor(private transferenciaService: TransferenciaService) { }

  ngOnInit() {
    this.transferenciaService.todas().subscribe(
      (transferencias: Transferencia[]) =>{
      console.table(transferencias);
      this.transferencias = transferencias;
    });
  }

}
