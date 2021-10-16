import React from 'react'
import { FontAwesome, MaterialIcons, Fontisto } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { DateVaccine } from '../screens/DateVaccine'
import { VaccinationCard } from '../screens/VaccinationCard'
import { VaccinationCardPets } from '../screens/VaccinationCardPets'
import { Account } from '../screens/Account'

const { Navigator, Screen } = createBottomTabNavigator()

export const AppRoutes = () => {
  return (
		<Navigator>
			<Screen
				name="Vacinação"
				component={DateVaccine}
				options={{
				  tabBarIcon: ({ size }) => (
						<FontAwesome
							name="calendar"
							size={size}
						/>
				  )
				}}
			/>

			<Screen
				name="Histórico"
				component={VaccinationCard}
				options={{
				  tabBarIcon: ({ size }) => (
						<Fontisto
							name="injection-syringe"
							size={size}
						/>
				  )
				}}
			/>

			<Screen
				name="Histórico Pets"
				component={VaccinationCardPets}
				options={{
				  tabBarIcon: ({ size }) => (
						<MaterialIcons
							name="pets"
							size={size}
						/>
				  )
				}}
			/>

			<Screen
				name="Minha conta"
				component={Account}
				options={{
				  tabBarIcon: ({ size }) => (
						<MaterialIcons
							name="account-circle"
							size={size}
						/>
				  )
				}}
			/>
		</Navigator>
  )
}
