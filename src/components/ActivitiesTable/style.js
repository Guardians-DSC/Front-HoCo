import styled from 'styled-components'
import { Table as TableAntd, Popconfirm } from 'antd'
import 'antd/lib/table/style/index.css'
import 'antd/lib/tag/style/index.css'
import 'antd/lib/spin/style/index.css'
import 'antd/lib/pagination/style/index.css'
import 'antd/lib/space/style/index.css'
import 'antd/lib/popover/style/index.css'
import 'antd/lib/button/style/index.css'
import { Tag as TagAntd } from 'antd'

export const Table = styled(TableAntd)`
  tr > th,
  tr > td {
    border-bottom: 0.5px solid ${({ theme }) => theme['second-border']};
    color: ${({ theme }) => theme['main-font']};
  }

  tr > th {
    background-color: ${({ theme }) => theme['second-background']};
  }
  tr > td {
    background-color: ${({ theme }) => theme['main-background']};
  }

  .ant-form-item-label {
    text-align: left;
  }

  .ant-table-tbody > tr.ant-table-row:hover > td {
    background: ${({ theme }) => theme['second-background']};
  }
  .ant-dropdown-trigger {
    color: ${({ theme }) => theme['second-font']};
  }
  .ant-table-filter-trigger,
  .ant-dropdown-open {
    color: ${({ theme }) => theme['main-font']};
  }

  li,
  li a {
    background-color: ${({ theme }) => theme['main-background']} !important;
    color: ${({ theme }) => theme['main-font']};
  }

  li:hover,
  li:hover a,
  button:hover {
    border-color: ${({ theme }) => theme['third-green']};
    color: ${({ theme }) => theme['third-green']} !important;
  }

  .ant-pagination-item-active {
    border-color: ${({ theme }) => theme['third-green']};
  }

  .ant-pagination-item-active a {
    color: ${({ theme }) => theme['third-green']};
  }

  .ant-pagination-item-link,
  .ant-pagination-item-link:hover,
  .ant-table-column-has-sorters {
    background-color: ${({ theme }) => theme['second-background']} !important;
    color: ${({ theme }) => theme['main-font']};
  }

  .ant-pagination-item-link:hover {
    border-color: ${({ theme }) => theme['third-green']};
    color: ${({ theme }) => theme['third-green']};
  }

  .ant-table-placeholder:hover > td {
    background-color: ${({ theme }) => theme['main-background']} !important;
  }

  .ant-empty-img-simple * {
    fill: ${({ theme }) => theme['main-background']} !important;
  }

  .ant-empty-description {
    color: ${({ theme }) => theme['main-font']};
  }

  .ant-btn-primary {
    background: ${({ theme }) => theme['second-green']} !important;
  }

  .download-icon,
  .delete-icon,
  .edit-icon {
    transition: 0.2s;
  }

  .download-icon:hover,
  .delete-icon:hover,
  .edit-icon:hover {
    opacity: 0.4;
  }

  tr > th,
  tr > td {
    width: 9rem;
  }
  .title {
    min-width: 200px;
  }
`

export const Confirm = styled(Popconfirm)`
  font-family: 'Roboto' sans-serif !important;
`

export const Tag = styled(TagAntd)`
  background-color: ${({ theme }) => theme['main-background']} !important;
  border-color: ${({ theme }) => theme['main-font']} !important;
  color: ${({ theme }) => theme['main-font']} !important;

  &:hover {
    background-color: ${({ theme }) => theme['main-font']} !important;
    color: ${({ theme }) => theme['main-background']} !important;
    cursor: default;
  }
`
