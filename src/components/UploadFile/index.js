import React from 'react'
import PropTypes from 'prop-types'
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
  if (uploadedFile) {
    return (
      <UploadedFileMessage
        fileName={uploadedFile.titulo}
        previewURL={uploadedFile.previewURL}
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

UploadFile.propTypes = {
  handleUpload: PropTypes.func.isRequired,
  uploadedFile: PropTypes.PropTypes.shape({
    preview: PropTypes.string,
    name: PropTypes.string,
  }),
}

UploadedFileMessage.propTypes = {
  fileName: PropTypes.string.isRequired,
  previewURL: PropTypes.string.isRequired,
}
