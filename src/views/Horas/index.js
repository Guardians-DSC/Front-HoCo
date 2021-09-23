import React from 'react'
import { ActivitiesBarChart } from '../../components/ActivitiesBarChart'
import { CreditsPieChart } from '../../components/CreditsPieChart'
import { ProgressBar } from '../../components/ProgressBar'

export const Horas = () => {
  return (
    <div>
      Horas
      <ProgressBar />
      <CreditsPieChart />
      <ActivitiesBarChart />
    </div>
  )
}
