import React from 'react'
import { getNextStaticProps, is404 } from '@faustjs/next'
import { GetStaticPropsContext } from 'next'
import { client, InvestigacionIdType } from 'client'
import styled from '@emotion/styled'
// import Related from '../../components/related'
import TeamSlider from '../../components/team-slider'

import InvestigacionCover from 'templates/investigacion/investigacion-cover'
import InvestigacionCarrousel from 'templates/investigacion/investigacion-carrousel'
import InvestigacionResume from 'templates/investigacion/investigacion-resume'
import Layout from 'components/layout'
import { fetchAPI } from 'lib/api'

const Page = ({ slug }) => {
  const { useQuery } = client
  const investigacion = useQuery().investigacion({
    id: slug,
    idType: InvestigacionIdType.SLUG,
  })

  const investigadores = investigacion.investigadores().nodes

  return (
    <Layout>
      <Article key={investigacion.id}>
        <InvestigacionCover {...{ investigacion }} />
        <InvestigacionCarrousel {...{ investigacion }} />
        <TeamSlider investigadores={investigadores} />
        <InvestigacionResume {...{ investigacion }} />
        {/* <Related items={relatedProjects} /> */}
      </Article>
    </Layout>
  )
}

export default Page
export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = context.params.slug.toString()

  const { investigacion } = await fetchAPI(
    `
        query ($slug: ID!) {
          investigacion(id: $slug, idType: SLUG) {
            id
          }
        }
      `,
    {
      variables: { slug },
    },
  )

  return getNextStaticProps(context, {
    Page,
    client,
    notFound: !investigacion,
    props: {
      slug,
    },
  })
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

const Article = styled.article``
