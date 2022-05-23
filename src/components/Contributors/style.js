import styled from 'styled-components'

export const ContributorsContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  & > a {
    text-decoration: none;
  }

  & > a > img {
    border-radius: 50%;
    width: 4rem;
    transition: 0.3s;
  }

  & > a > img:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
`
