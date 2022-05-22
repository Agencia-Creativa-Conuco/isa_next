import { getNextStaticProps } from '@faustjs/next'
import { client, OrderEnum, PostObjectsConnectionOrderbyEnum } from 'client'
import { Pagination, Posts } from 'components'
import Layout from 'components/layout'
import { GetStaticPropsContext } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

const POSTS_PER_PAGE = 6

export default function Page() {
  const { query = {} } = useRouter()
  const { postSlug, postCursor } = query
  const { usePosts, useQuery } = client
  const generalSettings = useQuery().generalSettings
  const isBefore = postSlug === 'before'
  const posts = usePosts({
    after: !isBefore ? (postCursor as string) : undefined,
    before: isBefore ? (postCursor as string) : undefined,
    first: !isBefore ? POSTS_PER_PAGE : undefined,
    last: isBefore ? POSTS_PER_PAGE : undefined,
  })

  if (useQuery().$state.isLoading) {
    return null
  }

  return (
    <Layout>
      <main className="content content-index">
        <Posts posts={posts.nodes} heading="Publicaciones" />
        <Pagination pageInfo={posts.pageInfo} basePath="/posts" />
      </main>
    </Layout>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
  })
}
