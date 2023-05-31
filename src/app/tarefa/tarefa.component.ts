import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit{
  TAREFA_KEY = 'tarefa_key'
  listaTarefas : any[] = [];


  ngOnInit(): void {
    const tarefas = localStorage.getItem(this.TAREFA_KEY)
    if(tarefas){
      this.listaTarefas = JSON.parse(tarefas)
    }
  }


  adicionar(nomeTarefa: string){
    if(nomeTarefa.trim().length == 0){
      return
    }
    const tarefaEncontrada = this.listaTarefas.find(tarefa => tarefa.nome.toLowerCase() == nomeTarefa.toLowerCase())
    
    tarefaEncontrada ? alert('Essa tarefa já existe!') : this.listaTarefas.push({id: this.listaTarefas.length, nome:nomeTarefa, concluido: false});
    this.saveInLocalStorage();
  }

  deletar(idTarefa: number){
    this.listaTarefas = this.listaTarefas.filter(tarefa => tarefa.id !== idTarefa);
    this.saveInLocalStorage();
  }

  handleChangeConcluidoState(idTarefa: number){
    this.listaTarefas.map(tarefa => {
      if(tarefa.id === idTarefa){
        tarefa.concluido = !tarefa.concluido
      }
    })
    this.saveInLocalStorage();
  }

  saveInLocalStorage(){
    localStorage.setItem(this.TAREFA_KEY, JSON.stringify(this.listaTarefas));
  }
}
