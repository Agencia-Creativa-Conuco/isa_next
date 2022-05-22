import React from 'react'
import { GetStaticPropsContext } from 'next'
import { getNextStaticProps } from '@faustjs/next'
import { client } from 'client'
import styled from '@emotion/styled'
import ServiciosEstudiantilesCover from 'templates/servicios-estudiantiles/servicios-estudiantiles-cover'
import ServiciosEstudiantilesPsicologia from 'templates/servicios-estudiantiles/servicios-estudiantiles-psicologia'
import ServiciosEstudiantilesBienestar from 'templates/servicios-estudiantiles/servicios-estudiantiles-bienestar'
import ServiciosEstudiantilesAGISA from 'templates/servicios-estudiantiles/servicios-estudiantiles-agisa'
import ServiciosEstudiantilesClinica from 'templates/servicios-estudiantiles/servicios-estudiantiles-clinica'
import ServiciosEstudiantilesDeportes from 'templates/servicios-estudiantiles/servicios-estudiantiles-deportes'
import ServiciosEstudiantilesExcelencia from 'templates/servicios-estudiantiles/servicios-estudiantiles-excelencia'
import ServiciosEstudiantilesActividades from 'templates/servicios-estudiantiles/servicios-estudiantiles-actividades'
import Layout from 'components/layout'

const ServiciosEstudiantilesPage = (props) => {
  const data = [
    {
      name: 'Activiades Extracurriculares',
      id: '#section_1',
    },
    {
      name: 'Departamento de  Desarrollo y Bienestar Estudiantil',
      id: '#section_2',
    },
    {
      name: 'Orientación e Inclusión Estudiantil',
      id: '#section_3',
    },
    {
      name: 'Servicio de Enfermería',
      id: '#section_4',
    },
    {
      name: 'Unidad de Deporte',
      id: '#section_5',
    },
    {
      name: 'Programa de Premiación a la Exelencia',
      id: '#section_6',
    },
    {
      name: 'Asociación De Graduados De ISA (AGISA)',
      id: '#section_7',
    },
  ]

  const metaData = {
    title: 'Decanato de estudiantes',
    description:
      'Junto a nuestra oferta académica, tenemos disponible diversos servicios que cubren las diferentes necesidades de los estudiantes durante su paso por la universidad. Descubre aquí cuáles son e iniciemos esta aventura juntos.',
  }
  // Load the post, but only if the data is ready.
  return (
    <Layout uri="/decanato-estudiantes" {...{ data }} {...props} {...metaData}>
      <Container>
        <ServiciosEstudiantilesCover />
        <ServiciosEstudiantilesActividades />
        <ServiciosEstudiantilesBienestar />
        <ServiciosEstudiantilesPsicologia />
        <ServiciosEstudiantilesClinica />
        <ServiciosEstudiantilesDeportes />
        <ServiciosEstudiantilesExcelencia />
        <ServiciosEstudiantilesAGISA />
      </Container>
    </Layout>
  )
}

export default ServiciosEstudiantilesPage

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page: ServiciosEstudiantilesPage,
    client,
  })
}

const Container = styled.div`
  width: 100%;
  margin: 0;
  overflow: hidden;
`
