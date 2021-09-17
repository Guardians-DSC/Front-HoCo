import React from 'react'
import PropTypes from 'prop-types'
import { Space, Tag, Popconfirm } from 'antd'
import { EditOutlined, DeleteOutlined, DownloadOutlined } from '@ant-design/icons'

import { Table } from './style'

import { Link } from 'react-router-dom'

export const ActivitiesTable = ({ data }) => {
  const columns = [
    {
      title: 'Título',
      dataIndex: 'title',
      key: 'title',
      width: 'fit-content',
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
      render: (text, record) => (
        <Space size="middle">
          <Link
            to="http://www.africau.edu/images/default/sample.pdf"
            target="_blank"
            download
          >
            <DownloadOutlined
              style={{ fontSize: '18px' }}
              onClick={() => handleDownload(record)}
            />
          </Link>
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
    <Table columns={columns} pagination={{ pageSize: 8 }} dataSource={data}></Table>
  )
}

ActivitiesTable.propTypes = {
  data: PropTypes.shape([
    {
      key: PropTypes.string,
      titulo: PropTypes.string,
      horas: PropTypes.number,
      category: PropTypes.string,
    },
  ]),
}

ActivitiesTable.defaultProps = {
  data: [
    {
      key: '1',
      title: 'John Brown',
      credit: 14,
      category: 'evento',
    },
    {
      key: '2',
      title: 'Jim Green',
      hours: 20,
      category: 'projeto',
    },
    {
      key: '3',
      title: 'Joe Black',
      hours: 135,
      category: 'iniciacaoCientifica',
    },
    {
      key: '4',
      title: 'John Brown',
      credit: 8,
      category: 'evento',
    },
    {
      key: '5',
      title: 'Jim Green',
      credit: 18,
      category: 'caesi',
    },
    {
      key: '6',
      title: 'Joe Black',
      credit: 12,
      category: 'outros',
    },
  ],
}
