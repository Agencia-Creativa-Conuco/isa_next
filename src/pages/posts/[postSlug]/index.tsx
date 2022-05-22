import { getNextStaticProps, is404 } from '@faustjs/next'
import { client, Post } from 'client'
import { GetStaticPropsContext } from 'next'
import styled from '@emotion/styled'
import Layout from 'components/layout'

import PostSingleCover from 'templates/post/post-single-cover'
import PostSingleContent from 'templates/post/post-single-content'
import PostFileCover from 'templates/post/post-file-cover'

export interface PostProps {
  post: Post | Post['preview']['node'] | null | undefined
}

export function PostComponent({ post }: PostProps) {
  const { useQuery } = client
  const generalSettings = useQuery().generalSettings

  const isFile = post.datosPublicacion.tipo === 'file'

  return (
    <Layout>
      {isFile ? (
        <Article>
          <PostFileCover post={post} />
        </Article>
      ) : (
        <Article>
          <PostSingleCover post={post} />
          <PostSingleContent post={post} />
        </Article>
      )}

      {/* <Header
      title={generalSettings.title}
      description={generalSettings.description}
      />

      <Head>
        <title>
          {post?.title()} - {generalSettings.title}
        </title>
      </Head>

      <Hero
        title={post?.title()}
        bgImage={post?.featuredImage?.node?.sourceUrl()}
      />

      <main className="content content-single">
        <div className="wrap">
          <div dangerouslySetInnerHTML={{ __html: post?.content() ?? '' }} />
        </div>
      </main>

      <Footer copyrightHolder={generalSettings.title} /> */}
    </Layout>
  )
}

export default function Page() {
  const { usePost } = client
  const post = usePost()

  return <PostComponent post={post} />
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
    notFound: await is404(context, { client }),
  })
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

const Article = styled.article`
  overflow: hidden;
`
