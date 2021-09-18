import styled from 'styled-components'

export const Page = styled.div`
  width: 100%;
`

export const Content = styled.div`
  width: auto;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin: 3.5rem 2.5rem;

  color: #514e4e;
`

export const Text = styled.p`
  font-size: 1rem;

  & > span {
    background: #dfdfdf;
  }

  & > a {
    color: #514e4e;
    font-weight: bold;
    text-decoration: underline;

    &:active,
    &visited {
      color: #514e4e;
    }
  }
`

export const Title = styled.h1`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 2rem;
  font-weight: 500;
  color: #514e4e;
  letter-spacing: 0.1rem;

  font-size: 3rem;
`

export const Subtitle = styled.h2`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin: 1.5rem 0;
  font-weight: 600;
  color: #514e4e;

  font-size: 1.5rem;
`
