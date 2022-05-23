import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import colors from 'components/colors'
// import Cta from "../../../components/cta";
import { container, mq } from 'components/grid'
import bienestar_estudiantil from '../../../public/images/servicios-estudiantiles/bienestar_estudiantil.jpg'

const ServiciosEstudiantilesBienestar = (props) => {
  const title = 'Bienestar Estudiantil',
    content = `
            <p>Implementa estrategias para garantizar el bienestar y facilitar el desarrollo integral de los/las estudiantes. Este departamento, a su vez, está estructurado por diferentes unidades: Orientación e Inclusión Estudiantil, Arte, Cultura y Valores, Articulación Estudiante entorno, conformado por comités estudiantiles. </p>
        `,
    image = bienestar_estudiantil

  return (
    <Section fluid {...props}>
      <Media>
        <Image
          src={image}
          alt="Bienestar Estudiantil"
          width={1920}
          height={1080}
          objectFit="cover"
          placeholder="blur"
        />
      </Media>
      <Content>
        <SectionTitle> {title} </SectionTitle>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Content>
    </Section>
  )
}

export default ServiciosEstudiantilesBienestar

const Section = styled.section`
  ${container}
  padding: 0;
  display: grid;
  grid-template-columns: 100%;
  ${mq.lg} {
    grid-template-columns: 50% 50%;
  }
`

const Media = styled.div`
  font-size: 0;
`

const Content = styled.div`
  max-width: 57rem;
  margin: 0 auto;
  padding: 1.5rem 1.5rem;
  ${mq.sm} {
    padding: 4rem 1.5rem;
  }
  ${mq.md} {
    text-align: right;
    padding: 10% 1.5rem;
  }
  &::before {
    content: '';
    position: absolute;
    padding: 1.3%;
    top: 0;
    right: 0;
    background: ${colors.blue.dark};
    opacity: 0.8;
  }
`

const SectionTitle = styled.h2``
