import React from 'react'
import { GetStaticPropsContext } from 'next'
import { getNextStaticProps } from '@faustjs/next'
import { client } from 'client'

import styled from '@emotion/styled'
import Layout from 'components/layout'
import OfertaCover from 'templates/oferta-academica/oferta-academica-cover'
import OfertaTecnics from 'templates/oferta-academica/oferta-academica-tecnics'
import OfertaInternacional from 'templates/oferta-academica/oferta-academica-internacional'
import OfertaLabs from 'templates/oferta-academica/oferta-academica-labs'
import OfertaAcademicaList from 'templates/oferta-academica/oferta-academica-oferta'
import Page from 'components/PageMeta'

const OfertaAcademica = (props) => {
  const data = [
    {
      name: 'Oferta Académica',
      id: '#section_1',
    },
    {
      name: 'Centro de Educación Técnica Huascar Rodríguez Herrera',
      id: '#section_2',
    },
    // {
    //   name: 'Ofertas de Laboratorio',
    //   id: '#section_3',
    // },
    {
      name: 'Programas Internacionales',
      id: '#section_4',
    },
  ]

  const metaData = {
    title: 'Oferta Académica',
    description:
      'La Universidad ha sabido responder a los cambios que la sociedad ha demandado, y en la actualidad ha diversificado su oferta curricular ofreciendo carreras que responden a las necesidades del país. En todas ellas introduciendo cambios en la estructura curricular para formar profesionales con las competencias requeridas para desarrollar su labor con profesionalidad, inspirados en los principios y valores que sustenta la Universidad.',
  }

  // Load the post, but only if the data is ready.
  return (
    <Page uri="/oferta-academica">
      <Layout>
        <Container>
          <OfertaCover />
          <OfertaAcademicaList />
          <OfertaTecnics />
          <OfertaLabs />
          <OfertaInternacional />
        </Container>
      </Layout>
    </Page>
  )
}

export default OfertaAcademica

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page: OfertaAcademica,
    client,
  })
}

const Container = styled.div`
  width: 100%;
  margin: 0;
  overflow: hidden;
`
