import styled from 'styled-components'
import { Item } from '../../styles/base-styles'
import { Subtitle as SubtitleDefault } from '../../styles/base-styles'

export const Wrapper = styled.div``

export const FormWrapper = styled.section`
  display: flex;
  align-self: center;
  align-items: center;
  gap: 8rem;
  width: 100%;

  @media screen and (max-width: 800px) {
    margin-left: 0;
    gap: 3rem;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
    margin-top: 1rem;
    gap: 3rem;
    margin-left: 0rem;
  }
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

export const Subtitle = styled(SubtitleDefault)`
  margin-bottom: 2.5rem;
`
