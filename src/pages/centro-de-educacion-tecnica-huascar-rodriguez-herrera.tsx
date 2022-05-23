import React from 'react'
import { GetStaticPropsContext } from 'next'
import { getNextStaticProps } from '@faustjs/next'
import { client } from 'client'
import Layout from '../components/layout'
import Filosofia from 'templates/centro-de-educacion-tecnica-huascar-rodriguez-herrera/filosofia'
import DatosRelevantes from 'templates/centro-de-educacion-tecnica-huascar-rodriguez-herrera/datos-relevantes'
import Cover from 'templates/centro-de-educacion-tecnica-huascar-rodriguez-herrera/cover'
import Galeria from 'templates/centro-de-educacion-tecnica-huascar-rodriguez-herrera/galeria'
import OfertaTecnica from 'templates/centro-de-educacion-tecnica-huascar-rodriguez-herrera/oferta-tecnica'
import PageMeta from 'components/PageMeta'
import { useRouter } from 'next/router'
import { SITE_URL } from 'lib/constants'

const CentroHuascar = (props) => {
  const router = useRouter()

  const seo = {
    title: 'Centro de Educación Técnica Huascar Rodríguez Herrera',
    description:
      'El Centro de Educación Técnica Huáscar Rodríguez Herrera surge en el 2011, como una iniciativa conjunta entre la Familia Rodríguez Herrera, a través de su empresa Cementos Cibao, la República China (Taiwán), y la Universidad ISA, con el objetivo de formar y capacitar los recursos humanos demandados por el Sector Construcción.',
    canonical: SITE_URL + router.asPath,
    // noFollow: carrera.seo.metaRobotsNofollow,
    // noIndex: carrera.seo.metaRobotsNoindex,
  }

  return (
    <PageMeta uri={router.asPath}>
      <Layout {...{ seo }}>
        <Cover />
        <Filosofia />
        <Galeria />
        <OfertaTecnica />
        <DatosRelevantes />
      </Layout>
    </PageMeta>
  )
}

export default CentroHuascar

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page: CentroHuascar,
    client,
  })
}
