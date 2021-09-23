import React from 'react'

import { OrganizationCard } from './OrganizationCard'
import { OrganizationsDiv } from './style.js'

import { orgs } from '../../util/constants/organizations'

export function Organizations() {
  return (
    <OrganizationsDiv>
      {orgs.map((org, index) => (
        <OrganizationCard {...org} key={index} />
      ))}
    </OrganizationsDiv>
  )
}
