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
  tr > th,
  tr > td {
    border-bottom: 0.5px solid ${({ theme }) => theme['main-border']};
    color: ${({ theme }) => theme['main-font']};
  }

  tr > th {
    background-color: ${({ theme }) => theme['second-background']};
  }
  tr > td {
    background-color: ${({ theme }) => theme['main-background']};
  }

  .ant-table-tbody > tr.ant-table-row:hover > td {
    background: ${({ theme }) => theme['second-background']};
  }
`

export const Confirm = styled(Popconfirm)`
  font-family: 'Roboto' sans-serif !important;
`
