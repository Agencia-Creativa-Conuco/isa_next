import React from 'react'
import Layout from 'components/layout'
import CentroMipymesBenefits from 'templates/centro-mipymes/centro-mipymes-benefits'
import CentroMipymesCover from 'templates/centro-mipymes/centro-mipymes-cover'
import CentroMipymesEconomic from 'templates/centro-mipymes/centro-mipymes-economic'
import CentroMipymesPhilosophy from 'templates/centro-mipymes/centro-mipymes-philosophy'
import CentroMipymesServices from 'templates/centro-mipymes/centro-mipymes-services'
import PageMeta from 'components/PageMeta'
import { useRouter } from 'next/router'
import { SITE_URL } from 'lib/constants'

const CentroMipymes = (props) => {
  const metaData = {
    title: 'Centro MiPymes',
    description:
      'El Centro MIPYMES (Centro de Servicios de Apoyo Integral de las micro, pequeñas y medianas empresas) es una iniciativa por parte del Ministerio de Industria y Comercio a través del Viceministerio de Fomento a las MIPYMES en alianza con la Universidad ISA',
  }
  const router = useRouter()

  const seo = {
    title: 'Centro MiPymes',
    description:
      'El Centro MIPYMES (Centro de Servicios de Apoyo Integral de las micro, pequeñas y medianas empresas) es una iniciativa por parte del Ministerio de Industria y Comercio a través del Viceministerio de Fomento a las MIPYMES en alianza con la Universidad ISA',
    canonical: SITE_URL + router.asPath,
    // noFollow: carrera.seo.metaRobotsNofollow,
    // noIndex: carrera.seo.metaRobotsNoindex,
  }

  return (
    <PageMeta uri="/centro-mipymes">
      <Layout {...{ seo }}>
        <CentroMipymesCover />
        <CentroMipymesPhilosophy />
        <CentroMipymesServices />
        <CentroMipymesBenefits />
        <CentroMipymesEconomic />
      </Layout>
    </PageMeta>
  )
}

export default CentroMipymes
