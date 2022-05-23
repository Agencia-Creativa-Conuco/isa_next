import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import colors from 'components/colors'
import { container, mq } from 'components/grid'
import orientacion_estudiantil from '../../../public/images/servicios-estudiantiles/orientacion_estudiantil.jpg'

const ServiciosEstudiantilesPsicologia = (props) => {
  const title = 'Orientación e Inclusión Estudiantil',
    content = `
            <p>Orientación e inclusión estudiantil es un servicio orientado a propiciar el bienestar estudiantil y potenciar, en todas sus dimensiones, el desarrollo integral del estudiante mediante los servicios de orientación académica, personal, social y profesional.</p>
            <p>Su objetivo principal es valorar y propugnar por el desarrollo integral de los estudiantes, aportándole la asesoría y respaldo en su proceso de formación académica, personal y social, contribuyendo a la formación de agentes autónomos que se integrarán a la sociedad.</p>
            <p>
            <b> Horario de Asistencia </b>
              <br/></br>
              <b> Lunes a Viernes.  </b> <br/>
              8:00 a.m.-12:00 m. / 1:00 a 5:00 p.m.
              <br/>
             <b> Contactos </b>
              <br/>
              Tel: 809.247.2000 <br/>
              Edificio Kellogg, 2do. Nivel. Universidad ISA.             
            </p>
        `,
    image = orientacion_estudiantil,
    cta = null

  return (
    <Section fluid {...props}>
      <Media>
        <Image
          src={image}
          alt="Orientación Estudiantil"
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

export default ServiciosEstudiantilesPsicologia

const Section = styled.section`
  ${container}
  padding: 0;
  display: grid;
  grid-template-columns: 100%;
  z-index: 55;

  ${mq.lg} {
    grid-template-columns: 50% 50%;
    div:first-of-type {
      order: 2;
    }
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
    padding: 10% 1.5rem;
  }

  &::before {
    content: '';
    position: absolute;
    padding: 1.3%;
    bottom: 0;
    left: 0;
    background: ${colors.blue.dark};
    opacity: 0.8;
  }
`

const SectionTitle = styled.h2``
