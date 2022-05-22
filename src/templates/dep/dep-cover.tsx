import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import colors from 'components/colors'
import { container, mq } from 'components/grid'
import cover from '../../../public/images/direccion-extension-y-proyectos/cover.jpg'

const DEPCover = () => {
  const title = 'Dirección Extensión y Proyectos',
    copy =
      'La Dirección de Extensión y Proyectos es una dependencia de la Vicerrectoría de Investigación, Extensión y Postgrado (VIEP), la misma ha sido como un instrumento para la difusión del conocimiento, la aplicación de la ciencia, el apoyo a los sectores productivos y empresariales, el mejoramiento de la competitividad, así como el intercambio cultural y deportivo, todo ello visto como fundamento para el desarrollo integral de la sociedad y el cumplimiento de la labor de la Universidad.'

  return (
    <Section fluid>
      <DecoLogo>
        <Logo
          src={cover ?? ''}
          alt="Dirección Extensión y Proyectos"
          width={1920}
          height={1536}
          objectFit="cover"
          objectPosition="100% 50%"
          priority
        />
        <DecoLogo2 />
      </DecoLogo>

      <Content>
        <DivTitle>
          <SectionTitle> {title}</SectionTitle>
          <Copy>{copy}</Copy>
        </DivTitle>
      </Content>
    </Section>
  )
}

export default DEPCover

const Section = styled.section`
  ${container}
  padding: 0;
  display: grid;
  grid-template-columns: 100%;

  ${mq.lg} {
    grid-template-columns: 55% 45%;
  }
`

const DivTitle = styled.div`
  max-width: 60rem;

  ${mq.lg} {
    margin: 0 auto;
  }
`

const SectionTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 3rem;
`

const Copy = styled.p``

const Logo = styled(Image)`
  clip-path: circle(85% at 20% 3%);
`
const Content = styled.div`
  margin: 4rem auto 2rem auto;
  padding: 0 1.5rem;
  max-width: 50rem;
  position: relative;
  align-self: center;

  ${mq.lg} {
    padding: 0 auto;
  }
`
const DecoLogo = styled.div`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    right: 23%;
    bottom: 0;
    background: ${colors.blue.base};
    width: 17%;
    padding-bottom: 35%;
    opacity: 0.4;
  }
  &::after {
    content: '';
    position: absolute;
    right: 7%;
    bottom: 0;
    background: ${colors.blue.base};
    width: 16%;
    padding-bottom: 12%;
  }
`

const DecoLogo2 = styled.div`
  &::before {
    content: '';
    position: absolute;
    right: 10%;
    bottom: 21%;
    background: ${colors.blue.dark};
    padding: 4.5%;
    clip-path: circle(50% at 50% 50%);
  }
`
