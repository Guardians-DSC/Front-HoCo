import styled from 'styled-components'

export const OrganizationsDiv = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fill, 29%);
  align-items: center;
  justify-content: center;
  gap: 3rem 5rem;
  flex-wrap: wrap;

  margin-top: 3.5rem;

  @media screen and (max-width: 1366px) {
    grid-template-columns: repeat(auto-fill, 40%);
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(1, 75%);
    align-items: center;
    justify-content: center;
  }
`
