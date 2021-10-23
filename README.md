# :clock3: O HoCo

## :grey_question: O que é o HoCo

<p align=center>
  <img width=350 src='https://user-images.githubusercontent.com/42751604/130678288-4c854469-6d06-4c23-ba23-c89b1fa7cde0.png'/>
</p>
<br/>

<div align='center'>
  <p>
  Olá! Bem-vinde ao HoCo. O HoCo é uma plataforma que conta com o objetivo inicial de  prover aos alunos da graduação de Ciência da Computação na UFCG <b> uma maneira simples e facilitada de gerenciar suas horas complementares obrigatórias para a conclusão do curso.</b>.
  </p>
</div>

## :dart: Objetivo

O pouco conhecimento sobre como adquirir e gerenciar horas e atividades complementares durante a graduação é um fato conhecido de longa data pelos alunos da graduação em Ciência da Computação na UFCG. Pensando nisso, nasce o _HoCo_.

**O projeto tem como objetivo sanar a deficiência de gerenciamento das horas complementares do curso, provendo uma ferramenta onde os graduandos gerenciem as horas complementares, tendo o conhecimento do funcionamento, normas atuais do curso, e assim melhorando a gestão do seu tempo de atividades extracurriculares ao longo da faculdade.**

---

## :clipboard: Índice

- [O que é o HoCo](#grey_question-o-que-é-o-hoco)
- [Objetivo](#dart-objetivo)
- [Índice](#clipboard-índice)
- [Pré-requisitos](#gear-pré-requisitos)
- [Como executar o projeto](#running-como-executar-o-projeto)
- [Como contribuir](#handshake-como-contribuir)
- [Mantenedores](#pushpin-mantenedores)
- [Licença e Copyright](#pencil2-licença-e-copyright)

## :gear: Pré-requisitos

Para executar o projeto é necessário ter instalado na sua máquina o [`docker`](https://docs.docker.com/get-docker/), o ambiente de implementação do projeto,  e o [`docker-compose`](https://docs.docker.com/compose/install/), a ferramenta de auxílio no gerenciamento do ambiente de docker. Para auxílio, abaixo estão listados alguns links úteis para a instalação dessas dependências:

- [Tutorial de instalação do docker](https://www.hostinger.com.br/tutoriais/install-docker-ubuntu)
- [Tutorial de instalação do docker compose](https://docs.docker.com/compose/install/)

## :running: Como executar o projeto

⚠️ **ATENÇÃO:** É necessário se atentar ao fato que este projeto é o front-end do  [Projeto HoCo](https://github.com/Guardians-DSC/HoCo). Assim, caso você necessite da execução completa, é necessário executar o back-end do projeto.
O <b> passo-a-passo </b> a seguir, se limita a execução do front-end do projeto,abrangendo apenas as funcionalidades implementadas que não possuem a necessidade da execução do back-end.


**Siga os seguintes passos para a execução do projeto:**

1. Faça o _clone_ do projeto e seus submódulos: front-end e back-end:

```bash
  git clone https://github.com/Guardians-DSC/Front-HoCo
```

2. Entre na pasta do projeto:

```bash
  cd Front-HoCo
```

3. Execute o build do projeto com o comando:

```bash
  docker build . --tag='front-hoco'
```

4. Por fim, execute o comando de ativação do container:

```bash
  docker run -p 3000:3000 front-hoco
```

Pronto! Com esses comandos simples você já conseguirá executar localmente o projeto. No caso de modificação do código-fonte, o projeto irá atualizar automaticamente.

## :handshake: Como contribuir

Caso esteja interessade(o/a) em contribuir com algum dos projetos do HoCom, verifique as [**issues**](https://github.com/Guardians-DSC/Front-HoCo/issues) de cada projeto. Caso encontre uma issue interessante e deseje contribuir, primeiramente leia os documentos do **[Código de conduta](https://github.com/Guardians-DSC/Front-HoCo/blob/main/CODE_OF_CONDUCT.md)** e **[Contribuindo](https://github.com/Guardians-DSC/Front-HoCo/blob/main/CONTRIBUTING.md)** para saber mais detalhes.

⚠️ O projeto ainda se encontra em desenvolvimento, caso você queira acompanhar o avanço do repositório dê um estrelinha ⭐ para não perder as atualizações do repo.

## :pushpin: Mantenedores

- [Franciclaudio Dantas](https://github.com/claudiodantas)
- [Gustavo Farias](https://github.com/GusttaFS)
- [Leandra Oliveira](https://github.com/LeandraOS)
- [Rodrigo Eloy](https://github.com/RodrigoEC)

## :pencil2: Licença e Copyright

MIT © [Licença](https://github.com/Guardians-DSC/Front-HoCo/blob/main/LICENSE)

<br/>
<div align=center>
  <p><i>No mais é isso! Obrigado por ler até aqui, esperamos que tenha gostado do projeto!</i></p>
  <img width=400 src='https://user-images.githubusercontent.com/42751604/125959482-99171781-d212-4bc2-af3c-1d0adcf813dd.gif'/>
</div>
