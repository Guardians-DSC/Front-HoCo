import styled from 'styled-components'
import { Form as FormAntd } from 'antd'
import { Input as InputAntd } from 'antd'

export const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme['main-background']};
  display: flex;
  min-height: 100vh;
  width: 100%;
  box-sizing: border-box;
  transition: width 0.3s;

  @media screen and (max-width: 1025px) {
    display: block;
  }
}
`

export const Page = styled.div`
  width: 100%;
  padding: 3.5rem 2.5rem;
  background-color: ${({ theme }) => theme['main-background']};

  box-sizing: border-box;
  transition: 0.3s;
  color: ${({ theme }) => theme['main-font']};

  @media screen and (max-width: 1024px) {
    padding: 1.5rem 1rem;
  }
`

export const Content = styled.div`
  width: auto;

  display: flex;
  flex-direction: column;
`

export const Text = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  line-height: 1.5rem;

  & > span {
    background: ${({ theme }) => theme['main-emphasis']};
    padding: 0 0.25rem;
    border-radius: 5px;
  }

  & > a {
    color: ${({ theme }) => theme['main-font']};
    font-weight: bold;
    text-decoration: underline;

    &:active,
    &visited {
      color: ${({ theme }) => theme['main-font']};
    }
  }

  @media screen and (max-width: 1024px) {
    text-align: justify;
  }
`

export const Title = styled.h1`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 2rem;
  font-weight: 500;
  letter-spacing: 0.1rem;

  font-size: 2rem;

  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
`

export const Subtitle = styled.h2`
  margin: 1.5rem 0;
  font-weight: 500;

  font-size: 1.5rem;

  @media screen and (max-width: 1024px) {
    text-align: center;
  }
`

export const Item = styled(FormAntd.Item)``

export const Input = styled(InputAntd)`
  width: 100%;
  border-radius: 3px;
  height: 2.5rem;
  margin-top: 0.5rem;

  &:focus {
    border-color: #18ff3933;
    box-shadow: 0 0 0 2px rgb(24 255 57 / 20%);
  }
`

export const Button = styled.button`
  padding: 0.6rem 1rem;
  background-color: ${({ theme }) => theme['main-green']};
  color: ${({ theme }) => theme['main-white']};
  width: fit-content;
  cursor: pointer;
  border-radius: 2px;
  border: none;
  transition: 0.5s;

  &:hover {
    background-color: ${({ theme }) => theme['second-green']};
  }
`
