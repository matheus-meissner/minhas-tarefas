import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10vh;
  margin-left: 10vw;
  max-width: 547px;
  width: 100%;
  font-weight: bold;
  font-size: 14px;
  color: #666666;

  textarea {
    resize: none;
    margin: 16px 0;
  }

  input {
    display: block;
    width: 300px;
    height: 30px;
  }

  label {
    margin-top: 6px;
  }

  option {
    display: inline;
    text-transform: capitalize;
  }
`

export const Opcoes = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
    margin-top: 6px;
  }

  label {
    margin-right: 6px;
    font-size: 25px;
  }
`
