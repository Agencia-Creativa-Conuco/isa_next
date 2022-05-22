import React from 'react'
import Link from 'next/link'
import type { Post } from 'client'
import { HeadingProps } from './Heading'

import styled from '@emotion/styled'
import Image from 'next/image'
import { h3 } from 'styles/tipography'
import { container, mq } from 'components/grid'
import blur from 'styles/blur'

interface Props {
  posts: Post[] | undefined
  heading?: string
  headingLevel?: HeadingProps['level']
  postTitleLevel?: HeadingProps['level']
}

function Posts({
  posts,
  heading,
  headingLevel = 'h1',
  postTitleLevel = 'h2',
}: Props): JSX.Element {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Section as="article">
      <Container space large as={headingLevel}>
        <Title>{heading}</Title>
        <PostsList>
          {posts.map((post, key) => {
            return (
              <Link href={post.uri ?? ''} key={key} passHref>
                <SLink>
                  <Article>
                    <Image
                      src={post?.featuredImage?.node.mediaItemUrl ?? blur}
                      alt={post.title()}
                      width={1920}
                      height={1080}
                      objectFit="cover"
                      blurDataURL={blur.src}
                      placeholder="blur"
                      priority
                    />
                    <ItemTitle as={postTitleLevel}>{post.title()}</ItemTitle>
                    <Excerpt
                      dangerouslySetInnerHTML={{ __html: post.excerpt() }}
                    />
                  </Article>
                </SLink>
              </Link>
            )
          })}
        </PostsList>
      </Container>
    </Section>
  )
}

export default Posts

const Article = styled.article`
  margin-bottom: 4rem;
`

const Section = styled.article`
  padding: 0;
  margin-top: 5.5rem;
  margin-bottom: 5.5rem;

  ${mq.md} {
    margin-top: 12rem;
    margin-bottom: 9.6rem;
  }
`

const Container = styled.div`
  ${container}
`

const PostsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 2.5rem;
  grid-row-gap: 1rem;
  ${mq.md} {
    grid-template-columns: 1fr 1fr;
  }

  ${mq.lg} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
const Title = styled.h1`
  margin-bottom: 4rem;
`

const ItemTitle = styled.h2`
  ${h3}
  text-transform: initial;
  margin-top: 1rem;
`

const Excerpt = styled.div``

const SLink = styled.a`
  text-decoration: none;
  color: inherit;
  /* margin */
`
const ContainerBottom = styled.div`
  display: flex;
  justify-content: center;
`

const ColBottom = styled.span`
  margin: 0 4rem;
`
