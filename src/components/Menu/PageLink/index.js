import React from 'react'
import { Link } from 'react-router-dom'
import usePagesContext from '../../../contexts/app.context'
import { Wrapper, Icon, Text } from './style'
import PropTypes from 'prop-types'

export const PageLink = ({ page, isretracted, setisactive }) => {
  const { currentPathname } = usePagesContext()

  return (
    <Link to={page.path}>
      <Wrapper
        isretracted={isretracted ? 1 : 0}
        isactive={currentPathname === page.path ? 1 : 0}
        onClick={() => setisactive(false)}
      >
        <Icon isactive={currentPathname === page.path ? 1 : 0}>{page.icon}</Icon>
        <Text
          isactive={currentPathname === page.path ? 1 : 0}
          isretracted={isretracted ? 1 : 0}
        >
          {page.text}
        </Text>
      </Wrapper>
    </Link>
  )
}

PageLink.propTypes = {
  page: PropTypes.shape({
    path: PropTypes.string,
    icon: PropTypes.element,
    text: PropTypes.string,
  }).isRequired,
  currentPathname: PropTypes.string,
  isretracted: PropTypes.bool,
  setisactive: PropTypes.func,
}
