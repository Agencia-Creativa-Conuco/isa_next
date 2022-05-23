import React from 'react'
import { GetStaticPropsContext } from 'next'
import { getNextStaticProps } from '@faustjs/next'
import { client } from 'client'
import styled from '@emotion/styled'
import BibliotecaCover from 'templates/biblioteca/biblioteca-cover'
import BibliotecaServicios from 'templates/biblioteca/biblioteca-servicios'
import BibliotecaRecursos from 'templates/biblioteca/biblioteca-recursos'
import BibliotecaHorario from 'templates/biblioteca/biblioteca-horario'
import Layout from 'components/layout'
import PageMeta from 'components/PageMeta'

const Biblioteca = (props) => {
  const data = [
    {
      name: ' Servicios',
      id: '#section_1',
    },
    {
      name: 'Recursos',
      id: '#section_2',
    },
    {
      name: 'Horario de servicios',
      id: '#section_3',
    },
  ]

  const metaData = {
    title: 'Biblioteca',
    description:
      'La biblioteca de la Universidad ISA, se concibe como un centro de información y fuente de conocimiento en permanente renovación. Su accionar, está orientado a la búsqueda del crecimiento científico y espiritual de toda la comunidad universitaria, a través del contacto con los medios y actores que sirven de catalizador.',
  }

  return (
    <PageMeta uri="/biblioteca">
      <Layout>
        <Container>
          <BibliotecaCover />
          <BibliotecaServicios />
          <BibliotecaRecursos />
          <BibliotecaHorario />
        </Container>
      </Layout>
    </PageMeta>
  )
}

export default Biblioteca

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page: Biblioteca,
    client,
  })
}

const Container = styled.div`
  width: 100%;
  margin: 0;
  overflow: hidden;
`
