import React from 'react'
import styled from '@emotion/styled'
import StyledNavigation from 'components/styled-navigation'
import { client, MenuLocationEnum } from 'client'
import { container } from 'components/grid'

const OfertaAcademicaList = (props) => {
  const { useQuery } = client
  const { menuItems } = useQuery()

  const items = menuItems({
    first: 1000,
    where: { location: MenuLocationEnum.OFFER },
  })?.nodes

  return items?.length ? (
    <Section fluid {...props}>
      <StyledNavigation items={items} />
    </Section>
  ) : null
}

export default OfertaAcademicaList

const Section = styled.section`
  ${container}
  padding: 0;
`
