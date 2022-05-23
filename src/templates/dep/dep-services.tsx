import React from 'react'
import styled from '@emotion/styled'
import { container, mq } from 'components/grid'
import servicios_profesionales from '../../../public/images/direccion-extension-y-proyectos/servicios_profesionales.jpg'

const DEPServices = (props) => {
  const title = 'Servicios Profesionales ISA',
    copy =
      'ISA ofrece una amplia cartera de servicios de asistencias técnicas, asesorías especializadas y consultorías dirigidas a los sectores empresariales y agroproductivos, con miras a fortalecer la vinculación entre ambos. A continuación, se presentan los principales servicios que ofrece la institución agrupados por segmentos:'

  return (
    <BImage {...props}>
      <Section as="div">
        <Container>
          <Content>
            <Title>{title} </Title>
            <Copy>{copy} </Copy>
          </Content>
        </Container>
      </Section>
    </BImage>
  )
}

export default DEPServices

const BImage = styled.section`
  overflow: hidden;
  background: url(${servicios_profesionales.src});
  background-position: center center;
  background-size: cover;
`

const Section = styled.section`
  background: rgba(0, 0, 0, 0.55);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  min-height: 45rem;
  padding-top: 5rem;
  padding-bottom: 10rem;
`

const Container = styled.div`
  ${container}
  padding: 0;
  display: grid;
  grid-template-columns: 100%;
  justify-content: end;
  ${mq.md} {
    grid-template-columns: 70%;
  }
  ${mq.lg} {
    grid-template-columns: 50%;
  }
`

const Content = styled.div`
  padding: 3rem 1.5rem;
  text-align: right;
  position: relative;

  * {
    color: white;
  }
`

const Title = styled.h2`
  margin-bottom: 4rem;
`

const Copy = styled.p`
  margin-bottom: 4rem;
`
