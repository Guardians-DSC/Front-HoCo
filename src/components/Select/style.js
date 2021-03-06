import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;

  .anticon-down {
    position: absolute;
    margin-top: 0.9rem;
    margin-right: 1rem;
    right: 0;
  }
`

export const Select = styled.select`
  width: 100%;
  border-radius: 3px;
  height: 2.5rem;
  margin-top: 0.5rem;
  background-color: ${({ theme }) => theme['main-background']};
  color: ${({ theme }) => theme['main-font']};
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme['main-border']};
  padding-left: 0.5rem;
  appearance: none;
  cursor: pointer;
  outline: none;

  &:focus,
  &:hover {
    border-color: #18ff3933;
    box-shadow: 0 0 0 2px rgb(24 255 57 / 20%);
  }

  &:disabled {
    background-color: ${({ theme }) => theme['third-background']};
    color: ${({ theme }) => theme['main-font']};
    border-color: ${({ theme }) => theme['main-border']};
  }
`
export const Option = styled.option`
  padding: 1rem 0.75rem;

  &:disabled {
    background-color: ${({ theme }) => theme['third-background']};
    color: ${({ theme }) => theme['main-font']};
    border-color: ${({ theme }) => theme['second-font']};
  }
`
