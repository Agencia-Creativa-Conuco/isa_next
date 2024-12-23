import React from 'react'
import styled from '@emotion/styled'
import OfferNavigation from 'components/styled-navigation'
import { client, MenuLocationEnum } from 'client'

const HomeOffer = () => {
  const { useQuery } = client
  const { menuItems } = useQuery()

  const itemsHome = menuItems({
    first: 1000,
    where: { location: MenuLocationEnum.HOME },
  })?.nodes
  const itemsOffer = menuItems({
    first: 1000,
    where: { location: MenuLocationEnum.OFFER },
  })?.nodes
  const items = itemsHome.concat(itemsOffer).filter((item) => {
    return item.datosMenu.visibleInicio
  })

  return (
    <Section id="section_2">
      <OfferNavigation items={items} />
    </Section>
  )
}

export default HomeOffer

const Section = styled.section`
  background: white;
`
