import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit{
  listaTarefas : any[] = []

  ngOnInit(): void {
    this.listaTarefas = [
      {id: 0, nome: 'Lavar o carro', concluido: false},
      {id: 1, nome: 'Lavar a louça', concluido: true},
      {id: 2, nome: 'Lavar roupas', concluido: false}
    ]
  }


  adicionar(nomeTarefa: string){
    if(nomeTarefa.trim().length == 0){
      return
    }
    const tarefaEncontrada = this.listaTarefas.find(tarefa => tarefa.nome.toLowerCase() == nomeTarefa.toLowerCase())
    
    tarefaEncontrada ? alert('Essa tarefa já existe!') : this.listaTarefas.push({id: this.listaTarefas.length, nome:nomeTarefa, concluido: false});
  }

  deletar(idTarefa: number){
    this.listaTarefas = this.listaTarefas.filter(tarefa => tarefa.id !== idTarefa)
  }
}
