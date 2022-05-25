import React from 'react'
import styled from '@emotion/styled'
import { client } from 'client'
import { Header, Hero, Footer } from '../components'
import Layout from 'components/layout'
import { container } from 'components/grid'
import SearchForm from 'components/search/search-form'

export default function Page(): JSX.Element {
  const { useQuery } = client
  const generalSettings = useQuery().generalSettings

  return (
    <>
      <Layout>
        <Section>
          <Container space>
            <Icon>😔</Icon>
            <h1> Oops! Esta página no pudo ser encontrada.</h1>
            <h3>
              La página que estas buscando no existe o no está disponible.
            </h3>
            <br />
            <SearchForm />
          </Container>
        </Section>
      </Layout>
    </>
  )
}

const Section = styled.section`
  padding: 20rem 0;
`

const Container = styled.div`
  ${container}
`

const Icon = styled.span`
  display: block;
  text-align: center;
  font-size: 7rem;
`
