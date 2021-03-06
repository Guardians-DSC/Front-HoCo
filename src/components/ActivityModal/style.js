import styled from 'styled-components'
import { Upload } from 'antd'
import { Form as FormDefault, Button, Text } from '../../styles/base-styles'

const { Dragger } = Upload

export const OutWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 20;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.15);
  overflow-y: scroll;
`

export const Wrapper = styled.div`
  padding: 1.75rem 2rem;
  width: 34rem;
  max-width: 34rem;
  z-index: 22;
  background-color: ${({ theme }) => theme['main-background']};
  border-radius: 10px;

  ${Text} {
    text-align: justify;
    word-spacing: -2px;
  }
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`
export const UploadFile = styled(Dragger)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  border: thin solid ${({ theme }) => theme['main-border']};

  width: 100%;
  height: 10rem;

  background-color: ${({ theme }) => theme['second-background']};
  color: ${({ theme }) => theme['main-font']};
  cursor: pointer;

  .ant-upload {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .ant-upload-span {
    display: flex;
    gap: 1rem;
    color: ${({ theme }) => theme['main-font']};
  }

  .ant-upload-drag-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .ant-upload-text-icon span {
    display: flex !important;
    color: red !important;
  }
`

export const Form = styled(FormDefault)`
  display: flex;
  justify-content: center;

  &.dgeeIi {
    gap: 0rem;
  }

  ${Button} {
    margin: 2rem auto 0;
  }
`

export const SameLineInfoWrapper = styled.div`
  display: flex;
  gap: 1rem;
`
