import styled from 'styled-components'
import { Text as DefaultText } from '../../styles/base-styles'

export const Wrapper = styled.div`
  height: fit-content;
  width: 100%;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const GraphTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 2.5rem;

  @media screen and (max-width: 600px) {
    text-align: center;
  }
`

export const Text = styled(DefaultText)`
  margin: 2rem 0;
  text-align: center;
`
