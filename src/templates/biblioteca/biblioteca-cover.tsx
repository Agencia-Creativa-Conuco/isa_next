import React from 'react'
import styled from '@emotion/styled'
import FeaturedMedia from 'next/image'
import colors from 'components/colors'
import Cta from 'components/CTA'
import { container, mq } from 'components/grid'
import cover from '../../../public/images/biblioteca/cover.jpg'

const Biblioteca = () => {
  const title = 'Biblioteca',
    copy =
      'La biblioteca de la Universidad ISA, se concibe como un centro de información y fuente de conocimiento en permanente renovación. Su accionar, está orientado a la búsqueda del crecimiento científico y espiritual de toda la comunidad universitaria, a través del contacto con los medios y actores que sirven de catalizador'

  return (
    <Section fluid>
      <Content>
        <SectionTitle>{title} </SectionTitle>
        <Copy>{copy}</Copy>
        <Cta to="http://bibliotecaunisa.com/" rel="noopener" target="_blank">
          ir al Sitio oficial
        </Cta>
      </Content>
      <Media>
        <Logo
          src={cover ?? ''}
          width={1920}
          height={1536}
          objectFit="cover"
          priority
        />
      </Media>
    </Section>
  )
}

export default Biblioteca

const Section = styled.section`
  ${container}
  overflow: hidden;
  padding: 0;
  display: grid;
  grid-template-columns: 100%;
  div:first-of-type {
    order: 2;
  }
  ${mq.lg} {
    grid-template-columns: 50% 50%;
    div:last-of-type {
      order: 2;
    }
  }
  ${mq.lg} {
    grid-template-columns: 43% 57%;
  }
`

const Content = styled.div`
  margin: 2rem auto;
  max-width: 50rem;
  position: relative;
  align-self: center;
  padding: 0 1.5rem;
`

const SectionTitle = styled.h1`
  margin-bottom: 2.5rem;
`

const Copy = styled.p`
  margin-bottom: 2rem;
`

const Media = styled.div`
  position: relative;
  font-size: 0;
  ${mq.md} {
    margin-left: auto;
    max-width: 80%;
  }
  ${mq.lg} {
    margin-left: initial;
    max-width: inherit;
  }
  &::before {
    content: '';
    position: absolute;
    padding: 27%;
    clip-path: circle(50% at 50% 50%);
    background: ${colors.secondary.light};
    z-index: 1;
    left: 7%;
    top: -25%;
    box-shadow: 0 2.5rem 2.5rem rgba(0, 0, 0, 0.15);
  }
  &::after {
    content: '';
    position: absolute;
    top: 15%;
    left: 9%;
    padding: 4%;
    background-color: ${colors.secondary.dark};
    clip-path: circle(50% at 50% 50%);
    z-index: 2;
    ${mq.lg} {
      top: 18%;
      left: 5%;
    }
  }
`

const Logo = styled(FeaturedMedia)`
  clip-path: ellipse(100% 100% at right 88%);
  z-index: 4;
`
