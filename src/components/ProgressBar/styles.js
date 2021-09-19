import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-weight: 600;
`

export const ProgressContainer = styled.div`
  background-color: #f5f5f5;
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
  width: ${({ width }) => `${width}%`};
`
