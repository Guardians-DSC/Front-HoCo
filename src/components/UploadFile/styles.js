import styled, { css } from 'styled-components'

const dragReject = css`
  border-color: #df3232;
  color: #df3232;
`

const dragActive = css`
  border-color: #00ce2d;
  color: #00ce2d;
`

export const DropContainer = styled.div`
  width: 100%;
  display: flex;
  height: 10rem;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  border: dashed 2px ${({ theme }) => theme['main-border']};

  margin-top: 0.75rem;
  cursor: pointer;

  color: ${({ theme }) => theme['third-font']};
  font-weight: 500;
  font-size: 1rem;
  padding: 0 1rem;
  text-align: center;

  ${(props) => props.isDragActive && dragActive};
  ${(props) => props.isDragReject && dragReject};
`

export const UploadMessage = styled.p``

export const MessageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;

  strong {
    font-size: 1.1rem;
  }

  a {
    position: absolute;
    bottom: 0.75rem;
    color: ${({ theme }) => theme['second-font']};
    text-decoration: underline;
  }

  a:hover {
    color: ${({ theme }) => theme['main-font']};
  }
`

export const FileInfoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  color: ${({ theme }) => theme['bright-green']};
`
