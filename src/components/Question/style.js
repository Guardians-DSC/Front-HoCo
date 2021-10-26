import styled from 'styled-components'

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;

  .task-list-item {
    list-style-type: none;
  }
  .contains-task-list {
    padding-left: 0;
  }

  img {
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 12px;
  }

  blockquote {
    border-left: 4px solid #8b949e;
    margin: 0 12px;
    padding-left: 16px;
    line-height: 26px;
  }

  table {
    border-radius: 3px;
    display: block;
    width: fit-content;

    td,
    th {
      border: 1px solid #555;
      text-align: left;
      vertical-align: middle;
      padding: 8px 13px;
      margin: 0;
      line-height: 26px;
      overflow-x: auto;
    }
  }
`
export const QuestionContent = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  transition: 0.6s ease;
  gap: 0.8rem;
  vertical-align: middle;
  align-items: center;
  padding-bottom: 22px;

  @media screen and (max-width: 550px) {
    gap: 0.5rem;
  }
`
export const Dropdown = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  svg {
    height: 16px;
    vertical-align: middle;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 550px) {
    padding: 0;
  }
`

export const QuestionTitle = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: var(--font-grey);
  text-align: left;
  line-height: 28px;

  a {
    color: var(--font-grey);
    text-decoration: underline;
  }
  @media screen and (max-width: 550px) {
    font-size: 20px;
    line-height: 24px;
  }
`

export const ResponseContent = styled.div`
  padding-left: 14px;
  padding-bottom: 22px;

  ol,
  ul {
    padding-left: 48px;
  }

  @media screen and (max-width: 550px) {
    padding-left: 0;
    overflow-x: scroll;

    ol {
      padding-left: 36px;
      line-height: 26px;
    }

    ul {
      padding-left: 40px;
      line-height: 26px;
    }
  }
`

export const ResponseText = styled.div`
  transition: 0.5s ease;
  color: var(--font-grey);
  font-size: 18px;
  line-height: 28px;
  width: fit-content;

  @media screen and (max-width: 550px) {
    font-size: 1.2rem;
    line-height: 18px;

    text-align: justify;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;

    td,
    th {
      padding: 12px 6px;
    }
  }
`

export const Rotate = styled.div`
  transform: rotate(270deg);
  transition: ease-in-out 0.4s;
  vertical-align: middle;
`

export const RotateActive = styled.div`
  transform: rotate(360deg);
  vertical-align: middle;
`
