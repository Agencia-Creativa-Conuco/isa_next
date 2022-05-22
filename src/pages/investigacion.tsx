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

const ResearchPage = () => {
  //Obtiene los datos de los Proyectos
  // const investigaciones = useInvestigaciones()

  const data = [
    {
      name: 'Departamento De Investigaciones y Publicaciones',
      id: '#section_1',
    },
    {
      name: 'Equipos de Iinvestigacion',
      id: '#section_2',
    },
    {
      name: 'Departamento De Investigaciones y Publicaciones General',
      id: '#section_3',
    },
  ]

  const metaData = {
    title: 'Investigación',
    description:
      'La Vicerrectoría de Investigaciones es la unidad operativa de la Universidad ISA que tiene como misión institucional normar, dirigir y desarrollar las actividades de investigación de la institución.',
  }

  return (
    <Layout {...{ data }} {...metaData}>
      <Container>
        <DIPCover />
        <DIPPhilosophy />
        <DIPTeam />
        <DIPGeneral />
      </Container>
    </Layout>
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
