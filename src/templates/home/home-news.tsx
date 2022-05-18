import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Image from 'next/image'
import Link from 'next/link'
import colors from 'components/colors'
import { container, mq } from 'components/grid'

const HomeNews = ({ posts }) => {
  const newsTitle = 'Noticias Recientes'

  return posts.nodes.length ? (
    <Container id="section_3">
      <Title>{newsTitle}</Title>
      <ColumnOne>
        {posts.nodes.slice(0, 1).map((item, index) => {
          const { title, excerpt, uri, featuredImage } = item
          return item.uri ? (
            <Card key={index} main>
              <Link href={uri} passHref>
                <SLink aria-label="Click para abrir el post...">
                  <CardMedia>
                    <Media>
                      <Image
                        src={featuredImage?.node?.mediaItemUrl}
                        alt={title()}
                        width={1920}
                        height={1080}
                        objectFit="cover"
                      />
                    </Media>
                  </CardMedia>
                  <CardBody>
                    <CardTitle main>{title}</CardTitle>
                    <Excerpt
                      main
                      dangerouslySetInnerHTML={{ __html: excerpt() }}
                    />
                  </CardBody>
                </SLink>
              </Link>
            </Card>
          ) : null
        })}
      </ColumnOne>
      <ColumnTwo>
        {posts.nodes.slice(1, 4).map((item, index) => {
          const { title, excerpt, uri, featuredImage } = item

          return item.uri ? (
            <Card key={index} bgDeco={colors.secondary.lighter}>
              <Link href={uri} passHref>
                <SLink aria-label="Click para abrir el post...">
                  <SubComlumn>
                    <CardMedia>
                      <Media>
                        <Image
                          src={featuredImage.node.mediaItemUrl}
                          alt={title()}
                          width={1920}
                          height={1080}
                          objectFit="cover"
                        />
                      </Media>
                    </CardMedia>

                    <CardBody>
                      <CardTitle>{title()}</CardTitle>
                      <Excerpt
                        dangerouslySetInnerHTML={{ __html: excerpt() }}
                      />
                    </CardBody>
                  </SubComlumn>
                </SLink>
              </Link>
            </Card>
          ) : null
        })}
      </ColumnTwo>
    </Container>
  ) : null
}

export default HomeNews

const Container = styled.section`
  ${container}

  margin-bottom: 9.6rem;
  margin-top: 9.6rem;
  display: grid;
  grid-template-columns: 100%;
  grid-template-areas:
    'col_1'
    'col_2';

  ${mq.lg} {
    grid-template-columns: 60% 40%;
    grid-template-areas: 'col_1 col_2';
  }
`

const ColumnOne = styled.div`
  grid-area: col_1;
  ${mq.lg} {
    margin-right: 2.5rem;
  }
`

const ColumnTwo = styled.div`
  grid-area: col_2;
`

const Title = styled.h2`
  background: ${colors.secondary.base};
  color: white;
  position: absolute;
  border-radius: 1rem;
  padding: 1.5rem;
  top: 0;
  left: 0;
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.5);
  z-index: 2;
  font-size: 1.7rem;
`

interface CardProps {
  bgDeco?: string
  main?: boolean
}

const Card = styled.div`
  ${({ bgDeco = 'green', main }: CardProps) => css`
    margin: 1.5rem;
    position: relative;
    ${main
      ? css``
      : css`
          &::before {
            content: '';
            background: ${bgDeco};
            position: absolute;
            width: 22%;
            padding-bottom: 22%;
            transform: translate(-2.5rem, -2rem);
          }
        `}
  `}
`

const CardMedia = styled.div`
  position: relative;
  margin-bottom: 1rem;
  padding-bottom: 56.25%;
  /* background-color: #fafafa; */
`

const Media = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`

const CardBody = styled.div``

interface CardTitleProps {
  main?: boolean
}
const CardTitle = styled.h3`
  ${({ main }: CardTitleProps) => css`
    font-weight: bold;
    margin-top: 0;
    text-transform: uppercase;
    ${main
      ? css``
      : css`
          ${mq.md} {
            font-size: 1.8rem;
          }
        `}
  `}
`

interface ExcerptProps {
  main?: boolean
}
const Excerpt = styled.div`
  ${({ main }: ExcerptProps) => css`
    color: ${colors.text.base};
    ${main
      ? css``
      : css`
          ${mq.lg} {
            display: none;
          }
        `}
  `}
`

const SLink = styled.a`
  text-decoration: none;
  color: gray;
`

const SubComlumn = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  ${mq.md} {
    grid-template-columns: 1fr 1fr;
    div {
      margin-right: 1rem;
    }
  }
`
