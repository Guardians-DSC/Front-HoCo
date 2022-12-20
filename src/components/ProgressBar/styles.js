import styled from 'styled-components'

export const OutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`

export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-weight: 600;
  width: 100%;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`

export const ProgressContainer = styled.div`
  background-color: ${({ theme }) => theme['main-white']};
  width: 100%;
  height: 1.5rem;
  overflow: hidden;
  border-radius: 50px;
`

export const Progress = styled.div`
  height: inherit;
  box-shadow: 1px 1px 2px #00000060;
  background-color: #9f6464;
  border-radius: inherit;
  transition-delay: 0.2s;
  width: ${({ width }) => `${width}%`};
  transition: width 1s ease-in-out 0s;
`

export const LimitExceded = styled.span`
  font-weight: bold;
`