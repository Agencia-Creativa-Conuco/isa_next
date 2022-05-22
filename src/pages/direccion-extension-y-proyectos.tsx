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

const DEPPage = (props) => {
  const data = [
    {
      name: 'Actividades Que Realiza',
      id: '#section_1',
    },
    {
      name: 'Proyectos En Desarrollo',
      id: '#section_2',
    },
    {
      name: 'Servicios Profesionales ISA',
      id: '#section_3',
    },
    {
      name: 'Centro MIPYMES',
      id: '#section_4',
    },
    {
      name: 'Laboratorios',
      id: '#section_5',
    },
    {
      name: 'CEDE',
      id: '#section_6',
    },
    {
      name: 'Clínica Veterinaria',
      id: '#section_7',
    },
  ]

  const metaData = {
    title: 'Dirección Extensión y Proyectos',
    description:
      'La Dirección de Extensión y Proyectos es una dependencia de la Vicerrectoría de Investigación, Extensión y Postgrado (VIEP), la misma ha sido como un instrumento para la difusión del conocimiento, la aplicación de la ciencia, el apoyo a los sectores productivos y empresariales, el mejoramiento de la competitividad, así como el intercambio cultural y deportivo, todo ello visto como fundamento para el desarrollo integral de la sociedad y el cumplimiento de la labor de la Universidad.',
  }

  return (
    <Layout
      uri="/direccion-extension-y-proyectos"
      {...{ data }}
      {...props}
      {...metaData}
    >
      <Container>
        <DEPCover />
        <DEPActivities />
        <DEPDevelopment />
        <DEPServices />
        <DEPServicesMenu />
        <DEPPymes />
        <DEPLaboratory />
        <DEPCede />
        <DEPVeterinary />
      </Container>
    </Layout>
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
