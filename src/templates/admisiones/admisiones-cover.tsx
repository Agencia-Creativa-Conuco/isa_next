import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import colors from 'components/colors'
import Link from 'next/link'
import { container, mq } from 'components/grid'
import coverImage from '../../../public/images/admisiones/cover.jpg'
import ctas from 'styles/cta'

const AdmisionesCover = () => {
  const title = 'Estudia con nosotros',
    copy =
      'Sigue estos pasos y estudia con nosotros, aplica para vivir una experiencia educativa de calidad que marcará un antes y un después en tu carrera profesional. ¿Estás listo?',
    cta = {
      url: '#form',
      title: 'Aplicar',
    }
  return (
    <Section fluid>
      <DivLogo>
        <DecoLogo>
          <Media>
            <Image
              src={coverImage}
              alt="Admisiones Universidad ISA"
              width={1920}
              height={1728}
              objectFit="cover"
              objectPosition="35% 50%"
              priority
              placeholder="blur"
            />
          </Media>
        </DecoLogo>
      </DivLogo>
      <Content>
        <SectionTitle>{title}</SectionTitle>
        <Copy>{copy}</Copy>
        <Link href={cta.url} passHref>
          <StyledCTA paddingX="7rem">{cta.title}</StyledCTA>
        </Link>
      </Content>
    </Section>
  )
}

export default AdmisionesCover

const Section = styled.section`
  ${container}
  padding: 0;

  display: grid;
  grid-template-columns: 100%;

  ${mq.md} {
    grid-template-columns: 50% 50%;
  }
`

const Content = styled.div`
  align-self: center;
  position: relative;
  max-width: 58rem;
  padding: 7% 1.5rem;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;

  ${mq.md} {
    &:after {
      content: '';
      position: absolute;
      top: 0%;
      right: 0%;
      transform: translate(90%, -40%);
      background-color: ${colors.secondary.light};
      padding: 5%;
      opacity: 0.7;
      z-index: -1;
    }
  }
`

const SectionTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 3rem;
  text-align: center;

  ${mq.md} {
    text-align: left;
  }
`

const Copy = styled.p``

const StyledCTA = styled.a`
  ${ctas}
  ${mq.md} {
    margin-top: 3rem;
  }
`

const DivLogo = styled.div`
  position: relative;
  &::before {
    content: '';
    background-color: ${colors.secondary.light};
    position: absolute;
    padding: 15%;
    bottom: 0;
    right: 0;
    transform: translate(2rem, 0);
    opacity: 0.3;
  }

  &::after {
    content: '';
    background-color: ${colors.secondary.light};
    position: absolute;
    padding: 20%;
    bottom: 0;
    right: 0;
    transform: translate(2rem, 0rem);
    opacity: 0.2;
  }
`

const DecoLogo = styled.div`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    padding: 5%;
    right: 13%;
    top: 27%;
    background-color: ${colors.secondary.light};
    opacity: 0.7;
  }
  &&:after {
    content: '';
    position: absolute;
    padding: 1.7%;
    right: 6%;
    top: 22%;
    background-color: ${colors.secondary.light};
    opacity: 0.7;
  }
`

const Media = styled.div`
  clip-path: ellipse(97% 100% at left 88%);
  z-index: 5;
  font-size: 0;
`
