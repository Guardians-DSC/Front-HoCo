import styled from 'styled-components'

export const ContributorsContainer = styled.div`
  display: flex;
  gap: 1.5vw;
  flex-wrap: wrap;

  & > a {
    text-decoration: none;
  }

  & > a > img {
    border-radius: 50%;
    width: 10vh;
  }
`
