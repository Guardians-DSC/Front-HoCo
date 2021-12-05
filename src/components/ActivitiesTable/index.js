import React from 'react'
import PropTypes from 'prop-types'
import { Space, Popconfirm } from 'antd'
import { EditOutlined, DeleteOutlined, DownloadOutlined } from '@ant-design/icons'

import { Table, Tag } from './style'
import categories from '../../util/constants/categories'

export const ActivitiesTable = ({ data, setIsActive }) => {
  const formatFilterCategories = (categoryList) => {
    return categoryList.map((category) => ({
      text: category.text,
      value: category.text.toLowerCase(),
    }))
  }

  const columns = [
    {
      title: 'Título',
      dataIndex: 'titulo',
      key: 'titulo',
      width: 'fit-content',
      fixed: 'left',
      render: (text) => text,
    },
    {
      title: 'Horas',
      dataIndex: 'horas',
      key: 'horas',
      width: 'fit-content',
      align: 'center',
      render: (hora) => (hora > 0 ? hora : '- - -'),
      sorter: (a, b) => a.hours - b.hours,
    },
    {
      title: 'Créditos',
      dataIndex: 'creditos',
      key: 'creditos',
      width: 'fit-content',
      align: 'center',
      render: (credito) => (credito > 0 ? credito : '- - -'),
      sorter: (a, b) => a.credit - b.credit,
    },
    {
      title: 'Categoria',
      align: 'center',
      key: 'categoria',
      dataIndex: 'categoria',
      render: (tag) => {
        return (
          <Tag color="green" key={tag}>
            {tag.toUpperCase()}
          </Tag>
        )
      },
      filters: formatFilterCategories(Object.values(categories)),
      onFilter: (value, record) => record.category.indexOf(value) === 0,
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
    setIsActive(true)
    console.log('editando...', record)
  }

  const handleDelete = (record) => {
    console.log('deletando...', record)
  }

  return (
    <Table
      columns={columns}
      pagination={{ pageSize: 7 }}
      scroll={{ x: 600 }}
      dataSource={data.map((cell) => ({ ...cell, key: cell.id }))}
    />
  )
}

ActivitiesTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      titulo: PropTypes.string,
      creditos: PropTypes.number,
      horas: PropTypes.number,
      categoria: PropTypes.string,
    })
  ).isRequired,
  setIsActive: PropTypes.func.isRequired,
}
