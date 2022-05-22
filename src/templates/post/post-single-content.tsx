import React from 'react'
import styled from '@emotion/styled'
import colors from 'components/colors'
import { container, mq } from 'components/grid'
import { Post } from 'client'

interface PostCotentProps {
  post?: Post
}
const PostContent = ({ post }: PostCotentProps) => {
  const { content } = post

  return (
    <Section>
      <Container>
        <BgDeco />
        <Container>
          <Content dangerouslySetInnerHTML={{ __html: content() }} />
        </Container>
      </Container>
    </Section>
  )
}

export default PostContent

const Section = styled.section``
const Container = styled.div`
  ${container}
`

const BgDeco = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 50%;
  width: 110%;
  height: 100%;
  color: white;
  transform: translateX(-50%);
  background: ${colors.gray.light};
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 7%;
    padding-bottom: 15%;
    transform: translate(-50%, -20%);
    color: white;
    background-color: ${colors.primary.light};
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 100%;
    width: 100%;
    height: 100%;
    background-color: ${colors.primary.base};
  }
`

const Content = styled.div`
  padding: 4rem 0;
  ${mq.md} {
    padding: 6rem 0;
  }
  ${mq.lg} {
    max-width: 75rem;
    margin: 0 auto;
  }
`
