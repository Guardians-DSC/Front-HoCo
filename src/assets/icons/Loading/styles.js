import styled from 'styled-components'

export const Wrapper = styled.div`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-180deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }

  background: transparent;
  cursor: pointer;
  transition: 0.3s;
  animation: ${({ animated }) => animated && 'spin 1s linear infinite'};
`
