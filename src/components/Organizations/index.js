import React from 'react'
import PropTypes from 'prop-types'

import { OrganizationCard } from './OrganizationCard'
import { OrganizationsDiv } from './style.js'

export function Organizations({ orgs }) {
  return (
    <OrganizationsDiv>
      {orgs.map((org, index) => (
        <OrganizationCard {...org} key={index} />
      ))}
    </OrganizationsDiv>
  )
}

Organizations.propTypes = {
  orgs: PropTypes.array,
}
