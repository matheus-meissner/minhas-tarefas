import * as enums from '../utils/enums/Tarefa'

class Tarefa {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  nomeCompleto: string
  email: string
  telefone: string
  id: number

  constructor(
    titulo: string,
    prioridade: enums.Prioridade,
    status: enums.Status,
    nomeCompleto: string,
    email: string,
    telefone: string,
    id: number
  ) {
    this.titulo = titulo
    this.prioridade = prioridade
    this.status = status
    this.nomeCompleto = nomeCompleto
    this.email = email
    this.telefone = telefone
    this.id = id
  }
}

export default Tarefa
