import styled from 'styled-components'

export const OrganizationsDiv = styled.div`
  width: 100%;
  flex-grow: 1;

  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  gap: 3rem 5rem;

  margin: 0 auto;
  margin-top: 3.5rem;

  @media screen and (max-width: 1700px) {
    justify-content: center;
    align-items: center;
  }
`

export const NoInfoContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 100%;
  max-height: 35rem;
`

export const EmptyText = styled.p`
  color: ${({ theme }) => theme['third-font']};
`
