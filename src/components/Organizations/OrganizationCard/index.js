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
    <OrganizationUrl>
      <OrganizationContainer
        href={url}
        target="_blank"
        rel="noreferrer"
        alt="Imagem da organização"
      >
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
