import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Carousel from 'react-slick'
import { LeftArrowIcon, RightArrowIcon } from './icons'
import colors from 'components/colors'
import { container, mq } from 'components/grid'
import { Investigador } from 'client'
import blur from 'styles/blur'

interface TeamSliderProps {
  investigadores?: Investigador[]
  title?: string
}
const TeamSlider = ({
  investigadores,
  title = 'Equipo de investigación',
}: TeamSliderProps) => {
  //Aseguro que la  priimera letra del nombre empiece con mayúscula.
  // investigadores.map((item) => {
  //   item.nombre = item.nombre?.charAt(0).toUpperCase() + item.nombre?.slice(1)
  //   return item
  // })

  //ordena de forma alfabética
  const researchers = investigadores?.sort((a, b) => {
    if (a.nombre < b.nombre) return -1
    if (a.nombre > b.nombre) return 1
    return 0
  })

  const Arrows = (props) => {
    const Arrow = styled.div`
      padding: 1rem;
      border-radius: 50%;
      background-color: ${colors.primary.base};
      color: white;
      width: 5rem;
      height: 5rem;
      margin: 2rem;
      z-index: 2;
      ${mq.md} {
        transform: translate(0, -100%);
      }
      &:focus {
        background-color: ${colors.primary.base};
        color: white;
      }
      &:hover {
        background-color: ${colors.primary.base};
        color: white;
      }
      &:before {
        content: initial;
      }
    `

    return <Arrow {...props} />
  }

  return researchers?.length ? (
    <Section>
      <Container fluid>
        <SectionTitle> {title} </SectionTitle>
        <Carousel
          className="center"
          infinite
          fade
          rows={2}
          slidesPerRow={4}
          prevArrow={
            <Arrows bgColor={colors.primary.base}>
              <LeftArrowIcon />
            </Arrows>
          }
          nextArrow={
            <Arrows bgColor={colors.primary.base}>
              <RightArrowIcon />
            </Arrows>
          }
          responsive={[
            {
              breakpoint: mq.lgv,
              settings: {
                rows: 2,
                slidesPerRow: 3,
              },
            },
            {
              breakpoint: mq.mdv,
              settings: {
                rows: 2,
                slidesPerRow: 2,
              },
            },
            {
              breakpoint: mq.smv,
              settings: {
                rows: 2,
                slidesPerRow: 1,
              },
            },
          ]}
        >
          {researchers?.map((item, index) => {
            const {
              nombre,
              imagenPortada,
              puestoTrabajo,
              tituloAcademicoAbreviado,
              inicialesTituloAcademico,
            } = item

            return (
              <Card key={index}>
                <Media>
                  <Image
                    src={imagenPortada?.mediaItemUrl ?? blur}
                    alt={nombre}
                    width={1920}
                    height={1920}
                    objectFit="cover"
                    blurDataURL={blur.src}
                    placeholder="blur"
                  />
                </Media>
                <DivTitle>
                  <Name>
                    {inicialesTituloAcademico
                      ? `${inicialesTituloAcademico} `
                      : ''}{' '}
                    {nombre}, {tituloAcademicoAbreviado}
                  </Name>
                  <JobTitle>{puestoTrabajo}</JobTitle>
                </DivTitle>
              </Card>
            )
          })}
        </Carousel>
      </Container>
    </Section>
  ) : null
}

export default TeamSlider

const Section = styled.section`
  position: relative;
  background: ${colors.gray.light};
  padding: 4rem 0;
  z-index: 3;
`

const Container = styled.div`
  ${container}

  ${mq.lg} {
    max-width: 1140px;
  }
`
const Card = styled.article`
  margin-bottom: 4rem;
  vertical-align: top;
`

const Media = styled.div`
  border-radius: 50%;
  overflow: hidden;
  max-width: 18rem;
  margin: 0 auto;
`

const DivTitle = styled.div`
  text-align: center;
`

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 4rem;
`

const Name = styled.h3`
  font-weight: bold;
  margin-bottom: 0;
  font-size: 2rem;
`

const JobTitle = styled.p`
  color: black;
`
