import React from 'react'
import styled from '@emotion/styled'
import { HotelIcon, FoodIcon } from 'components/icons'
import colors from 'components/colors'
import useModal from 'hooks/useModal'
import Link from 'next/link'
// import useGlobalOption from "../../../hooks/useGlobalOption";
import { container, mq } from 'components/grid'
import { client } from 'client'
import ctas from 'styles/cta'

const AdmisionesServicios = (props) => {
  const { useQuery } = client
  const serviciosOpcionales = useQuery().acfOptionsServiciosOpcionales
    .serviciosOpcionales.servicios

  let title = 'Servicios Opcionales',
    services = [
      {
        id: 'alojamiento',
        name: 'Alojamiento',
        icon: HotelIcon,
        contenido: `
          <p>El Programa de Residencia Estudiantil, es un servicio que ofrece la Universidad ISA a sus estudiantes, principalmente a aquellos provenientes de zonas alejadas a la provincia de Santiago, con el objetivo de propiciar un ambiente que les permita la dedicación a sus estudios y a la vez, lograr un buen desempeño académico.</p>
          <p>Los estudiantes que desean conservar el derecho al servicio de residencia estudiantil, deben mantener un rendimiento académico en condición normal (2.0/4.0); y el respeto a las normas y reglamentos institucionales.</p>
          <h3>Observaciones:</h3>
          <ul>
            <li>Los estudiantes podrán permanecer en la residencia estudiantil, solo en el período académico que indica el calendario académico cada cuatrimestre.</li>
            <li>Es responsabilidad del estudiante, actualizar el servicio de alojamiento al inicio de cada cuatrimestre.</li>
            <li>Para mantener el servicio, el estudiante debe respetar los estatutos establecidos en el Reglamento Estudiantil.</li>
          </ul>
        `,
        url: '/',
      },
      {
        id: 'alimentacion',
        name: 'Alimentación',
        icon: FoodIcon,
        contenido: `
          <p>El Programa de Servicio de  Alimentación, es una facilidad que ofrece la Universidad ISA a sus estudiantes, principalmente a aquellos provenientes de zonas alejadas a la provincia de Santiago, con el objetivo de propiciar un ambiente que les permita la dedicación a sus estudios y a la vez, lograr un buen desempeño académico.</p>
          <p>Los estudiantes que desean conservar el derecho al servicio de alimentación, deben mantener un rendimiento académico en condición normal (2.0/4.0); y el respeto a las normas y reglamentos institucionales.</p>
          <p>Contar con los servicios de desayuno, almuerzo y cena durante su estancia en la Universidad.</p>
          <p>Contar con las facilidades necesarias que les permitan el acceso a los servicios de alimentación de acuerdo a sus necesidades.</p>
        `,
        url: '/',
      },
    ]

  return (
    <Section {...props}>
      <Title>{title}</Title>
      {/* Agrega las url de los formularios */}
      <Container>
        {services.map((service, index) => {
          serviciosOpcionales.forEach((item) => {
            if (service.id === item.tipoServicio) {
              service.url = item.url
            }
          })

          return <ServiceComponent key={index} {...{ service }} />
        })}
      </Container>
    </Section>
  )
}

export default AdmisionesServicios

const ServiceComponent = ({ service }) => {
  const { openModal, ModalUI } = useModal()

  const Icono = service.icon

  return (
    <>
      <Service onClick={openModal}>
        <Icon>
          <Icono />
        </Icon>
        <h3>{service.name}</h3>
      </Service>
      <ModalUI size="80rem">
        <h2>{service.name}</h2>
        <Contenido dangerouslySetInnerHTML={{ __html: service.contenido }} />
        <Link href={service.url ?? ''} passHref>
          <SLink target="_blank" aria-label={service.name}>
            Solicitar
          </SLink>
        </Link>
      </ModalUI>
    </>
  )
}

const Section = styled.section`
  ${container}
  margin: 9.6rem auto;
`

const Container = styled.div`
  ${mq.md} {
    display: flex;
  }
`

const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 4rem;
`

const Service = styled.div`
  cursor: pointer;
  width: 100%;
  max-width: 25rem;
  margin: 0 auto;
  margin-bottom: 2rem;
  background-color: #fafafa;
  padding: 1.5rem;
  text-align: center;
`

const Icon = styled.div`
  max-width: 6rem;
  margin: 0 auto;
  color: ${colors.primary.dark};
`

const Contenido = styled.div``

const SLink = styled.a`
  ${ctas}
`
