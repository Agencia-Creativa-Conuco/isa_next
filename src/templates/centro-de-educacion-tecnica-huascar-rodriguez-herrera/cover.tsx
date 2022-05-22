import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Image from 'next/image'
import colors from 'components/colors'
import { container, mq } from 'components/grid'
import cover from '../../../public/images/centro-de-educacion-tecnica-huascar-rodriguez-herrera/cover.jpg'
import infotepLogo from '../../../public/images/centro-de-educacion-tecnica-huascar-rodriguez-herrera/infotep_logo.png'

const NosotrosCover = () => {
  const title = 'Centro de Educación Técnica Huascar Rodríguez Herrera'
  const copy = `
      <p>
      El Centro de Educación Técnica Huáscar Rodríguez Herrera surge
      en el 2011, como una iniciativa conjunta entre la Familia
      Rodríguez Herrera, a través de su empresa Cementos Cibao, la
      República China (Taiwán), y la Universidad ISA, con el objetivo
      de formar y capacitar los recursos humanos demandados por el
      Sector Construcción.
    </p>
    <p>
      Continuando con el apoyo en las capacitaciones de los talentos
      humanos, el centro amplió su oferta formativa a nivel técnico,
      agregando acciones en los sectores Agroindustrial y Empresarial
      (Servicio).
    </p>
  `

  return (
    <Container fluid>
      <Content>
        <SectionTitle> {title} </SectionTitle>
        <Copy dangerouslySetInnerHTML={{ __html: copy }} />
        <Infotep>
          <Image src={infotepLogo} loading="eager" />
        </Infotep>
      </Content>
      <div>
        <Media>
          <Logo
            src={cover}
            alt={title}
            width={1920}
            height={1728}
            objectFit="cover"
            objectPosition="35% 50%"
            priority
            placeholder="blur"
          />
          <DivCube />
        </Media>
      </div>
    </Container>
  )
}

export default NosotrosCover

const Container = styled.section`
  ${container}
  padding: 0;
  display: grid;
  grid-template-columns: 100%;
  overflow: hidden;

  div:first-of-type {
    order: 2;
  }
  ${mq.lg} {
    grid-template-columns: 50% 50%;

    div:last-of-type {
      order: 2;
    }
  }
`

const Content = styled.div`
  margin: 4rem auto;
  padding: 0 1.5rem;
  max-width: 60rem;
  position: relative;
  align-self: center;
  z-index: 5;
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

const Infotep = styled.div`
  max-width: 15rem;
`

const Media = styled.div`
  position: relative;
  margin-left: 20%;

  ${mq.md} {
    margin-left: 25%;
  }
  ${mq.lg} {
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
