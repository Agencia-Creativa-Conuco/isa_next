import React from 'react'
import styled from '@emotion/styled'
import { container, mq } from 'components/grid'
import Image from 'next/image'
import beneficios from '../../../public/images/centro-mipymes/beneficios.jpg'

const CentroMipymesBenefits = () => {
  const data = {
    title: 'BENEFICIOS QUE PODRÁN RECIBIR LAS MIPYMES',
    copy: `
      <ul>
      <li>Se les ayudará a identificar las necesidades de la empresa y aprovechar las oportunidades del mercado.</li>
      <li>Se analizarán las alternativas más viables para ayudar en la búsqueda de soluciones para los principales problemas que afectan a la organización.</li>
      <li>Se les brindará ayuda profesional en las áreas que lo requieran.</li>
      </ul>`,

    image: beneficios,
  }

  return (
    <Section fluid>
      <Image
        src={data.image}
        alt="CENTRO MIPYMES"
        width={1920}
        height={1080}
        objectFit="cover"
        placeholder="blur"
      />
      <Conatiner>
        <Content>
          <Title>{data.title}</Title>
          <Copy dangerouslySetInnerHTML={{ __html: data?.copy }} />
        </Content>
      </Conatiner>
    </Section>
  )
}

export default CentroMipymesBenefits

const Section = styled.section`
  ${container}
  display: grid;
  grid-template-columns: 100%;
  padding: 0;

  ${mq.md} {
    div:first-of-type {
      order: 2;
    }
    grid-template-columns: 1fr 1fr;
  }
`

const Media = styled.div`
  position: relative;
  font-size: 0;
`
const Conatiner = styled.div`
  position: relative;
  padding: 5rem 1.5rem;
  background-color: #0aa86e;
`

const Content = styled.div`
  margin: auto;
  max-width: 50rem;
`

const Title = styled.h3`
  color: white;
  font-weight: 900;
  padding-bottom: 2.5rem;
`

const Copy = styled.div``
