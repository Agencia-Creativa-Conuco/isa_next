import React from 'react'
import { GetStaticPropsContext } from 'next'
import { getNextStaticProps } from '@faustjs/next'
import { client, PageIdType } from 'client'
import styled from '@emotion/styled'

import Layout from 'components/layout'

import AdmisionesCover from 'templates/admisiones/admisiones-cover'
import AdmisionesInfo from 'templates/admisiones/admisiones-info'
import AdmisionesForm from 'templates/admisiones/admisiones-form'
import AdmisionesCredito from 'templates/admisiones/admisiones-credito'
import AdmisionesServicios from 'templates/admisiones/admisiones-servicios'
import Calendar from 'components/calendar'
import colors from 'components/colors'

import PageMeta from 'components/PageMeta'

// markup
const Admissions = () => {
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
    <PageMeta uri="/admisiones">
      <Layout>
        <Container>
          <AdmisionesCover />
          <CalendarSection id="section_1">
            <Calendar />
          </CalendarSection>
          <AdmisionesInfo id="section_2" name="Requisitos de admisión" />
          <AdmisionesForm id="section_3" name="Solicitud de admisión" />
          <AdmisionesCredito id="section_4" name="Crédito Educativo" />
          <AdmisionesServicios id="section_5" name="Servicios Obcionales" />
        </Container>
      </Layout>
    </PageMeta>
  )
}
export default Admissions

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page: Admissions,
    client,
  })
}

const Container = styled.div`
  width: 100%;
  margin: 0;
  overflow: hidden;
`

const CalendarSection = styled.section`
  background-color: ${colors.gray.light};
  overflow: hidden;
`
