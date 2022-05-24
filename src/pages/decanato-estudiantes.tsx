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
import PageMeta from 'components/PageMeta'
import { idxModelGenerator } from 'lib/auxiliar'
import { useRouter } from 'next/router'
import { SITE_URL } from 'lib/constants'

const ServiciosEstudiantilesPage = (props) => {
  const router = useRouter()

  const seo = {
    title: 'Decanato de estudiantes',
    description:
      'Junto a nuestra oferta académica, tenemos disponible diversos servicios que cubren las diferentes necesidades de los estudiantes durante su paso por la universidad. Descubre aquí cuáles son e iniciemos esta aventura juntos.',
    canonical: SITE_URL + router.asPath,
    // noFollow: carrera.seo.metaRobotsNofollow,
    // noIndex: carrera.seo.metaRobotsNoindex,
  }

  // Load the post, but only if the data is ready.
  return (
    <PageMeta uri="/decanato-estudiantes">
      <Layout {...{ seo }}>
        <Container>
          <ServiciosEstudiantilesCover />
          <ServiciosEstudiantilesActividades
            {...idxModelGenerator('Activiades Extracurriculares')}
          />
          <ServiciosEstudiantilesBienestar
            {...idxModelGenerator(
              'Departamento de  Desarrollo y Bienestar Estudiantil',
            )}
          />
          <ServiciosEstudiantilesPsicologia
            {...idxModelGenerator('Orientación e Inclusión Estudiantil')}
          />
          <ServiciosEstudiantilesClinica
            {...idxModelGenerator('Servicio de Enfermería')}
          />
          <ServiciosEstudiantilesDeportes
            {...idxModelGenerator('Unidad de Deporte')}
          />
          <ServiciosEstudiantilesExcelencia
            {...idxModelGenerator('Programa de Premiación a la Exelencia')}
          />
          <ServiciosEstudiantilesAGISA
            {...idxModelGenerator('Asociación De Graduados De ISA (AGISA)')}
          />
        </Container>
      </Layout>
    </PageMeta>
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
