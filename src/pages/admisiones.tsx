import React from 'react'
import { GetStaticPropsContext } from 'next'
import { getNextStaticProps } from '@faustjs/next'
import { client, PageIdType } from 'client'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Layout from 'components/layout'

import AdmisionesCover from 'templates/admisiones/admisiones-cover'
import AdmisionesInfo from 'templates/admisiones/admisiones-info'
import AdmisionesForm from 'templates/admisiones/admisiones-form'
import AdmisionesCredito from 'templates/admisiones/admisiones-credito'
import AdmisionesServicios from 'templates/admisiones/admisiones-servicios'
import Calendar from 'components/calendar'
import colors from 'components/colors'

import PageMeta from 'components/PageMeta'
import { idxModelGenerator } from 'lib/auxiliar'

// markup
const Admissions = () => {
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
          <CalendarSection {...idxModelGenerator('Calendario de Admisión')}>
            <Calendar />
          </CalendarSection>
          <AdmisionesInfo {...idxModelGenerator('Requisitos de Admisión')} />
          <AdmisionesForm {...idxModelGenerator('Solicitud de admisión')} />
          <AdmisionesCredito {...idxModelGenerator('Crédito Educativo')} />
          <AdmisionesServicios {...idxModelGenerator('Servicios Opcionales')} />
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
  ${(props: { id?: string; name?: string }) => css`
    background-color: ${colors.gray.light};
    overflow: hidden;
  `}
`
