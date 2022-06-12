import styled from 'styled-components'

export const OrganizationsDiv = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 3rem 5rem;

  margin: 0 auto;
  margin-top: 3.5rem;

  @media screen and (max-width: 1700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 925px) {
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
    justify-content: center;
  }
`

export const NoInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 15rem;
  width: 100%;
`

export const EmptyText = styled.p`
  color: ${({ theme }) => theme['third-font']};
`
