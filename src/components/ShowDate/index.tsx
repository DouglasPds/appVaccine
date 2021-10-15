import React from 'react'

import {
  Container,
  Title,
  Content
} from './styles'

type ShowDateProps = {
	dateProps: {
		name: string,
		date: string
	}
}

export const ShowDate = ({ dateProps }: ShowDateProps) => {
  return (
		<Container>
			<Title>{dateProps.name}</Title>
			<Content>{dateProps.date}</Content>
		</Container>
  )
}
