import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ItemLista } from './item-lista';

@Component({
  selector: 'app-lista-compras',
  imports: [CommonModule,FormsModule],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss'
})
export class ListaComprasComponent {
  lista: ItemLista[] = [];
  item: string = '';

  adicionarLista(){
    let itemLista = new ItemLista();
    itemLista.nome = this.item;
    itemLista.id = this.lista.length+1;

    this.lista.push(itemLista);

    this.item = '';

    console.table(this.lista);
  }

  riscarItem(itemLista: ItemLista){
    itemLista.comprado = !itemLista.comprado;
  }

  limparLista() {
    this.lista = [];
  }
}
