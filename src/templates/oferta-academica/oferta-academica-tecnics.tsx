import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import colors from 'components/colors'
import Link from 'next/link'
import ctas from 'styles/cta'
// import Cta from "../../../components/cta";
import { container, mq } from 'components/grid'
import centroHuascar from '../../../public/images/oferta-academica/centro_huascar.jpg'

const OfferTecnics = (props) => {
  const title = 'Centro de Educación Técnica Huáscar Rodríguez Herrera',
    content = `
            <p>El Centro Huáscar Rodríguez tiene la finalidad de potenciar el dinamismo y crecimiento socio-económico nacional, a través de las capacitaciones técnicas de recursos humanos en los sectores más productivos del país, como son: Sector Construcción, Sector Empresarial y Sector Agropecuario.</p>
            <p>Desde nuestro Centro de Educación Técnica, apoyamos al personal que se dedica a ofrecer estos servicios, para que obtenga la debida certificación que los acredite como entes capacitados en sus respectivas áreas.</p>
        `

  return (
    <Section fluid {...props}>
      <Media>
        <Image
          src={centroHuascar}
          alt={title}
          width={1920}
          height={1080}
          objectFit="cover"
          placeholder="blur"
        />
      </Media>
      <Container>
        <DivTitle>
          <SectionTitle>{title}</SectionTitle>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          <Link
            href="/centro-de-educacion-tecnica-huascar-rodriguez-herrera"
            passHref
          >
            <SLink>Conocer más</SLink>
          </Link>
        </DivTitle>
        <DecoCol />
      </Container>
    </Section>
  )
}

export default OfferTecnics

const Section = styled.section`
  ${container}
  padding: 0;
  background: ${colors.gray.light};
  z-index: 2;
  display: grid;
  grid-template-columns: 100%;
  position: relative;
  ${mq.lg} {
    grid-template-columns: 50% 50%;
    div:first-of-type {
      order: 2;
    }
  }
`

const Container = styled.div`
  position: relative;
  padding: 0 1.5rem;
  grid-template: 'area1';
`

const DivTitle = styled.div`
  max-width: 57rem;
  margin: 10% auto;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    background-color: ${colors.blue.base};
    padding: 3%;
    left: 0;
    opacity: 0.8;
    transform: translate(2rem, 2rem);
    z-index: -1;
  }
`

const SectionTitle = styled.h2`
  margin-bottom: 4rem;
`

const DecoCol = styled.div`
  position: absolute;
  background-color: ${colors.blue.base};
  width: 15%;
  padding-bottom: 15%;
  right: 0;
  bottom: 0;
  opacity: 80%;
  transform: translate(25%, 0);
  z-index: 0;
  &:after {
    content: '';
    position: absolute;
    background-color: ${colors.blue.base};
    width: 40%;
    padding-bottom: 40%;
    top: 0;
    left: 0;
    opacity: 40%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
`

const SLink = styled.a`
  ${ctas}
`

const Media = styled.div`
  display: grid;
`
