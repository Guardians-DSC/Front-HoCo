import React from 'react'
import PropTypes from 'prop-types'
import { Space, Tag, Popconfirm } from 'antd'
import { EditOutlined, DeleteOutlined, DownloadOutlined } from '@ant-design/icons'

import { Table } from './style'

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
      align: 'center',
      render: (hora) => (hora ? hora : '- - -'),
    },
    {
      title: 'Créditos',
      dataIndex: 'credit',
      key: 'credit',
      align: 'center',
      render: (credito) => (credito ? credito : '- - -'),
    },
    {
      title: 'Categoria',
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
      title: 'Ações',
      key: 'action',
      render: (record) => (
        <Space size="middle">
          <DownloadOutlined
            style={{ fontSize: '18px' }}
            onClick={() => handleDownload(record)}
          />
          <EditOutlined
            style={{ fontSize: '18px' }}
            onClick={() => handleEdit(record)}
          />
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
      pagination={{ pageSize: 8 }}
      scroll={{ x: 600 }}
      dataSource={data}
    ></Table>
  )
}

ActivitiesTable.propTypes = {
  data: PropTypes.shape([
    {
      key: PropTypes.string,
      title: PropTypes.string,
      credit: PropTypes.number,
      category: PropTypes.string,
    },
  ]).isRequired,
}
