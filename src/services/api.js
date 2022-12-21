/* eslint-disable no-unused-vars */
import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})

export const downloadCertificate = async (activityId) => {
  const response = await api.get(`/activity/download/${activityId}`)
  return response
}

export const getUserData = async (email) => {
  const response = await api.get(`/user_data?email=${email}`)
  console.log(response)

  return response.data
}

export const registerActivity = async (activityData) => {
  const form = new FormData()
  Object.keys(activityData).forEach((activity) => {
    form.append(activity, activityData[activity])
  })
  console.log(form.keys())
  const response = await api.post('/activity', form, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  return response.data
}

export const editActivity = async (data) => {
  const response = await api.patch(`/activity`, data)
  console.log(response)
}

export const getActivities = async (email) => {
  const response = await api.get(`/activities?e-mail=${email}`)
  return response.data
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
