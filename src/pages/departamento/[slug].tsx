import React from 'react'
import { getNextStaticProps, is404 } from '@faustjs/next'
import { GetStaticPropsContext } from 'next'
import { client, DepartamentoIdType } from 'client'

import styled from '@emotion/styled'
import DepartamentoCover from 'templates/departamento/departamento-cover'
import DepartamentoCarreras from 'templates/departamento/departamento-carreras'

import Layout from 'components/layout'
import { fetchAPI } from 'lib/api'

import { SITE_URL } from 'lib/constants'

const Page = ({ slug }) => {
  const { useQuery } = client
  const departamento = useQuery().departamento({
    id: slug,
    idType: DepartamentoIdType.SLUG,
  })

  const contacto = departamento.contacto

  const seo = {
    title: departamento.title(),
    description: departamento.copy,
    canonical: SITE_URL + departamento.uri,
    // noFollow: departamento.seo.metaRobotsNofollow,
    // noIndex: departamento.seo.metaRobotsNoindex,
    openGraph: {
      // type: departamento.seo.opengraphType,
      images: [
        {
          url: `${SITE_URL}/_next/image?url=${departamento.featuredImage.node.mediaItemUrl}&w=1920&q=75`,
        },
      ],
    },
  }

  return (
    <Layout {...{ seo, contacto }}>
      <Article>
        <DepartamentoCover {...{ departamento }} />
        <DepartamentoCarreras {...{ departamento }} />
      </Article>
    </Layout>
  )
}

export default Page

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = context.params.slug.toString()

  const { departamento } = await fetchAPI(
    `
    query ($slug: ID!) {
      departamento(id: $slug, idType: SLUG) {
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
    notFound: !departamento,
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
