import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { DateVaccine } from '../screens/DateVaccine'
import { VaccinationCard } from '../screens/VaccinationCard'

const { Navigator, Screen } = createBottomTabNavigator()

export const AppRoutes = () => {
  return (
		<Navigator>
			<Screen
				name="Vacinação"
				component={DateVaccine}
			/>

			<Screen
				name="Histórico"
				component={VaccinationCard}
			/>
		</Navigator>
  )
}
