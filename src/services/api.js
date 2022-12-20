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

export const downloadCertificate = async (activityId) => {
  const response = await api.get(`/activity/download/${activityId}`)
  return response
}

export const getUserData = async (email) => {
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

export const getActivities = async (email) => {
  const response = await api.get(`/activities?e-mail=${email}`)
  return response.data
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
