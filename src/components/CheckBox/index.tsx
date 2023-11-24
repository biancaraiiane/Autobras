import React, { ChangeEvent } from 'react'

import styled from 'styled-components'

interface MyCheckboxProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const RoundCheckbox = styled.label`
  display: inline-block;
  position: relative;
  padding-left: 5px; /* Espaço para o círculo personalizado */
  cursor: pointer;
  user-select: none;
  font-size: 5px;

  input {
    //position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 10px; /* Tamanho do círculo */
    width: 10px; /* Tamanho do círculo */
    background-color: #fff; /* Cor do círculo */
    border: 1px solid #6b6d73; /* Borda do círculo */
    border-radius: 50%; /* Torna o círculo redondo */
  }

  /* Estilize o círculo quando o input estiver checado */
  input:checked ~ .checkmark {
    background-color: #008000; /* Cor do círculo quando checado */
  }

  /* Estilize o ponto dentro do círculo */
  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  /* Exiba o ponto quando o input estiver checado */
  input:checked ~ .checkmark:after {
    display: block;
  }

  /* Estilize o ponto dentro do círculo */
  .checkmark:after {
    left: 2px;
    top: 2px;
    width: 4px; /* Tamanho do ponto */
    height: 4px; /* Tamanho do ponto */
    border-radius: 50%; /* Torna o ponto redondo */
    background: #fff; /* Cor do ponto */
  }
`

const MyCheckbox: React.FC<MyCheckboxProps> = ({ onChange }) => {
  return (
    <RoundCheckbox>
      <input type="checkbox" onChange={onChange} />
      <span className="checkmark"></span>
    </RoundCheckbox>
  )
}

export default MyCheckbox
