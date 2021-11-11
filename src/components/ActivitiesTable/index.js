import React from 'react'
import PropTypes from 'prop-types'
import { Space, Popconfirm } from 'antd'
import { EditOutlined, DeleteOutlined, DownloadOutlined } from '@ant-design/icons'

import { Table, Tag } from './style'

export const ActivitiesTable = ({ data }) => {
  const columns = [
    {
      title: 'Título',
      dataIndex: 'title',
      key: 'title',
      width: 'fit-content',
      fixed: 'left',
      render: (text) => text,
    },
    {
      title: 'Horas',
      dataIndex: 'hours',
      key: 'hours',
      width: 'fit-content',
      align: 'center',
      render: (hora) => (hora ? hora : '- - -'),
    },
    {
      title: 'Créditos',
      dataIndex: 'credit',
      key: 'credit',
      width: 'fit-content',
      align: 'center',
      render: (credito) => (credito ? credito : '- - -'),
    },
    {
      title: 'Categoria',
      align: 'center',
      key: 'category',
      dataIndex: 'category',
      render: (tag) => {
        return (
          <Tag color="green" key={tag}>
            {tag.toUpperCase()}
          </Tag>
        )
      },
    },
    {
      title: 'Baixar certificado',
      align: 'center',
      key: 'download',
      render: (record) => (
        <Space size="middle">
          <DownloadOutlined
            style={{ fontSize: '18px' }}
            onClick={() => handleDownload(record)}
          />
        </Space>
      ),
    },
    {
      title: 'Editar',
      align: 'center',
      key: 'edit',
      render: (record) => (
        <Space size="middle">
          <EditOutlined
            style={{ fontSize: '18px' }}
            onClick={() => handleEdit(record)}
          />
        </Space>
      ),
    },
    {
      title: 'Apagar',
      align: 'center',
      key: 'delete',
      render: (record) => (
        <Space size="middle">
          <Popconfirm
            cancelText="Cancelar"
            okText="Apagar"
            overlayStyle={{ fontFamily: 'Roboto', maxWidth: '15rem' }}
            icon={<DeleteOutlined style={{ color: 'red', fontSize: '18px' }} />}
            title={<p>Tem certeza que você deseja deletar esse registro?</p>}
            onConfirm={() => handleDelete(record)}
          >
            <DeleteOutlined style={{ fontSize: '18px' }} />
          </Popconfirm>
        </Space>
      ),
    },
  ]

  const handleDownload = (record) => {
    console.log('baixando...', record)
  }

  const handleEdit = (record) => {
    console.log('editando...', record)
  }

  const handleDelete = (record) => {
    console.log('deletando...', record)
  }

  return (
    <Table
      columns={columns}
      pagination={{ pageSize: 5 }}
      scroll={{ x: 600 }}
      dataSource={data}
    ></Table>
  )
}

ActivitiesTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      title: PropTypes.string,
      credit: PropTypes.number,
      category: PropTypes.string,
    })
  ).isRequired,
}
