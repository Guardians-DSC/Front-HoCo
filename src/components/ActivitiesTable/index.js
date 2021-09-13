import React from "react"
import { Space, Tag, Popconfirm } from 'antd'
import "antd/dist/antd.css"
import { EditOutlined, DeleteOutlined, DownloadOutlined } from '@ant-design/icons';

import { Table } from './style'

import pdf from '../../assets/files/arquivo.pdf'
import { Link } from "react-router-dom"

export const ActivitiesTable = ({ data }) => {
  const columns = [
    {
      title: 'Título',
      dataIndex: 'titulo',
      key: 'titulo',
      width: 'fit-content',
      render: (text) => (text)
    },
    {
      title: 'Horas',
      dataIndex: 'horas',
      key: 'horas',
      align: 'center',
      width: 'fit-content',

      render: hora => (hora ? hora : '- - -')
    },
    {
      title: 'Crédito',
      dataIndex: 'credito',
      key: 'credito',
      align: 'center',
      render: credito => (credito ? credito : '- - -')
    },
    {
      title: 'Categoria',
      key: 'categoria',
      dataIndex: 'categoria',
      render: tag => (<Tag color='green' key={tag}>
                      {tag.toUpperCase()}
                    </Tag>),
    },
    {
      title: 'Ações',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Link to='http://www.africau.edu/images/default/sample.pdf' target="_blank" download>
            <DownloadOutlined style={{ fontSize: '18px'}} onClick={() => handleDownload(record)}/>
          </Link>
          <EditOutlined style={{ fontSize: '18px'}} onClick={() => handleEdit(record)}/>
          <Popconfirm 
            cancelText='Cancelar'
            okText='Apagar'
            overlayStyle={{ fontFamily: 'Roboto', maxWidth: '15rem' }}
            icon={<DeleteOutlined style={{ color: 'red', fontSize: '18px' }}/>}
            title={<p >Tem certeza que você deseja deletar esse registro?</p>}
            onConfirm={() => handleDelete(record)}
          >
            <DeleteOutlined style={{ fontSize: '18px'}}/>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const handleDownload = (record) => {
    console.log('baixando...')
  }

  const handleEdit = (record) => {
    console.log('editando...')
  }

  const handleDelete = (record) => {
    console.log('deletando...')
  }

  return (
    <Table columns={columns} dataSource={data} ></Table>
  )
}


ActivitiesTable.defaultProps = {
  data: [
    {
      key: '1',
      titulo: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      categoria: 'nice',
      certificate: pdf,
    },
    {
      key: '2',
      titulo: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      categoria: 'loser',
      certificate: pdf,
    },
    {
      key: '3',
      titulo: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      categoria: 'cool',
      certificate: pdf,
    },
  ]
}