import React from 'react'
import { GetStaticPropsContext } from 'next'
import { getNextStaticProps } from '@faustjs/next'
import { client } from 'client'

import Layout from 'components/layout'
import EgresadosCover from 'templates/egresados/egresados-cover'
import EgresadosBody from 'templates/egresados/egresados-body'
import PageMeta from 'components/PageMeta'
const EgresadosSingle = () => {
  const metaData = {
    title: 'Egresados',
    description: 'Pronto agregaremos una description a la pagina de Egresados',
  }

  return (
    <PageMeta uri="/egresados">
      <Layout>
        <EgresadosCover />
        <EgresadosBody />
      </Layout>
    </PageMeta>
  )
}

export default EgresadosSingle

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page: EgresadosSingle,
    client,
  })
}
