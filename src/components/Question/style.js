import styled from 'styled-components'

export const Section = styled.div`
  display: flex;
  flex-direction: column;

  .task-list-item {
    list-style-type: none;
  }
  .contains-task-list {
    padding-left: 0;
  }

  img {
    width: fit-content;
    padding-top: 1rem;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  blockquote {
    border-left: 4px solid #8b949e;
    padding-left: 0.8rem;
    line-height: 1.7rem;
  }

  table {
    border-radius: 0.2rem;
    display: block;
    width: fit-content;

    td,
    th {
      border: 1px solid #555;
      text-align: left;
      vertical-align: middle;
      padding: 0.5rem 0.8rem;
      margin: 0;
      line-height: 1.65rem;
      overflow-x: auto;
    }
  }
`
export const QuestionContent = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: 0.6s ease;
  gap: 0.5rem;
  height: 4rem;

  @media screen and (max-width: 550px) {
    gap: 0.5rem;
    margin: 1rem 0 1rem;
  }
`

export const QuestionTitle = styled.div`
  font-size: 1.2rem;
  display: flex;
  font-weight: 500;
  color: var(--font-grey);
  text-align: left;
  justify-content: center;

  p {
    margin: 0;
  }

  a {
    color: var(--font-grey);
    text-decoration: underline;
  }
  @media screen and (max-width: 550px) {
    font-size: 1.25rem;
    line-height: 1.5rem;
  }
`

export const ResponseContent = styled.div`
  @media screen and (max-width: 550px) {
    padding-left: 1.58rem;
    overflow-x: scroll;
  }
`

export const ResponseText = styled.p`
  transition: 0.5s ease;
  color: var(--font-grey);
  line-height: 1.75rem;
  width: fit-content;
  padding-left: 1.58rem;
  margin: 0;
  p {
    margin: 0;
  }

  ul,
  ol {
    padding-left: 1rem;
  }

  @media screen and (max-width: 550px) {
    padding-left: 0;

    ol {
      line-height: 1.7rem;
    }

    ul {
      padding-left: 1.25rem;
      line-height: 1.7rem;
      font-size: 1.2rem;
      line-height: 1.2rem;
      text-align: justify;
      display: flex;
      flex-direction: column;
      width: fit-content;
    }

    td,
    th {
      padding: 0.75rem 0.4rem;
    }
  }
`

export const Rotate = styled.div`
  transform: rotate(270deg);
  transition: ease-in-out 0.25s;
  vertical-align: middle;

  &.active {
    transform: rotate(360deg);
    transition: ease-in-out 0.3s;
    vertical-align: middle;
  }
`
