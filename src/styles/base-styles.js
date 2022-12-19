import styled, { css } from 'styled-components'
import { Form as FormAntd, Input as InputAntd, Modal as ModalAntd } from 'antd'
import 'antd/dist/antd.min.css'

export const AppWrapper = styled.div`
  background-color: ${({ theme }) => theme['main-background']};
  display: flex;
  min-height: 100vh;
  box-sizing: border-box;
  transition: width 0.3s;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    transition: 0.3s;
    color: ${({ theme }) => theme['main-font']} !important;
  }

  @keyframes littleJump {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-4px);
    }

    100% {
      transform: translateY(0);
    }
  }

  .ant-btn-primary {
    background: ${({ theme }) => theme['second-green']} !important;
  }

  @media screen and (max-width: 1025px) {
    display: block;
  }
`

export const Page = styled.div`
  width: 100%;
  padding: 3.5rem 2.5rem;
  /* background-color: ${({ theme }) => theme['main-background']}; */
  box-sizing: border-box;
  transition: 0.3s;
  color: ${({ theme }) => theme['main-font']};

  @media screen and (max-width: 1024px) {
    padding: 1.5rem 1rem;
  }
`

export const Content = styled.div`
  width: auto;
  height: 100%;

  display: flex;
  flex-direction: column;
`

export const Text = styled.p`
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
  transition: 0.3s;

  font-size: 1.75rem;

  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
`

export const Subtitle = styled.h2`
  margin: 1.5rem 0;
  font-weight: 500;
  transition: 0.3s;
  font-size: 1.25rem;

  @media screen and (max-width: 1024px) {
    text-align: center;
  }
`

export const Item = styled(FormAntd.Item)`
  display: block;
  margin: 0;

  input,
  select {
    margin-top: 0;
  }
`

export const Input = styled(InputAntd)`
  width: 100%;
  border-radius: 3px;
  height: 2.5rem;
  margin-top: 0.5rem;
  background-color: ${({ theme }) => theme['main-background']};
  color: ${({ theme }) => theme['main-font']};
  border-color: ${({ theme }) => theme['main-border']};

  &:focus,
  &:hover {
    border-color: #18ff3933;
    box-shadow: 0 0 0 2px rgb(24 255 57 / 20%);
  }

  &:disabled {
    background-color: ${({ theme }) => theme['third-background']};
    color: ${({ theme }) => theme['second-font']};
    border-color: ${({ theme }) => theme['second-font']};
  }
`

const buttonVariableOne = css`
  background-color: ${({ theme }) => theme['main-green']};
  color: ${({ theme }) => theme['main-white']};
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme['second-green']};
  }
`

const buttonVariableTwo = css`
  background-color: ${({ theme }) => theme['main-background']};
  color: ${({ theme }) => theme['second-font']};
  border: thin solid ${({ theme }) => theme['second-font']};

  &:hover {
    background-color: ${({ theme }) => theme['main-font']};
    color: ${({ theme }) => theme['main-background']};
  }
`

export const Button = styled.button`
  padding: 0.6rem 1rem;
  width: fit-content;
  cursor: pointer;
  border-radius: 2px;
  transition: 0.5s;
  font-size: 1rem;

  ${buttonVariableOne}
  ${({ variable }) => variable === 'second' && buttonVariableTwo}
`

export const Form = styled(FormAntd)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  .ant-form-item-label label {
    color: ${({ theme }) => theme['main-font']};
  }
`

export const Modal = styled(ModalAntd)`
  .ant-modal-content {
    max-height: 95vh;
    width: 400px;
    background-color: ${({ theme }) => theme['main-background']};
    color: ${({ theme }) => theme['main-font']};
    border-radius: 10px;
  }

  .ant-row {
    margin-bottom: 1rem;
  }

  .ant-modal-header {
    background-color: inherit;
    border-bottom: none;
    border-radius: 10px 10px 0 0;
    padding: 1.25rem 1.5rem 0;
  }

  .ant-modal-body {
    max-height: 83vh;
    overflow-y: scroll;
    padding: 1.75rem 1.5rem;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .ant-modal-footer {
    border-top: none;
    text-align: center;
    padding: 1rem 1rem 2.75rem;
  }

  .ant-modal-close-x {
    color: ${({ theme }) => theme['main-font']};
    font-size: 22px;
  }

  .ant-form-item-label {
    padding: 0;

    label {
      color: ${({ theme }) => theme['main-font']};
    }
  }

  @media (max-width: 600px) {
    .ant-modal-content {
      width: 100%;
      max-width: 80vw;
      margin: 0 auto;
    }
  }
`
