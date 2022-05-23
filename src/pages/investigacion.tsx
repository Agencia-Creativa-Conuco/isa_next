import React from 'react'
import { GetStaticPropsContext } from 'next'
import { getNextStaticProps } from '@faustjs/next'
import { client } from 'client'
import styled from '@emotion/styled'
// import useLineasInvestigacion from '../../../hooks/useLineasInvestigacion'
import Layout from 'components/layout'
import DIPCover from '../templates/dip/dip-cover'
import DIPGeneral from '../templates/dip/dip-general'
import DIPPhilosophy from '../templates/dip/dip-philosophy'
import DIPTeam from '../templates/dip/dip-team'
import PageMeta from 'components/PageMeta'
import { idxModelGenerator } from 'lib/auxiliar'

const ResearchPage = () => {
  //Obtiene los datos de los Proyectos
  // const investigaciones = useInvestigaciones()

  const metaData = {
    title: 'Investigación',
    description:
      'La Vicerrectoría de Investigaciones es la unidad operativa de la Universidad ISA que tiene como misión institucional normar, dirigir y desarrollar las actividades de investigación de la institución.',
  }

  return (
    <PageMeta uri="/investigacion">
      <Layout>
        <Container>
          <DIPCover />
          <DIPPhilosophy
            {...idxModelGenerator(
              'Departamento De Investigaciones y Publicaciones',
            )}
          />
          <DIPTeam {...idxModelGenerator('Equipos de Iinvestigacion')} />
          <DIPGeneral
            {...idxModelGenerator(
              'Departamento De Investigaciones y Publicaciones General',
            )}
          />
        </Container>
      </Layout>
    </PageMeta>
  )
}

export default ResearchPage

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page: ResearchPage,
    client,
  })
}

const Container = styled.div`
  width: 100%;
  margin: 0;
  overflow: hidden;
`
