import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import { container, mq } from 'components/grid'
import ctas from 'styles/cta'
import { css } from '@emotion/react'
import { Recurso } from 'client'
import blur from 'styles/blur'

interface CardInfoProps {
  item: Recurso
}
const CardInfo = ({ item }: CardInfoProps) => {
  const { nombre, imagenPortada, descripcion, archivo } = item

  return (
    <Wrapper value={imagenPortada ? '50% auto' : '100%'}>
      <Content>
        <Title>{nombre}</Title>
        <Copy>{descripcion}</Copy>
        <Link href={archivo.sourceUrl() ?? ''} passHref>
          <SLink download target="_blank">
            Descargar
          </SLink>
        </Link>
      </Content>
      {imagenPortada ? (
        <Media>
          <Image
            src={imagenPortada.mediaItemUrl ?? blur}
            alt={nombre}
            width={1920}
            height={1920}
            objectFit="contain"
            blurDataURL={blur.src}
            placeholder="blur"
          />
        </Media>
      ) : null}
    </Wrapper>
  )
}

export default CardInfo

const Wrapper = styled.div`
  ${(props: { value?: string }) => css`
    display: grid;

    grid-template-columns: 100%;
    div:first-of-type {
      order: 2;
    }
    ${mq.lg} {
      grid-template-columns: ${props.value};
      div:last-of-type {
        order: 2;
      }
    }
  `}
`

const Content = styled.div`
  padding: 0 1.5rem;
`

const Title = styled.h2`
  margin-bottom: 3rem;
`

const Copy = styled.p`
  margin: 0 auto;
  margin-bottom: 4rem;
`

const Media = styled.div`
  width: 100%;
  align-self: center;
  margin: 2rem 0;
  height: fit-content;
  max-width: 30rem;
  box-shadow: 0.2rem 0.2rem 0.2rem rgba(0 0 0 / 0.5);
`

const SLink = styled.a`
  ${ctas}
`
