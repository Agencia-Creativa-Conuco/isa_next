import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import colors from 'components/colors'
import { container, mq } from 'components/grid'
import cover from '../../../public/images/investigacion/cover.jpg'

const DIPCover = () => {
  const title = 'Investigación',
    copy =
      'La Vicerrectoría de Investigaciones es la unidad operativa de la Universidad ISA que tiene como misión institucional normar, dirigir y desarrollar las actividades de investigación de la institución.',
    featuredImage = cover

  return (
    <Section fluid>
      <Content as="div">
        <Title> {title} </Title>
        <Copy>{copy}</Copy>
      </Content>
      <DecoLogo>
        <Logo
          src={featuredImage}
          alt={title}
          width={1920}
          height={1728}
          priority
          objectFit="cover"
        />
      </DecoLogo>
    </Section>
  )
}

export default DIPCover

const Section = styled.section`
  ${container}
  padding: 0;

  display: grid;
  grid-template-columns: 100%;

  &:before {
    content: '';
    position: absolute;
    top: 10%;
    left: 0%;
    width: 30%;
    padding-bottom: 30%;
    border-radius: 50%;
    background: ${colors.cta.base};
    transform: translate(-90%, 0);
  }
  div:first-of-type {
    order: 2;
  }
  ${mq.md} {
    grid-template-columns: 45% 55%;

    div:last-of-type {
      order: 2;
    }
  }
  ${mq.lg} {
    grid-template-columns: 50% 50%;
  }
`

const Content = styled.div`
  max-width: 60rem;
  align-self: center;
  padding: 0 1.5rem;
  margin: 10% auto;
  z-index: 2;
`

const Title = styled.h1`
  margin-top: 0;
`

const Copy = styled.p``

const Logo = styled(Image)`
  clip-path: ellipse(100% 100% at right);
`

const DecoLogo = styled.div`
  margin-left: 9%;
  font-size: 0;
  ${mq.md} {
    margin-left: 0;
  }
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: -8%;
    bottom: 15%;
    padding: 8%;
    clip-path: circle(50% at 50% 50%);
    background: ${colors.primary.dark};
  }
`
