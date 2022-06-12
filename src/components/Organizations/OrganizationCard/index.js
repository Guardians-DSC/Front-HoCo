import React from 'react'

import PropTypes from 'prop-types'

import {
  OrganizationName,
  ShadowLayer,
  OrganizationImage,
  OrganizationUrl,
  OrganizationContainer,
} from './style.js'

export function OrganizationCard({ image, name, org_url }) {
  return (
    <OrganizationContainer>
      <OrganizationUrl
        href={org_url}
        target="_blank"
        rel="noreferrer"
        alt="Imagem da organização"
      >
        <OrganizationImage src={image} />
        <OrganizationName>{name}</OrganizationName>
        <ShadowLayer />
      </OrganizationUrl>
    </OrganizationContainer>
  )
}

OrganizationCard.propTypes = {
  name: PropTypes.string,
  org_url: PropTypes.string,
  image: PropTypes.string,
}
