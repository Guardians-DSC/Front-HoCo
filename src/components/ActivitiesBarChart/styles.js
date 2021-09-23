import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .recharts-layer .recharts-cartesian-axis-tick text {
    fill: ${({ theme }) => theme['main-font']} !important;
  }
`
export const GraphTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 2.5rem;

  @media screen and (max-width: 600px) {
    text-align: center;
  }
`
