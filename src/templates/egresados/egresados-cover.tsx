import React from 'react'
import styled from '@emotion/styled'
import container, { gap } from 'components/grid/container'
import colors from 'components/colors'
import Image from 'next/image'
import { mq } from 'components/grid'
import cover from '../../../public/images/egresados/cover.jpg'

const EgresadosCover = (props) => {
  const data = {
    titulo: 'Egresados',
    copy:
      'Mantiene una comunicación permanente con los egresados facilitando su actualización profesional y el fortalecimiento de su vínculo con la Universidad.',
    imagenPortada: cover,
  }

  return (
    <Cover fluid>
      <Media>
        <Deco />
        <CoverImage
          src={data.imagenPortada}
          alt={data.titulo}
          objectPosition="50% 100%"
          width={1920}
          height={1536}
          objectFit="cover"
          priority
        />
      </Media>
      <Content>
        <Title>{data.titulo}</Title>
        <Copy>{data.copy}</Copy>
      </Content>
    </Cover>
  )
}

export default EgresadosCover

const Cover = styled.section`
  ${container}
  display: grid;
  justify-content: end;
  grid-template-columns: 17% 1fr 1fr;
  padding: 0;
  grid-template-areas:
    'col col_1 col_1'
    'col_2  col_2  col_2';
  ${mq.md} {
    align-items: center;
    grid-template-columns: 50% 1fr;
    grid-template-areas: 'col_2 col_1';
  }
`

const Content = styled.div`
  padding: 4rem ${gap};
  position: relative;
  z-index: 1;
  justify-self: center;
  grid-area: col_2;
  max-width: 54rem;

  ${mq.md} {
    order: 1;
    max-width: 36rem;
  }
  ${mq.lg} {
    order: 1;
    max-width: 48rem;
  }
  ${mq.lg} {
    order: 1;
    max-width: 57rem;
  }
`

const Title = styled.h2`
  margin-top: 0;
  ${mq.lg} {
  }
`

const Copy = styled.div``

const Media = styled.div`
  position: relative;
  grid-area: col_1;
  font-size: 0;
  &:after {
    content: '';
    position: absolute;
    left: 2%;
    bottom: 0;
    transform: translate(-88%, 0);
    background-color: ${colors.primary.light};
    width: 17%;
    padding-bottom: 17%;
    z-index: 1;
    clip-path: ellipse(100% 100% at 100% 100%);
  }
`

const CoverImage = styled(Image)`
  z-index: 2;
  clip-path: ellipse(100% 100% at right);
`

const Deco = styled.div`
  position: absolute;
  left: 3.5%;
  bottom: 0;
  background-color: ${colors.primary.dark};
  width: 17%;
  padding-bottom: 17%;
  z-index: 1;
  /* position: relative; */

  &:before {
    content: '';
    position: absolute;
    left: -40%;
    top: -40%;
    background-color: ${colors.primary.dark};
    width: 40%;
    padding-bottom: 40%;
    z-index: 2;
  }
  &:after {
    content: '';
    position: absolute;
    left: -65%;
    top: -65%;
    background-color: ${colors.primary.light};
    width: 30%;
    padding-bottom: 30%;
    z-index: 2;
    border-radius: 50%;
  }
`
