import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from '../models/transferencia.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private listaTransferencias: Transferencia[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpCliente: HttpClient) {
    this.listaTransferencias = [];
  }

  get Transferencias(){
    return this.listaTransferencias;
  }

  todas(): Observable<Transferencia[]>{
    return this.httpCliente.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.hidratar(transferencia);
    //this.listaTransferencias.push(transferencia);
    return this.httpCliente.post<Transferencia>(this.url, transferencia);
  }

  private hidratar(transferencia: Transferencia) {
    transferencia.data = new Date();
  }
}
