import React from 'react'
import PropTypes from 'prop-types'

import { OrganizationCard } from './OrganizationCard'
import { Loading } from '../../assets/icons/Loading'
import usePagesContext from '../../contexts/app.context'
import { OrganizationsDiv, EmptyText, NoInfoContainer } from './style.js'

export function Organizations({ orgs }) {
  const { loading } = usePagesContext()

  return (
    <OrganizationsDiv>
      {orgs.length > 0 ? (
        orgs.map((org, index) => <OrganizationCard {...org} key={index} />)
      ) : (
        <NoInfoContainer>
          {loading ? (
            <>
              <EmptyText>Carregando dados das organizações...</EmptyText>
              <Loading animated />
            </>
          ) : (
            <EmptyText>
              Ainda não existem organizações cadastradas :) Mas vem aí
            </EmptyText>
          )}
        </NoInfoContainer>
      )}
    </OrganizationsDiv>
  )
}

Organizations.propTypes = {
  orgs: PropTypes.array,
}
