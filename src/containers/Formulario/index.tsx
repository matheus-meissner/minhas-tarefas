import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { cadastrar } from '../../store/reducers/tarefas'
import * as enums from '../../utils/enums/Tarefa'
import { Form, Opcoes } from './styles'
import { BotaoSalvar } from '../../styles'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const [nomeCompleto, setNomeCompleto] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [titulo, setTitulo] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(
      cadastrar({
        nomeCompleto,
        email,
        telefone,
        titulo,
        prioridade,
        status: enums.Status.PENDENTE
      })
    )

    navigate('/')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        Nome Completo:
        <input
          type="text"
          value={nomeCompleto}
          onChange={(e) => setNomeCompleto(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Telefone:
        <input
          type="number"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
        />
      </label>
      <label>
        Título:
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
      </label>
      <Opcoes>
        <p>Prioridade:</p>
        <select
          value={prioridade}
          onChange={(e) => setPrioridade(e.target.value as enums.Prioridade)}
        >
          <option value={enums.Prioridade.NORMAL}>Normal</option>
          <option value={enums.Prioridade.IMPORTANTE}>Importante</option>
          <option value={enums.Prioridade.URGENTE}>Favorito</option>
        </select>
      </Opcoes>
      <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
    </Form>
  )
}

export default Formulario
