import React from 'react'
import { FlatList } from 'react-native'
import { ShowDate } from '../../components/ShowDate'

import * as Date from '../../json/DateValues.json'

import { Container, Title } from './styles'
const { Dates } = Date

export const DateVaccine: React.FC = () => {
  return (
		<Container>
			<Title>Datas de vacinação</Title>
			<FlatList
				data={Dates}
				keyExtractor={item => item.id}
				renderItem={({ item }) => (
					<ShowDate dateProps={item} />
				)}
			/>
		</Container>
  )
}
