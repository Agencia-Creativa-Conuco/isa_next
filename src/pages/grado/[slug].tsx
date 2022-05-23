import React from 'react'
import { getNextStaticProps, is404 } from '@faustjs/next'
import { GetStaticPropsContext } from 'next'
import { client, GradoIdType } from 'client'
import styled from '@emotion/styled'

import GradoCover from '../../templates/grado/grado-cover'
import GradoOffer from '../../templates/grado/grado-offer'
import { fetchAPI } from 'lib/api'
import Layout from 'components/layout'
import { SITE_URL } from 'lib/constants'

const Page = ({ slug }) => {
  const { useQuery } = client
  const grado = useQuery().grado({
    id: slug,
    idType: GradoIdType.SLUG,
  })

  const seo = {
    title: grado.title(),
    description: `Programas de ${grado.title()} de la Universidad ISA`,
    canonical: SITE_URL + grado.uri,
    // noFollow: grado.seo.metaRobotsNofollow,
    // noIndex: grado.seo.metaRobotsNoindex,
    // openGraph: {
    //   type: grado.seo.opengraphType,
    //   images: [
    //     {
    //       url: `${SITE_URL}/_next/image?url=${grado.featuredImage.node.mediaItemUrl}&w=1920&q=75`,
    //     },
    //   ],
    // },
    // additionalMetaTags: [
    //   {
    //     property: 'cornerstone',
    //     content: false,
    //   },
    // ],
  }
  return (
    <Layout {...{ seo }}>
      <Article>
        <GradoCover {...{ grado }} />
        <GradoOffer {...{ grado }} />
      </Article>
    </Layout>
  )
}

export default Page

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = context.params.slug.toString()

  const { grado } = await fetchAPI(
    `
      query ($slug: ID!) {
        grado(id: $slug, idType: SLUG) {
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
    notFound: !grado,
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
