import React from 'react'
import { Link } from 'react-router-dom'
import usePagesContext from '../../../contexts/app.context'
import { Wrapper, Icon, Text } from "./style"
import PropTypes from 'prop-types'

export const PageLink = ({ page, isRetracted }) => {
  const { currentPathname } = usePagesContext()

  return (
    <Link to={page.path}>
      <Wrapper isRetracted={isRetracted} isActive={currentPathname === page.path}>
        <Icon isActive={currentPathname === page.path}>{page.icon}</Icon>
        <Text
          isActive={currentPathname === page.path}
          isRetracted={isRetracted}
        >
          {page.text}
        </Text>
      </Wrapper>
    </Link>
  )
}

PageLink.propTypes = {
  page: PropTypes.object.isRequired,
  currentPathname: PropTypes.string,
  isRetracted: PropTypes.bool
}