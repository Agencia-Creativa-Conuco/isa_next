import React from 'react'
import styled from '@emotion/styled'
import { container, mq } from 'components/grid'
import FeaturedMedia from 'next/image'
import logo from '../../../public/images/centro-mipymes/logo.png'

const CentroMipymesEconomic = () => {
  const data = {
    title: 'IMPACTO ECONÓMICO',
    copy: `
      <ul>
      <li>Acceso al financiamiento</li>
      <li>Incremento en ventas</li>
      <li>Empleos creados</li>
      <li>Empleos retenidos</li>
      </ul`,

    image: logo,
  }

  return (
    <Section>
      {/* <Conatiner> */}

      <Content>
        <Title>{data.title}</Title>
        <Copy dangerouslySetInnerHTML={{ __html: data.copy }} />
      </Content>

      <Image>
        <FeaturedMedia
          src={data.image}
          alt="CENTRO MIPYMES"
          placeholder="blur"
        />
      </Image>
      {/* </Conatiner> */}
    </Section>
  )
}

export default CentroMipymesEconomic

const Section = styled.section`
  ${container}
  display: grid;
  grid-template-columns: 100%;
  margin-bottom: 5.5rem;
  margin-top: 5.5rem;
  ${mq.md} {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;
  }
`

const Image = styled.div`
  position: relative;
  width: 33rem;
`

const Content = styled.div`
  max-width: 50rem;
`

const Title = styled.h2`
  padding-bottom: 2.5rem;
`

const Copy = styled.div``
