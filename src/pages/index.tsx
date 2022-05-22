import { getNextStaticProps } from '@faustjs/next'
import { GetStaticPropsContext } from 'next'
import Head from 'next/head'
import React from 'react'
import { CTA, Footer, Header, Hero } from 'components'
import styles from 'scss/pages/home.module.scss'
import { client } from 'client'

import HomeCover from 'templates/home/home-cover'
import HomeOffer from 'templates/home/home-offer'
import Calendar from 'components/calendar'
import HomeNews from 'templates/home/home-news'
import HomeAplication from 'templates/home/home-aplication'
import HomeContact from 'templates/home/home-contact'
import Layout from 'components/layout'

export default function Page() {
  const { useQuery } = client
  const { generalSettings } = useQuery()

  return (
    <Layout>
      {/* <Header
      // title={generalSettings.title}
      // description={generalSettings.description}
      /> */}

      <Head>
        <title>
          {generalSettings.title} - {generalSettings.description}
        </title>
      </Head>

      <main className="content">
        <HomeCover />
        <HomeOffer />
        <Calendar />
        <HomeNews />
        <HomeAplication />
        <HomeContact />
      </main>
      {/* <Footer copyrightHolder={generalSettings.title} /> */}
    </Layout>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
  })
}
