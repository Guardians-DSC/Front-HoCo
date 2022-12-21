import React from 'react'
import { EditOutlined } from '@ant-design/icons'
import { Space, Popconfirm } from 'antd'
import { DeleteOutlined, DownloadOutlined } from '@ant-design/icons'

import { Table, Tag } from './style'
import categories from '../../util/constants/categories'
import { deleteActivity, downloadCertificate } from '../../services/api'
import useActivitiesContext from '../../contexts/activities.context'

export const ActivitiesTable = () => {
  const { setCurrentActivityData, openActivityModal, userActivities } =
    useActivitiesContext()
  const formatFilterCategories = (categoryList) => {
    return categoryList.map((category) => ({
      text: category.text,
      value: category.text.toLowerCase(),
    }))
  }

  const columns = [
    {
      title: 'Título',
      dataIndex: 'title',
      key: 'title',
      className: 'title',
      fixed: 'left',
      render: (text) => text,
    },
    {
      title: 'Horas',
      dataIndex: 'time',
      key: 'time',
      width: '250px',
      align: 'center',
      render: (hora) => (hora > 0 ? hora : '- - -'),
      sorter: (a, b) => a.time - b.time,
    },
    {
      title: 'Créditos',
      dataIndex: 'credits',
      key: 'credits',
      width: '250px',
      align: 'center',
      render: (credito) => (credito > 0 ? credito : '- - -'),
      sorter: (a, b) => a.credits - b.credits,
    },
    {
      title: 'Categoria',
      align: 'center',
      width: '300px',
      key: 'category',
      dataIndex: 'category',
      render: (tag) => {
        return (
          <Tag color="green" key={tag}>
            {tag.toUpperCase()}
          </Tag>
        )
      },
      filters: formatFilterCategories(Object.values(categories)),
      onFilter: (value, record) => record.credits.indexOf(value) === 0,
    },
    {
      title: 'Baixar certificado',
      align: 'center',
      width: '150px',
      key: 'download',
      render: (record) => (
        <Space size="middle">
          <a
            href={`${process.env.REACT_APP_BASE_URL}/activity/download/${record._id}`}
            download
          >
            <DownloadOutlined
              className="download-icon"
              style={{ fontSize: '18px' }}
              onClick={() => handleDownload(record)}
            />
          </a>
        </Space>
      ),
    },
    {
      title: 'Editar',
      align: 'center',
      key: 'edit',
      width: '75px',
      render: (record) => (
        <Space size="middle">
          <EditOutlined
            className="edit-icon"
            style={{ fontSize: '18px' }}
            onClick={() => {
              openActivityModal()
              setCurrentActivityData(record)
            }}
          />
        </Space>
      ),
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

  const handleDownload = async (record) => {
    await downloadCertificate(record._id)
  }

  const handleDelete = (record) => {
    deleteActivity(record.id)
  }

  return (
    <Table
      columns={columns}
      pagination={{ pageSize: 7 }}
      scroll={{ x: 600 }}
      dataSource={userActivities.map((cell) => ({ ...cell, key: cell._id }))}
    />
  )
}
