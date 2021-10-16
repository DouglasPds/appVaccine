import React from 'react'

import {
  Container,
  Title,
  Content
} from './styles'

type ShowVaccineProps = {
	vaccineProps: {
		name: string,
		date: string,
		manufacturer: string,
		batch: number
	}
}

export const ShowVaccineHistory = ({ vaccineProps }: ShowVaccineProps) => {
  return (
		<Container>
			<Title>{vaccineProps.name}</Title>

			<Content>Data de aplicação: {vaccineProps.date}</Content>
			<Content>Fabricante: {vaccineProps.manufacturer}</Content>
			<Content>Lote: {vaccineProps.batch}</Content>
		</Container>
  )
}
