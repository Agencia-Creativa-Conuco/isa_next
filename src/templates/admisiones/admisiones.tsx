import React from 'react'
import styled from '@emotion/styled'

import Layout from 'components/layout'

import AdmisionesCover from './admisiones-cover'
import AdmisionesInfo from './admisiones-info'
import AdmisionesForm from './admisiones-form'
import AdmisionesCredito from './admisiones-credito'
import AdmisionesServicios from './admisiones-servicios'
import Calendar from 'components/calendar'
import colors from 'components/colors'

// markup
const Admissions = (props) => {
  const data = [
    {
      name: 'Períodos de admisión',
      id: '#section_1',
    },
    {
      name: 'Requisitos de admisión',
      id: '#section_2',
    },
    {
      name: 'Solicitud de admisión',
      id: '#section_3',
    },
    {
      name: 'Crédito Educativo',
      id: '#section_4',
    },
    {
      name: 'Servicios Opcionales',
      id: '#section_5',
    },
  ]

  const metaData = {
    title: 'Admisiones',
    description:
      'Sigue estos pasos y estudia con nosotros, aplica para vivir una experiencia educativa de calidad que marcará un antes y un después en tu carrera profesional. ¿Estás listo?',
  }

  return (
    <Layout {...{ data }} {...props} {...metaData}>
      <Container>
        <AdmisionesCover />
        <CalendarSection id="section_1">
          <Calendar />
        </CalendarSection>
        <AdmisionesInfo />
        <AdmisionesForm />
        <AdmisionesCredito />
        <AdmisionesServicios />
      </Container>
    </Layout>
  )
}
export default Admissions

const Container = styled.div`
  width: 100%;
  margin: 0;
  overflow: hidden;
`

const CalendarSection = styled.section`
  background-color: ${colors.gray.light};
  overflow: hidden;
`
