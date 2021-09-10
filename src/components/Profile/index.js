import React from 'react'
import { Wrapper, Image, AvatarContainer } from './style'
import PropTypes from 'prop-types'
import { UserOutlined } from '@ant-design/icons'
import eu from '../../assets/images/eu.jpeg'

export const Profile = ({ image, name, isRetracted }) => {
  return (
    <Wrapper isRetracted={isRetracted}>
      {image ? (
        <Image src={image} />
      ) : (
        <AvatarContainer
          size="large"
          icon={<UserOutlined style={{ color: '#000' }} />}
        />
      )}
      <span>{name}</span>
    </Wrapper>
  )
}

Profile.propTypes = {
  image: PropTypes.image,
  name: PropTypes.string.isRequired,
  isRetracted: PropTypes.bool,
}

Profile.defaultProps = {
  image: eu,
  name: 'Rodrigo Eloy',
}
