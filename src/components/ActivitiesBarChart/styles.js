import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 2.5rem;

  @media screen and (max-width: 600px) {
    text-align: center;
  }
`
