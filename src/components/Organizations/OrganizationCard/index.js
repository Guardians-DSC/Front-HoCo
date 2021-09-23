import React from 'react'

import PropTypes from 'prop-types'

import {
  OrganizationContainer,
  OrganizationName,
  ShadowLayer,
  OrganizationImage,
  OrganizationUrl,
} from './style.js'

export function OrganizationCard({ image, name, url }) {
  return (
    <OrganizationUrl href={url} target="_blank" rel="noreferrer">
      <OrganizationContainer>
        <OrganizationImage src={image} />
        <OrganizationName>{name}</OrganizationName>
        <ShadowLayer />
      </OrganizationContainer>
    </OrganizationUrl>
  )
}

OrganizationCard.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.element,
}
