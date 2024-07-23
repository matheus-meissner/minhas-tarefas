import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Circulo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 40px;
  height: 64px;
  width: 64px;
  background-color: #44bd32;
  border-radius: 50%;
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  cursor: pointer;
`
