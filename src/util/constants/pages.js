import React from 'react'
import {
  ClockCircleOutlined,
  BookOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons'
import { Group } from '../../assets/icons/Group'

import { Horas } from '../../views/Horas'
import { Atividades } from '../../views/Atividades'
import { Orgs } from '../../views/Organizacoes'
import { Duvidas } from '../../views/Duvidas'
import { Perfil } from '../../views/Perfil'
import { Sobre } from '../../views/Sobre'
import { ShortLogo } from '../../assets/icons/ShortLogo'

export default [
  {
    name: 'sobre',
    text: 'O HoCo',
    icon: <ShortLogo />,
    path: '/sobre',
    component: Sobre,
    menu: true,
    loggedOutRender: true,
  },
  {
    name: 'horas',
    text: 'Minhas Horas',
    icon: <ClockCircleOutlined style={{ fontSize: `${21}px`, color: '#5E966A' }} />,
    path: '/horas',
    component: Horas,
    menu: true,
    loggedOutRender: false,
  },
  {
    name: 'atividades',
    text: 'Minhas Atividades',
    icon: <BookOutlined style={{ fontSize: `${21}px`, color: '#5E966A' }} />,
    path: '/atividades',
    component: Atividades,
    menu: 'true',
    loggedOutRender: false,
  },
  {
    name: 'orgs',
    text: 'Organizações',
    icon: <Group />,
    path: '/orgs',
    component: Orgs,
    menu: true,
    loggedOutRender: true,
  },
  {
    name: 'duvidas',
    text: 'Dúvidas',
    icon: (
      <QuestionCircleOutlined style={{ fontSize: `${21}px`, color: '#5E966A' }} />
    ),
    path: '/duvidas',
    component: Duvidas,
    menu: true,
    loggedOutRender: true,
  },
]
