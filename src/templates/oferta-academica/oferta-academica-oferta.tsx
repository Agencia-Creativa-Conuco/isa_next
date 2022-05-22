import React from 'react'
import styled from '@emotion/styled'
import StyledNavigation from 'components/styled-navigation'
import { client, MenuLocationEnum } from 'client'
import { container } from 'components/grid'

const OfertaAcademicaList = () => {
  const { useQuery } = client
  const { menuItems } = useQuery()

  const items = menuItems({
    first: 1000,
    where: { location: MenuLocationEnum.OFFER, parentId: null },
  })?.nodes

  return items?.length ? (
    <Section fluid id="section_1">
      <StyledNavigation items={items} />
    </Section>
  ) : null
}

export default OfertaAcademicaList

const Section = styled.section`
  ${container}
  padding: 0;
`
