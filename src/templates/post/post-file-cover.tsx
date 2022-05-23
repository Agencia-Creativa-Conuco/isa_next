import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Cta from 'components/CTA'
import colors from 'components/colors'
import { container, mq } from 'components/grid'
import { Post } from 'client'
import blur from 'styles/blur'

interface FileCoverProps {
  post?: Post
}
const FileCover = ({ post }: FileCoverProps) => {
  const { title, content, featuredImage, datosPublicacion } = post

  const archivo = datosPublicacion.archivo
  return (
    <Section>
      <Wrapper>
        <Container>
          <ImageContainer>
            <Image
              src={featuredImage?.node?.mediaItemUrl ?? blur}
              width={1920}
              height={2476.8}
              objectFit="cover"
              blurDataURL={blur.src}
              placeholder="blur"
              priority
            />
          </ImageContainer>

          <div>
            <Content>
              <Title>{title()}</Title>
              <div dangerouslySetInnerHTML={{ __html: content() }} />
            </Content>
            <CTABox>
              <Cta to={archivo.mediaItemUrl ?? ''} download target="_blank">
                Descargar
              </Cta>
            </CTABox>
          </div>
        </Container>
      </Wrapper>
    </Section>
  )
}

export default FileCover

const Section = styled.section`
  position: relative;
  margin-bottom: 8rem;
  margin-top: 8rem;
  ${mq.md} {
    margin-bottom: 16rem;
    margin-top: 16rem;
  }
`
const Container = styled.div`
  ${container}
  display:grid;
  gap: 3rem;
  grid-template-columns: 100%;
  ${mq.sm} {
    grid-template-columns: 40% 60%;
  }
  ${mq.md} {
    grid-template-columns: 31% 60%;
  }
`

const Wrapper = styled.div`
  margin-top: 12rem;
  padding: 1rem;
`

const ImageContainer = styled.div`
  position: relative;
  max-width: 25rem;
  width: 25rem;
  background-color: gray;
  font-size: 0;
  ${mq.sm} {
    max-width: 40rem;
    width: initial;
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 45%;
    height: 0;
    padding-bottom: 45%;
    background-color: ${colors.secondary.light};
    transform: translate(-10%, -10%);
    z-index: -1;
    opacity: 0.5;
  }
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 30%;
    height: 0;
    padding-bottom: 30%;
    background-color: ${colors.secondary.light};
    transform: translate(8%, 8%);
    z-index: -1;
    opacity: 0.5;
  }
`

const Content = styled.div``

const CTABox = styled.div`
  margin-top: 2rem;
  ${mq.md} {
    margin-top: 4rem;
  }
`

const Title = styled.h1`
  margin-bottom: 0.5rem;
`
