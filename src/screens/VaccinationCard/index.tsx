import React from 'react'
import { FlatList } from 'react-native'
import { ShowVaccineHistory } from '../../components/ShowVaccineHistory'

import * as HistoryVaccine from '../../json/VaccineHistory.json'

import { Container, Title } from './styles'

const { History } = HistoryVaccine

export const VaccinationCard: React.FC = () => {
  return (
		<Container>
			<Title>Histórico de vacinação</Title>
			<FlatList
				data={History}
				keyExtractor={item => item.id}
				renderItem={({ item }) => (
					<ShowVaccineHistory vaccineProps={item} />
				)}
			/>
		</Container>
  )
}
