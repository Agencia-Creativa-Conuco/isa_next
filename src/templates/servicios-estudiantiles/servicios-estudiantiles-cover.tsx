import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import colors from 'components/colors'
import { container, mq } from 'components/grid'
import cover from '../../../public/images/servicios-estudiantiles/cover.jpg'

const ServiciosEstudiantilesCover = () => {
  const title = 'Decanato de Estudiantes',
    copy = `<p>El Decanato de Estudiantes es la instancia responsable de concebir e implementar estrategias institucionales dirigidas a viabilizar el desarrollo integral del estudiante durante su vida universitaria, sirviendo de enlace entre los/las estudiantes, los egresados y los distintos estamentos de la institución para la interacción y sana convivencia.</p>
       <p>El Decanato de Estudiantes va dirigido a toda la comunidad actual de estudiantes, así como a todos aquellos interesados en ingresar y a los egresados de las diferentes facultades académicas que componen la institución.</p>
      `

  return (
    <Section fluid>
      <Content>
        <SectionTitle> {title} </SectionTitle>
        <div dangerouslySetInnerHTML={{ __html: copy }} />
      </Content>
      <MediaWrapper>
        <Media>
          <Image
            src={cover}
            alt="Decanato de estudiantes"
            width={1920}
            height={1728}
            priority
            objectFit="cover"
            placeholder="blur"
          />
        </Media>
        <DecoContent />
      </MediaWrapper>
    </Section>
  )
}

export default ServiciosEstudiantilesCover

const Section = styled.section`
  ${container}
  padding: 0;
  align-items: center;
  display: grid;
  grid-template-columns: 100%;

  div:first-of-type {
    order: 2;
  }
  ${mq.md} {
    grid-template-columns: 50% 50%;

    div:last-of-type {
      order: 2;
    }
  }
`

const Content = styled.div`
  align-self: center;
  max-width: 60rem;
  align-self: center;
  padding: 0 1.5rem;
  margin: 5% auto;
`

const SectionTitle = styled.h1``

const Media = styled.div`
  z-index: 4;
  clip-path: ellipse(100% 100% at 100% 0%);
  display: grid;
`

const MediaWrapper = styled.div`
  position: relative;
  height: 100%;
  display: grid;
  &:before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 40%;
    padding-bottom: 20%;
    background: ${colors.blue.base};
  }
  &:after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 57.5%;
    padding-bottom: 20%;
    background: ${colors.blue.base};
    opacity: 0.2;
    z-index: -1;
  }
`
const DecoContent = styled.div`
  position: absolute;
  right: 57%;
  bottom: 18%;
  width: 21%;
  padding-bottom: 20%;
  background: ${colors.cta.base};
  z-index: -1;
  &:before {
    content: '';
    position: absolute;
    right: 100%;
    bottom: -40%;
    padding: 45%;
    clip-path: circle(50% at 100% 50%);
    background: ${colors.blue.dark};
  }
  &:after {
    content: '';
    position: absolute;
    left: -51%;
    top: -10%;
    padding: 16%;
    background: ${colors.blue.base};
    opacity: 0.3;
  }
`
