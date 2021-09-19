import React from 'react'
import { Wrapper, Image, AvatarContainer } from './style'
import PropTypes from 'prop-types'
import { UserOutlined } from '@ant-design/icons'
import eu from '../../assets/images/eu.jpeg'
import useUserContext from '../../contexts/user.context'

export const Profile = ({ isRetracted, width, displayName }) => {
  const { avatar, name } = useUserContext()

  return (
    <Wrapper isRetracted={isRetracted}>
      {avatar ? (
        <Image src={avatar} width={width} />
      ) : (
        <AvatarContainer
          size="large"
          icon={<UserOutlined style={{ color: '#000', width: width }} />}
        />
      )}

      {displayName ? <span>{name}</span> : null}
    </Wrapper>
  )
}

Profile.propTypes = {
  isRetracted: PropTypes.bool,
  width: PropTypes.number,
  displayName: PropTypes.bool,
}

Profile.defaultProps = {
  image: eu,
  width: 56,
  displayName: true,
}
