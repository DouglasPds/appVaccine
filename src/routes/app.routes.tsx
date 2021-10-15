import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { DateVacine } from '../screens/DateVacine'
import { HumanVacine } from '../screens/HumanVacine'

const { Navigator, Screen } = createBottomTabNavigator()

export const AppRoutes = () => {
  return (
		<Navigator>
			<Screen
				name="Vacinação"
				component={DateVacine}
			/>

			<Screen
				name="Histórico"
				component={HumanVacine}
			/>
		</Navigator>
  )
}
