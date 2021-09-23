import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-weight: 600;
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
