/* eslint-disable react/prop-types */
import React from 'react'
import {
  DropContainer,
  UploadMessage,
  MessageWrapper,
  FileInfoContainer,
} from './styles'
import Dropzone from 'react-dropzone'
import { CheckOutlined } from '@ant-design/icons'

const UploadedFileMessage = ({ fileName, previewURL }) => {
  const formatFileName = () => {
    const charLimit = 30
    const stringList = fileName.split('.')

    if (stringList[0].length > charLimit) {
      return stringList[0].slice(0, charLimit) + '...' + stringList.at(-1)
    }

    return fileName
  }

  return (
    <MessageWrapper>
      <FileInfoContainer>
        <CheckOutlined style={{ fontSize: '2rem' }} />
        <strong>{formatFileName()}</strong>
      </FileInfoContainer>
      <a
        href={previewURL}
        target="_blank"
        rel="noreferrer"
        onClick={(e) => e.stopPropagation()}
      >
        Ver preview
      </a>
    </MessageWrapper>
  )
}

export const UploadFile = ({ handleUpload, uploadedFile }) => {
  const renderDragMessage = (isDragReject, isDragActive) => {
    if (uploadedFile.file) {
      return (
        <UploadedFileMessage
          fileName={uploadedFile.name}
          previewURL={uploadedFile.preview}
        />
      )
    }

    if (!isDragActive) {
      return (
        <UploadMessage>
          Clique ou arraste o arquivo do seu certificado para fazer o upload
        </UploadMessage>
      )
    }

    if (isDragReject) {
      return (
        <UploadMessage>
          Formato de arquivo invalido ou número muito grande de arquivos
        </UploadMessage>
      )
    }

    return <UploadMessage>Solte os arquivos aqui</UploadMessage>
  }

  return (
    <Dropzone
      accept="image/jpeg, image/png, image/jpg, application/pdf"
      multiple={false}
      onDropAccepted={handleUpload}
    >
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <DropContainer
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}
        >
          <input {...getInputProps()} />
          {renderDragMessage(isDragReject, isDragActive)}
        </DropContainer>
      )}
    </Dropzone>
  )
}
