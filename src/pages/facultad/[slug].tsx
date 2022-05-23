import React from 'react'
import { getNextStaticProps, is404 } from '@faustjs/next'
import { GetStaticPropsContext } from 'next'
import { client, FacultadIdType } from 'client'

import styled from '@emotion/styled'
import FacultadCover from 'templates/facultad/facultad-cover'
import FacultadPerfil from 'templates/facultad/facultad-perfil'
import FacultadAreas from 'templates/facultad/facultad-areas'

import Layout from 'components/layout'
import { fetchAPI } from 'lib/api'

const Page = ({ slug }) => {
  const { useQuery } = client
  const facultad = useQuery().facultad({
    id: slug,
    idType: FacultadIdType.SLUG,
  })
  return (
    <Layout contacto={facultad.contacto}>
      <Article>
        <FacultadCover {...{ facultad }} />
        <FacultadPerfil {...{ facultad }} />
        <FacultadAreas {...{ facultad }} />
      </Article>
    </Layout>
  )
}

export default Page

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = context.params.slug.toString()

  const { facultad } = await fetchAPI(
    `
    query ($slug: ID!) {
      facultad(id: $slug, idType: SLUG) {
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
    notFound: !facultad,
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
