import styled from 'styled-components'
import { Text as DefaultText } from '../../styles/base-styles'

export const ProgressbarContainer = styled.div`
  margin: 3rem 5rem;

  @media screen and (max-width: 600px) {
    margin: 2rem 1rem;
  }
`

export const ChartsContainer = styled.div`
  margin-top: 3rem;
  width: 100%;
`

export const Charts = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 1.5rem 0 1rem;
  text-align: center !important;
`

export const Text = styled(DefaultText)`
  text-align: center;
`
