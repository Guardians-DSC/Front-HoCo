import React from 'react'
import { Wrapper, Image, AvatarContainer } from './style'
import PropTypes from 'prop-types'
import { UserOutlined } from '@ant-design/icons'
import eu from '../../assets/images/eu.jpeg'

export const Profile = ({ image, name, isRetracted, width }) => {
  return (
    <Wrapper isRetracted={isRetracted}>
      {image ? (
        <Image src={image} width={width} />
      ) : (
        <AvatarContainer
          size="large"
          icon={<UserOutlined style={{ color: '#000', width: width }} />}
        />
      )}
      <span>{name}</span>
    </Wrapper>
  )
}

Profile.propTypes = {
  image: PropTypes.image,
  name: PropTypes.string,
  isRetracted: PropTypes.bool,
  width: PropTypes.number,
}

Profile.defaultProps = {
  image: eu,
  width: 56,
}
