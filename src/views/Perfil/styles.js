import styled from 'styled-components'
import { UserOutlined } from '@ant-design/icons'
import { Form } from 'antd'
import { Input as InputAntd } from 'antd'

import 'antd/lib/input/style/index.css'

export const Wrapper = styled.div``

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
`

export const Icon = styled(UserOutlined)`
  font-size: 2rem;
`

export const FormWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: fit-content;
  margin: 0 auto;
`

export const Item = styled(Form.Item)``

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
  max-width: 21rem;

  ${Item}:nth-of-type(1) {
    width: 30%;
    flex-grow: 1;
  }

  ${Item}:nth-of-type(2) {
    width: 60%;
    flex-grow: 4;
  }
`
