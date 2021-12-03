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
import { formatFileName } from '../../util/util'

const UploadedFileMessage = ({ fileName, previewURL }) => {
  return (
    <MessageWrapper>
      <FileInfoContainer>
        <CheckOutlined style={{ fontSize: '2rem' }} />
        <strong>{formatFileName(fileName)}</strong>
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

const renderDragMessage = (isDragReject, isDragActive, uploadedFile) => {
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

export const UploadFile = ({ handleUpload, uploadedFile }) => {
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
          {renderDragMessage(isDragReject, isDragActive, uploadedFile)}
        </DropContainer>
      )}
    </Dropzone>
  )
}
