import { Descricao, Titulo } from '../components/Tarefa/styles'
import * as enums from '../utils/enums/Tarefa'

class Tarefa {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao: string
  id: number

  constructor(
    titulo: string,
    prioridade: enums.Prioridade,
    status: enums.Status,
    descricao: string,
    id: number
  ) {
    this.titulo = Titulo
    this.prioridade = prioridade
    this.status = status
    this.descricao = Descricao
    this.id = id
  }
}

export default Tarefa
