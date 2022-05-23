import React from 'react'
import { GetStaticPropsContext } from 'next'
import { getNextStaticProps } from '@faustjs/next'
import { client } from 'client'
import styled from '@emotion/styled'
import Layout from 'components/layout'
import DEPCover from '../templates/dep/dep-cover'
import DEPActivities from '../templates/dep/dep-activities'
import DEPDevelopment from '../templates/dep/dep-development'
import DEPServices from '../templates/dep/dep-services'
import DEPLaboratory from '../templates/dep/dep-laboratory'
import DEPVeterinary from '../templates/dep/dep-veterinary'
import DEPCede from '../templates/dep/dep-cede'
import DEPServicesMenu from '../templates/dep/dep-services-menu'
import DEPPymes from '../templates/dep/dep-pymes'
import PageMeta from 'components/PageMeta'
import { idxModelGenerator } from 'lib/auxiliar'

const DEPPage = (props) => {
  const metaData = {
    title: 'Dirección Extensión y Proyectos',
    description:
      'La Dirección de Extensión y Proyectos es una dependencia de la Vicerrectoría de Investigación, Extensión y Postgrado (VIEP), la misma ha sido como un instrumento para la difusión del conocimiento, la aplicación de la ciencia, el apoyo a los sectores productivos y empresariales, el mejoramiento de la competitividad, así como el intercambio cultural y deportivo, todo ello visto como fundamento para el desarrollo integral de la sociedad y el cumplimiento de la labor de la Universidad.',
  }

  return (
    <PageMeta uri="/direccion-extension-y-proyectos">
      <Layout>
        <Container>
          <DEPCover />
          <DEPActivities {...idxModelGenerator('Actividades Que Realiza')} />
          <DEPDevelopment {...idxModelGenerator('Proyectos En Desarrollo')} />
          <DEPServices {...idxModelGenerator('Servicios Profesionales ISA')} />
          <DEPServicesMenu />
          <DEPPymes {...idxModelGenerator('Centro MIPYMES')} />
          <DEPLaboratory {...idxModelGenerator('Laboratorios')} />
          <DEPCede {...idxModelGenerator('CEDE')} />
          <DEPVeterinary {...idxModelGenerator('Clínica Veterinaria')} />
        </Container>
      </Layout>
    </PageMeta>
  )
}

export default DEPPage

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page: DEPPage,
    client,
  })
}

const Container = styled.div`
  width: 100%;
  margin: 0;
  overflow: hidden;
`
