import styled from 'styled-components'
import { UserOutlined } from '@ant-design/icons'
import { Form as FormAntd } from 'antd'

import 'antd/lib/input/style/index.css'
import { Item, Subtitle as SubtitleDefault } from '../../styles/base-styles'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1025px) {
    align-items: center;
  }
`

export const Subtitle = styled(SubtitleDefault)`
  margin-bottom: 2.5rem;
`

export const Icon = styled(UserOutlined)`
  font-size: 2rem;
`

export const FormWrapper = styled.section`
  display: flex;
  align-items: center;
  gap: 5rem;
  margin-left: 3rem;

  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
    margin-top: 1rem;
    gap: 3rem;
    margin-left: 0rem;
  }
`

export const Form = styled(FormAntd)`
  display: flex;
  flex-direction: column;
  max-width: 21rem;
  gap: 1rem;
`

export const SameLineInfoWrapper = styled.div`
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

export const ThemeWrapper = styled.section``
export const ThemesContainer = styled.div`
  display: flex;
  gap: 3rem;
  margin-left: 3rem;

  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
    margin-top: 1rem;
    gap: 3rem;
    margin-left: 0rem;
  }
`
