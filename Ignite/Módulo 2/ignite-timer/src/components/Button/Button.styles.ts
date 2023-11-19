import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 30px;
  background-color: ${(props) => props.theme['green-500']};
  border-radius: 4px;
  border: none;
  margin: 10px;
`
