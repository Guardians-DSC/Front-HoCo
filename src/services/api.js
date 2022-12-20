/* eslint-disable no-unused-vars */
import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})

export const getCredits = async () => {
  // const response = await api.get('/creditos')
  // console.log(response)
  return {
    creditos: 11,
    maximo: 22,
  }
  // return response.data
}

export const getCreditsPerCategory = async (email) => {
  const response = await api.get(`/user_data?email=${email}`)
  console.log(response)

  return response.data
}

export const getRankCategories = async () => {
  // const response = await api.get('/categorias/top')
  return [
    {
      categoria: 'Projeto',
      porcentagem: 0.45,
    },
    {
      categoria: 'Evento',
      porcentagem: 0.2,
    },
    {
      categoria: 'Monitoria',
      porcentagem: 0.1,
    },
    {
      categoria: 'Caesi',
      porcentagem: 0.2,
    },
  ]

  // return response.data
}

export const registerActivity = async (activityData) => {
  const response = await api.post('/atividade', { activityData })
  console.log('Dados enviados:', activityData)
  return response.data
}

export const getActivities = async () => {
  // const response = await api.get('/atividades')
  return [
    {
      id: 129087124908,
      titulo: 'Projeto ePol',
      horas: 0,
      creditos: 12,
      categoria: 'projeto',
      certificado: {
        titulo: 'meu_certificado.jpeg',
        previewURL: 'https://giphy.com/embed/6ZorD2fyy1nj8GqunP',
      },
    },
    {
      id: 129087124901,
      titulo: 'CodeSQ',
      horas: 0,
      creditos: 12,
      categoria: 'projeto',
      certificado: {
        titulo: 'meu_certificado.jpeg',
        previewURL: 'https://giphy.com/embed/6ZorD2fyy1nj8GqunP',
      },
    },
    {
      id: 13231321312312,
      titulo: 'Andromedevi',
      horas: 135,
      creditos: 1,
      categoria: 'evento',
      certificado: {
        titulo: 'meu_certificado.jpeg',
        previewURL: 'https://giphy.com/embed/6ZorD2fyy1nj8GqunP',
      },
    },
    {
      id: 132313123312,
      titulo: 'Hacktoberfest',
      horas: 20,
      creditos: 0,
      categoria: 'evento',
      certificado: {
        titulo: 'meu_certificado.jpeg',
        previewURL: 'https://giphy.com/embed/6ZorD2fyy1nj8GqunP',
      },
    },
    {
      id: 13231321312318,
      titulo: 'Projeto ePoli',
      horas: 0,
      creditos: 12,
      categoria: 'caesi',
      certificado: {
        titulo: 'meu_certificado.jpeg',
        previewURL: 'https://giphy.com/embed/6ZorD2fyy1nj8GqunP',
      },
    },
    {
      id: 13231321312310,
      titulo: 'Andromedev',
      horas: 135,
      creditos: 0,
      categoria: 'inic. cientifica',
      certificado: {
        titulo: 'meu_certificado.jpeg',
        previewURL: 'https://giphy.com/embed/6ZorD2fyy1nj8GqunP',
      },
    },
    {
      id: 23231321312312,
      titulo: 'semana acadêmica',
      horas: 10,
      creditos: 0,
      categoria: 'evento',
      certificado: {
        titulo: 'meu_certificado.jpeg',
        previewURL: 'https://giphy.com/embed/6ZorD2fyy1nj8GqunP',
      },
    },
  ]

  // return response.data
}

export const editActivity = async (activityID, data) => {
  const response = await api.patch(`/atividade?id=${activityID}`, data)
  console.log(response)
}

export const deleteActivity = async (activityID, data) => {
  const response = await api.delete(`/atividade?id=${activityID}`)
  console.log(response)
}

export const getOrgs = async () => {
  try {
    const response = await api.get('/orgs')
    return response.data
  } catch (e) {
    console.log(e)
    return null
  }
}
