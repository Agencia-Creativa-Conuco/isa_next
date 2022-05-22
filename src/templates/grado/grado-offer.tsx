import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Link from 'next/link'
import colors from 'components/colors'
import { container, mq } from 'components/grid'
import { client, Grado } from 'client'
import Layout from 'components/layout'

interface GradoProps {
  grado: Grado
}

const GradeOffer = ({ grado }: GradoProps) => {
  const { useQuery } = client

  const carreras = grado.carreras({
    first: 100,
  }).nodes

  const facultades = useQuery()
    .facultades({
      first: 100,
    })
    .nodes.filter((facultad) =>
      carreras.map((carrera) => carrera.facultad.node.id).includes(facultad.id),
    )

  return facultades.length ? (
    <Layout>
      <Section>
        <SectionTitle>Oferta Académica</SectionTitle>

        {facultades?.map((facultad, key) => {
          return (
            <Facultad key={key}>
              <Link href={facultad.uri ?? ''}>
                <Title
                  color={colors.primary.dark}
                  bgHover={colors.gray.light}
                  isFaculty
                >
                  {facultad.nombre}
                </Title>
              </Link>
              <Container>
                {carreras
                  .filter((carrera) => {
                    return (
                      carrera.grado.node.id === grado.id &&
                      carrera.facultad.node.id === facultad.id
                    )
                  })
                  .map((carrera, key) => {
                    return (
                      <Link href={carrera.uri ?? ''} key={key}>
                        <Title
                          color={colors.text.base}
                          bgHover={colors.gray.light}
                          isCareer
                        >
                          {carrera.nombre}
                        </Title>
                      </Link>
                    )
                  })}
              </Container>
            </Facultad>
          )
        })}
      </Section>
    </Layout>
  ) : null
}

export default GradeOffer

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
  ${mq.md} {
    grid-template-columns: 50% 50%;
  }
`

const ContainerSpecial = styled.div`
  display: grid;
  grid-template-columns: 100%;
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
