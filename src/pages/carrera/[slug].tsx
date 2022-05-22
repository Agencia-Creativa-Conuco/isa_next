import React from 'react'
import { getNextStaticProps, is404 } from '@faustjs/next'
import { GetStaticPropsContext } from 'next'
import { client, CarreraIdType } from 'client'

import styled from '@emotion/styled'
import CarreraCover from 'templates/carrera/carrera-cover'
import CarreraPerfil from 'templates/carrera/carrera-perfil'
import CarreraCompetencias from 'templates/carrera/carrera-competencies'
import CarreraPensum from 'templates/carrera/carrera-pensum'
import CarreraForm from 'templates/carrera/carrera-form'

import Layout from 'components/layout'
import { fetchAPI } from 'lib/api'

const Page = ({ slug }) => {
  const { useQuery } = client
  const carrera = useQuery().carrera({
    id: slug,
    idType: CarreraIdType.SLUG,
  })

  return (
    <Layout>
      <Article>
        <CarreraCover {...{ carrera }} />
        <CarreraPerfil {...{ carrera }} />
        <CarreraCompetencias {...{ carrera }} />
        <CarreraPensum {...{ carrera }} />
        <CarreraForm {...{ carrera }} />
      </Article>
    </Layout>
  )
}

export default Page

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = context.params.slug.toString()

  const { carrera } = await fetchAPI(
    `
    query ($slug: ID!) {
      carrera(id: $slug, idType: SLUG) {
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
    notFound: !carrera,
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
