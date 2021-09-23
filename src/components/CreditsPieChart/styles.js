import styled from 'styled-components'
import { Subtitle } from '../../styles/base-styles'
import { Text as DefaultText } from '../../styles/base-styles'

export const Wrapper = styled.div`
  height: fit-content;
  width: 100%;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Title = styled(Subtitle)`
  font-size: 1.25rem;
`

export const Text = styled(DefaultText)`
  margin: 2rem 0;
  text-align: center;
`
