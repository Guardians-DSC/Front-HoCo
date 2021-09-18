import styled from 'styled-components'
import { UserOutlined } from '@ant-design/icons'
import { Form as FormAntd } from 'antd'
import { Input as InputAntd } from 'antd'

import 'antd/lib/input/style/index.css'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1025px) {
    align-items: center;
  }
`

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: bold;
  font-size: 1.5rem;
  color: ${({ theme }) => theme['main-font']};
  letter-spacing: 2px;
  margin-bottom: 2rem;
  text-transform: uppercase;

  @media screen and (max-width: 1025px) {
    justify-content: center;
  }
`

export const SubTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${({ theme }) => theme['main-font']};
`

export const Icon = styled(UserOutlined)`
  font-size: 2rem;
`

export const FormWrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 2rem;
  align-self: center;
  width: fit-content;
  margin-left: 3rem;

  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
  }
`

export const Form = styled(FormAntd)`
  display: flex;
  flex-direction: column;
  max-width: 21rem;
  gap: 1rem;
  margin: 0 auto;
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

export const FormInfoWrapper = styled.div`
  display: flex;
  gap: 1rem;

  ${Item}:nth-of-type(1) {
    width: 30%;
    flex-grow: 1;
  }

  ${Item}:nth-of-type(2) {
    width: 60%;
    flex-grow: 4;
  }
`

export const Devider = styled.div`
  max-width: 12rem;
  width: 20vw;
  border-bottom: thin solid #818181;
  align-self: center;
  margin: 5rem 0;

  @media screen and (max-width: 600px) {
    margin: 3rem 0;
  }
`
