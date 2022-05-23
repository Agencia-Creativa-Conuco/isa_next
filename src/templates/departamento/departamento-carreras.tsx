import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import colors from 'components/colors'
import { css } from '@emotion/react'
import { container, mq } from 'components/grid'
import { Departamento, client } from 'client'
import blur from 'styles/blur'

interface DepartamentoProps {
  departamento: Departamento
}

const DepartamentoCarreras = ({ departamento }: DepartamentoProps) => {
  const facultad = departamento.facultad.node

  const { useQuery } = client

  const grados = useQuery()
    .grados()
    ?.nodes.filter((grado) => {
      return facultad
        .carreras()
        .nodes?.map((carrera) => carrera.grado.node.id)
        .includes(grado.id)
    })
    .sort((a, b) => a.orden - b.orden)

  return grados.length ? (
    <Section space thin>
      <Title color={facultad?.color}>Programas académicos</Title>

      {grados.map((grado, key) => (
        <ContainerRow key={key}>
          <SubTitle color={facultad?.color}>{grado.nombre}</SubTitle>

          <Container>
            {facultad
              .carreras()
              .nodes.filter((carrera) => carrera.grado.node.id === grado.id)
              .map((carrera, index) => {
                const { nombre, imagenPortada, uri } = carrera

                return (
                  <Link href={uri ?? '/'} key={index} passHref>
                    <StyledLink>
                      <Card>
                        <CardMedia>
                          <Image
                            src={imagenPortada.mediaItemUrl ?? blur}
                            width={1920}
                            height={1920}
                            objectFit="cover"
                            blurDataURL={blur.src}
                            placeholder="blur"
                          />
                        </CardMedia>
                        <CardTitle>{nombre}</CardTitle>
                      </Card>
                    </StyledLink>
                  </Link>
                )
              })}
          </Container>
        </ContainerRow>
      ))}
    </Section>
  ) : null
}

export default DepartamentoCarreras

const Section = styled.section`
  position: relative;
  ${container}
`
const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 3rem;
  justify-content: center;

  ${mq.md} {
    grid-template-columns: 50% 50%;
  }
`

const ContainerRow = styled.div`
  margin-bottom: 6rem;
`

const Card = styled.div`
  padding: 1.5rem;
  background-color: #fafafa;
  transition: all 0.25s ease-in-out;
  margin: 0.5rem 0;
  border-radius: 2rem;
  display: flex;
  gap: 1rem;
  &:hover {
    background-color: #f5f5f5;
  }
`

const CardMedia = styled.div`
  width: 8rem;
`

const CardTitle = styled.h3`
  color: ${colors.text.light};

  padding: auto 1.5rem;
  margin: 0;
  ${mq.md} {
    width: 50%;
  }
  ${mq.lg} {
    width: 100%;
  }
`

const Title = styled.h2`
  ${({ color = 'inherit' }) => css`
    text-align: center;
    margin-bottom: 4rem;
    color: ${color};
    font-weight: 900;
    margin-top: 10rem;
  `}
`

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
`
const SubTitle = styled.h3`
  ${({ color = 'inherit' }) => css`
    /* text-align: center; */
    margin-bottom: 2rem;
    padding-left: 1.5rem;
    color: ${color};
    text-transform: uppercase;
  `}
`
