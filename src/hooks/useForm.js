import { useState } from 'react'

export const useForm = (defaultState) => {
  const [formState, setFormState] = useState(defaultState)

  const handleFormChange = (name) => (e) => {
    const value = e?.target?.value ?? e
    setFormState({ ...formState, [name]: value ?? formState[name] })
  }

  const resetState = () => {
    setFormState(defaultState)
  }

  return [
    { defaultState, formState },
    { handleFormChange, setFormState, resetState },
  ]
}
