import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Space, Popconfirm } from 'antd'
import { EditOutlined, DeleteOutlined, DownloadOutlined } from '@ant-design/icons'

import { Table, Tag } from './style'
import categories from '../../util/constants/categories'
import { deleteActivity } from '../../services/api'
import { ActivityModal } from '../ActivityModal'

export const ActivitiesTable = ({ data }) => {
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
      className: 'title',
      fixed: 'left',
      render: (text) => text,
    },
    {
      title: 'Horas',
      dataIndex: 'horas',
      key: 'horas',
      width: '250px',
      align: 'center',
      render: (hora) => (hora > 0 ? hora : '- - -'),
      sorter: (a, b) => a.horas - b.horas,
    },
    {
      title: 'Créditos',
      dataIndex: 'creditos',
      key: 'creditos',
      width: '250px',
      align: 'center',
      render: (credito) => (credito > 0 ? credito : '- - -'),
      sorter: (a, b) => a.creditos - b.creditos,
    },
    {
      title: 'Categoria',
      align: 'center',
      width: '300px',
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
      onFilter: (value, record) => record.categoria.indexOf(value) === 0,
    },
    {
      title: 'Baixar certificado',
      align: 'center',
      width: '150px',
      key: 'download',
      render: (record) => (
        <Space size="middle">
          <DownloadOutlined
            className="download-icon"
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
      width: '75px',
      render: (record) => {
        const [modalActive, setModalActive] = useState(false)

        return (
          <>
            <Space size="middle">
              <EditOutlined
                className="edit-icon"
                style={{ fontSize: '18px' }}
                onClick={() => setModalActive(true)}
              />
            </Space>
            {modalActive && (
              <ActivityModal setIsActive={setModalActive} data={record} />
            )}
          </>
        )
      },
    },
    {
      title: 'Apagar',
      align: 'center',
      width: '100px',
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
            <DeleteOutlined className="delete-icon" style={{ fontSize: '18px' }} />
          </Popconfirm>
        </Space>
      ),
    },
  ]

  const handleDownload = (record) => {
    console.log('baixando...', record)
  }

  const handleDelete = (record) => {
    deleteActivity(record.id)
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
      certificado: PropTypes.shape({
        titulo: PropTypes.string,
        previewURL: PropTypes.string,
      }),
    })
  ).isRequired,
}
