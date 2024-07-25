import React from 'react'
import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { RootReducer } from '../../store'
import TarefaClass from '../../models/Tarefa'

const ListaDeTarefas = () => {
  const { filtro, tarefas } = useSelector((state: RootReducer) => state)

  const filtrarTarefas = () => {
    let tarefasFiltradas = tarefas.itens

    if (filtro.termo) {
      tarefasFiltradas = tarefasFiltradas.filter((tarefa: TarefaClass) =>
        tarefa.titulo.toLowerCase().includes(filtro.termo!.toLowerCase())
      )
    }

    if (filtro.criterio === 'prioridade' && filtro.valor) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (tarefa) => tarefa.prioridade === filtro.valor
      )
    }

    if (filtro.criterio === 'status' && filtro.valor) {
      tarefasFiltradas = tarefasFiltradas.filter(
        (tarefa) => tarefa.status === filtro.valor
      )
    }

    return tarefasFiltradas
  }

  const tarefasFiltradas = filtrarTarefas()

  return (
    <div>
      {tarefasFiltradas.map((t) => (
        <Tarefa
          key={t.id}
          id={t.id}
          nomeCompleto={t.nomeCompleto}
          email={t.email}
          telefone={t.telefone}
          titulo={t.titulo}
          status={t.status}
          prioridade={t.prioridade}
        />
      ))}
    </div>
  )
}

export default ListaDeTarefas
