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
  const response = await api.post('/activity', form, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
  return response.data
}

export const editActivity = async (data) => {
  const form = new FormData()
  Object.keys(data).forEach((activity) => {
    form.append(activity, data[activity])
  })
  const response = await api.patch(`/activity`, form, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

  return response.data
}

export const getActivities = async (email) => {
  const response = await api.get(`/activities?e-mail=${email}`)
  console.log(response)
  return response.data
}

export const deleteActivity = async (activityID, email) => {
  const response = await api.delete(`/activity/${activityID}?e-mail=${email}`)
  console.log('removed', response)
  return response.data
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
