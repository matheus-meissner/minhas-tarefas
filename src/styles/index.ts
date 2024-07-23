import styled, { createGlobalStyle } from 'styled-components'
import { Botao } from '../components/Tarefa/styles'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`
export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Titulo = styled.h2`
  display: block;
  margin-bottom: 40px;
  margin-top: 40px;
  font-weight: bold;
  font-size: 18;
`
export const Campo = styled.input`
  border-radius: 8px;
  border-color: #666666;
  background-color: #fff;
  padding: 8px;
  font-weight: bold;
  color: #666666;
  width: 100%;
  margin-bottom: 16px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export default EstiloGlobal
