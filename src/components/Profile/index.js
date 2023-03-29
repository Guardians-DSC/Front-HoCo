import React from 'react'
import PropTypes from 'prop-types'
import { UserOutlined } from '@ant-design/icons'
import eu from '../../assets/images/eu.jpeg'
import useUserContext from '../../contexts/user.context'
import { useAuth0 } from '@auth0/auth0-react'
import { LoginButton } from '../LoginButton'
import { LogoutButton } from '../LogoutButton'
import { UserContentWrapper, Name, Wrapper, Image, AvatarContainer } from './style'

export const Profile = ({ isretracted, width, displayName }) => {
  const { avatar } = useUserContext()
  const { user, isAuthenticated } = useAuth0()

  return isAuthenticated ? (
    <Wrapper isretracted={isretracted ? 1 : 0}>
      {avatar ? (
        <Image src={user.picture} width={width} />
      ) : (
        <AvatarContainer
          size="large"
          icon={<UserOutlined style={{ color: '#000', width: width }} />}
        />
      )}
      <UserContentWrapper>
        <Name>
          {displayName ? <span>{user.name}</span> : null}
        </Name>
        <LogoutButton />
      </UserContentWrapper>
    </Wrapper>
  ) : (
    <LoginButton />
  )
}

Profile.propTypes = {
  isretracted: PropTypes.bool,
  width: PropTypes.number,
  displayName: PropTypes.bool,
}

Profile.defaultProps = {
  image: eu,
  width: 56,
  displayName: true,
}
