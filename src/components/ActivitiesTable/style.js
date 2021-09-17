import styled from 'styled-components'
import { Table as TableAntd, Popconfirm } from 'antd'
import 'antd/lib/table/style/index.css'
import 'antd/lib/tag/style/index.css'
import 'antd/lib/spin/style/index.css'
import 'antd/lib/pagination/style/index.css'
import 'antd/lib/space/style/index.css'
import 'antd/lib/popover/style/index.css'
import 'antd/lib/button/style/index.css'

export const Table = styled(TableAntd)`
  /* tr > th, tr > td {
    background-color: #f5f5f5;
    border-bottom: 0.5px solid #BDBDBD;
    color: #000
  }
  
  tr > th {
    background-color: #343B45;
  }
  .ant-table-tbody > tr.ant-table-row:hover > td {
    background: #2B3138;
  } */
`

export const Confirm = styled(Popconfirm)`
  font-family: 'Roboto' sans-serif !important;
`
