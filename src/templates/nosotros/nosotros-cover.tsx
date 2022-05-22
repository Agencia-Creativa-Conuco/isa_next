import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import colors from 'components/colors'
import Link from 'next/link'
import ctas from 'styles/cta'
import Cta from 'components/CTA'
import { container, mq } from 'components/grid'
import cover from '../../../public/images/nosotros/cover.jpg'

const NosotrosCover = () => {
  const title = 'UNIVERSIDAD ISA'
  const copy =
    'La Universidad ISA propicia en sus aulas el desarrollo de líderes visionarios, guiados por los valores de honestidad, responsabilidad, respeto, compromiso social y calidad.'
  const cta = {
    title: 'Estudia con nosotros',
    url: '/admisiones',
    target: null,
  }

  return (
    <Container fluid>
      <Content>
        <SectionTitle> {title} </SectionTitle>
        <Copy>{copy} </Copy>

        {cta.url && cta.title ? (
          <Link href={cta.url} passHref>
            <SLink target={cta.target}>{cta.title}</SLink>
          </Link>
        ) : null}
      </Content>
      <Media>
        <Logo
          src={cover}
          alt="Sobre Universidad ISA"
          width={1920}
          height={1728}
          objectFit="cover"
          priority
        />
        <DivCube />
      </Media>
    </Container>
  )
}

export default NosotrosCover

const Container = styled.section`
  ${container}
  padding: 0;
  display: grid;
  grid-template-columns: 100%;

  div:first-of-type {
    order: 2;
  }
  ${mq.md} {
    grid-template-columns: 50% 50%;

    div:last-of-type {
      order: 2;
    }
  }
`

const Content = styled.div`
  margin: 3rem auto;
  padding: 0 1.5rem;
  max-width: 57rem;
  position: relative;
  align-self: center;
  &::before {
    content: '';
    position: absolute;
    width: 25%;
    padding-bottom: 25%;
    left: 0;
    bottom: 0;
    background-color: ${colors.blue.base};
    opacity: 20%;
    transform: translate(-50%, 50%);
    z-index: -1;
  }
`

const SectionTitle = styled.h1`
  margin-bottom: 2rem;
`

const Copy = styled.p`
  margin-bottom: 3rem;
`

const Media = styled.div`
  position: relative;
  margin-left: 10%;
  ${mq.md} {
    margin: 0;
  }
  &::before {
    content: '';
    position: absolute;
    width: 10%;
    padding-bottom: 10%;
    background: ${colors.blue.base};
    z-index: 10;
    left: 10%;
    top: 10%;
    box-shadow: 0 2.5rem 2.5rem rgba(0, 0, 0, 0.15);
  }
`

const Logo = styled(Image)`
  clip-path: ellipse(100% 100% at right 73%);
  z-index: 4;
`

const DivCube = styled.div`
  position: absolute;
  left: 0;
  bottom: 12%;
  width: 40%;
  padding-bottom: 15%;
  background: ${colors.primary.base};
  opacity: 80%;
  transform: translate(-75%, 0);
  z-index: 2;
  &::before {
    content: '';
    position: absolute;
    width: 35%;
    padding-bottom: 70%;
    top: 0;
    left: 0;
    background: ${colors.primary.base};
    opacity: 80%;
    z-index: 3;
  }
  &::after {
    content: '';
    position: absolute;
    left: 35%;
    top: 0;
    width: 65%;
    padding-bottom: 100%;
    background: ${colors.primary.light};
    opacity: 70%;
    transform: translate(0, -30%);
    z-index: 1;
  }
`

const SLink = styled.a`
  ${ctas}
`
