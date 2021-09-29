import styled from 'styled-components'

export const OrganizationContainer = styled.div`
  display: flex;
  width: 25rem;
  align-items: center;
  justify-content: center;
`

export const OrganizationUrl = styled.a`
  width: inherit;
  height: 12.5rem;

  position: relative;

  text-align: center;

  transition: all 0.5s;

  box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.25);

  &:hover {
    & > div {
      opacity: 0.8;
    }

    & > p {
      opacity: 1;
    }
  }
`

export const OrganizationImage = styled.img`
  width: 100%;
  height: 100%;
`

export const OrganizationName = styled.p`
  font-size: 2rem;
  letter-spacing: 5px;

  position: absolute;
  color: white;
  opacity: 0;

  z-index: 1;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  transition: all 0.5s;
`

export const ShadowLayer = styled.div`
  width: 100%;
  height: 100%;

  background: black;
  opacity: 0;

  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  transition: all 0.5s;
`
