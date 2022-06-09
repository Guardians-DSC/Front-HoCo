import { EditOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import React from 'react'
import useActivitiesContext from '../../contexts/activities.context'
import { ActivityModal } from '../ActivityModal'
import PropTypes from 'prop-types'

export const EditActivity = ({ data }) => {
  const { openActivityModal, isModalActive } = useActivitiesContext()

  return (
    <>
      <Space size="middle">
        <EditOutlined
          className="edit-icon"
          style={{ fontSize: '18px' }}
          onClick={openActivityModal}
        />
      </Space>
      {isModalActive ? <ActivityModal data={data} /> : <></>}
    </>
  )
}

EditActivity.propTypes = {
  data: PropTypes.any,
}
