import React from 'react'
import styled from '@emotion/styled'
import StyledNavigation from 'components/styled-navigation'

const HomeOffer = ({ items }) => {
  return items.length ? (
    <Section id="section_2">
      <StyledNavigation items={items} />
    </Section>
  ) : null
}

export default HomeOffer

const Section = styled.section`
  background: white;
`
