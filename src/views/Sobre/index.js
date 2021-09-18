import React from 'react'

import { Contributors } from '../../components/Contributors'
import { ShortLogo } from '../../assets/icons/ShortLogo'

import { Page, Content, Title, Subtitle } from '../common'

export const Sobre = () => {
  return (
    <Page>
      <Content>
        <Title>
          <ShortLogo width={'3rem'} color={'#514E4E'} />
          <h1>Sobre o HoCo</h1>
        </Title>
        <p>
          Olá! o Hoco é uma plataforma idealizada por alunos da graduação com o
          objetivo de ajudar os alunos da graduação de ciência da computação da
          Universidade Federal de Campina Grande (UFCG) a gerenciarem as suas
          atividades complementares.
        </p>
        <p>
          A ideia do HoCo é proporcionar uma plataforma unificada onde é possível
          <span>
            armazenar, visualizar o progresso das suas horas complementares, tirar
            dúvidas acerca do tema
          </span>
          e também <span>ficar atento quanto às atividades extra-curriculares</span>
          que o curso oferece.
        </p>
        <Subtitle>O que preciso ter e fazer para contribuir?</Subtitle>
        <p>Você pode contribuir de diversas formas!</p>
        <p>
          Caso você queira contribuir através de código você pode acessar os{' '}
          <a
            href="https://github.com/Guardians-DSC/HoCo"
            target="_blank"
            rel="noreferrer"
          >
            repositórios do HoCo no gitHub
          </a>
          , ver quais as issues que estão cadastradas nos repositórios, e ler os
          documentos de código de conduta e contribuição para entender como você pode
          ajudar na melhoria da plataforma.
        </p>
        <p>
          Se você tiver alguma ideia de funcionalidade para o HoCo você pode
          participar das nossas reuniões abertas no discord do curso, onde nós
          discutimos o nosso progresso e futuro do projeto.
        </p>
        <Subtitle>Pessoas que contribuiram na elaboração do projeto</Subtitle>
        <Contributors />
      </Content>
    </Page>
  )
}
