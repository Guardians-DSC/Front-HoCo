import React from 'react'

import PropTypes from 'prop-types'

import {
  OrganizationName,
  ShadowLayer,
  OrganizationImage,
  OrganizationUrl,
  OrganizationContainer,
} from './style.js'

export function OrganizationCard({ image, name, url }) {
  return (
    <OrganizationContainer>
      <OrganizationUrl
        href={url}
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
  url: PropTypes.string,
  image: PropTypes.element,
}
