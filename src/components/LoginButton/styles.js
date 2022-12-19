import styled from 'styled-components'

export const Button = styled.button`
  color: ${(props) =>
    props.isactive ? props.theme['main-white'] : props.theme['main-green']};
  outline: none;
  border: 0;
  font-family: 'Roboto' sans-serif !important;
  font-weight: 500;
  border-radius: 0.2rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
