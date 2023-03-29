import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme['main-green']};
  transition: background-color 0.3s ease;
  display: flex;
  position: fixed;
  right: 2rem;
  top: 3rem;
  align-items: center;
  height: 2rem;
  padding: 0rem 0.4rem;
  box-sizing: border-box;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 600px) {
    width: 3rem;
    height: 1.5rem;
  }
`;

export const ThemeName = styled.span`
  color: white;
  padding: 0 1rem;
  font-weight: bold;
  text-transform: uppercase;
`

export const InnerBall = styled.div`
  background-color: white;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 100%;
  transition: 0.3s ease;
  transition-property: transform background-color;
  
  ${({ theme }) =>
    theme === "dark" ? `transform: translate(125%)` : ""};
  @media screen and (max-width: 600px) {
    width: 1rem;
    height: 1rem;
  }
`;