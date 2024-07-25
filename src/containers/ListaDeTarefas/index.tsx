import React from 'react'
import { useSelector } from 'react-redux'
import Tarefa from '../../components/Tarefa'
import { RootReducer } from '../../store'

const ListaDeTarefas = () => {
  const tarefas = useSelector((state: RootReducer) => state.tarefas.itens)

  return (
    <div>
      {tarefas.map((t) => (
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
