import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Link from 'next/link'
import colors from 'components/colors'
import { container, mq } from 'components/grid'
import { Grado, Carrera } from 'client'

interface GradoProps {
  grado: Grado
}

const GradeOffer = ({ grado }: GradoProps) => {
  const carreras = grado.carreras({
    first: 100,
  })?.nodes

  const facultades = carreras.reduce((acu, carrera) => {
    const facultad = carrera.facultad.node
    if (facultad) {
      const existe = acu.map((item) => item.id).includes(facultad.id)

      if (!existe) {
        acu.push({
          id: facultad.id,
          nombre: facultad.nombre,
          uri: facultad.uri,
        })
      }
    }

    return acu
  }, [])

  return carreras.length ? (
    <Section>
      <SectionTitle>Oferta Académica</SectionTitle>

      {/* CARRERAS SIN FAULTADES ASIGNADAS */}
      <Carreras
        carreras={carreras.filter((carrera) => {
          return !carrera.facultad.node
        })}
      />
      {/* CARRERAS CON FACULTADES ASIGNADAS */}
      {facultades?.map((facultad, key) => {
        return (
          <Facultad key={key}>
            <Link href={facultad.uri ?? ''} passHref>
              <SLink>
                <Title
                  color={colors.primary.dark}
                  bgHover={colors.gray.light}
                  isFaculty
                >
                  {facultad.nombre}
                </Title>
              </SLink>
            </Link>
            <Carreras
              carreras={carreras.filter((carrera) => {
                return carrera.facultad?.node?.id === facultad?.id
              })}
            />
          </Facultad>
        )
      })}
    </Section>
  ) : null
}

export default GradeOffer

interface CarrerasProps {
  carreras: Carrera[]
}
const Carreras = ({ carreras }: CarrerasProps) => {
  return carreras.length ? (
    <Container>
      {carreras.map((carrera, key) => {
        return (
          <Link href={carrera.uri ?? ''} key={key} passHref>
            <SLink>
              <Title
                color={colors.text.base}
                bgHover={colors.gray.light}
                isCareer
              >
                {carrera.nombre}
              </Title>
            </SLink>
          </Link>
        )
      })}
    </Container>
  ) : null
}

const Facultad = styled.div`
  margin-bottom: 4rem;
`

const Section = styled.section`
  ${container}
  overflow: hidden;
  padding: 0;
  background-color: #fefefe;
  padding-bottom: 10rem;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  margin-bottom: 4rem;
  ${mq.md} {
    grid-template-columns: 50% 50%;
  }
`

const SectionTitle = styled.h2`
  text-align: center;
  font-weight: 900;
  margin-bottom: 4rem;
  margin-top: 0.5rem;
  font-weight: 400;
  color: ${colors.primary.base};
`

const Title = styled.span`
  ${(props: {
    isFaculty?: boolean
    isCareer?: boolean
    color?: string
    bgHover: string
  }) => css`
    color: ${props.color ?? 'blue'};
    padding: 0.5rem 1.5rem;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 2rem;
    display: inline-block;
    ${mq.md} {
      display: inline-block;
    }
    &:hover {
      background-color: ${props.bgHover ?? 'lightgray'};
    }
    ${props.isFaculty
      ? css`
          font-weight: 900;
        `
      : props.isCareer
      ? css`
          text-transform: capitalize;
          font-weight: 400;
        `
      : css`
          font-weight: 300;
        `}
  `}
`

const SLink = styled.a`
  text-decoration: none;
`
