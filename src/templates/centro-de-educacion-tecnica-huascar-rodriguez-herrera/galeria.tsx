import React from 'react'
import styled from '@emotion/styled'
import Carousel from 'react-slick'
import Image from 'next/image'
import colors from 'components/colors'
import { LeftArrowIcon, RightArrowIcon } from 'components/icons'
import { container, mq } from 'components/grid'
import galeria01 from '../../../public/images/centro-de-educacion-tecnica-huascar-rodriguez-herrera/galeria01.jpg'
import galeria02 from '../../../public/images/centro-de-educacion-tecnica-huascar-rodriguez-herrera/galeria02.jpg'
import galeria03 from '../../../public/images/centro-de-educacion-tecnica-huascar-rodriguez-herrera/galeria03.jpg'
import galeria04 from '../../../public/images/centro-de-educacion-tecnica-huascar-rodriguez-herrera/galeria04.jpg'
import galeria05 from '../../../public/images/centro-de-educacion-tecnica-huascar-rodriguez-herrera/galeria05.jpg'
import galeria06 from '../../../public/images/centro-de-educacion-tecnica-huascar-rodriguez-herrera/galeria06.jpg'
import galeria07 from '../../../public/images/centro-de-educacion-tecnica-huascar-rodriguez-herrera/galeria07.jpg'
import galeria08 from '../../../public/images/centro-de-educacion-tecnica-huascar-rodriguez-herrera/galeria08.jpg'
import galeria09 from '../../../public/images/centro-de-educacion-tecnica-huascar-rodriguez-herrera/galeria09.jpg'
import galeria10 from '../../../public/images/centro-de-educacion-tecnica-huascar-rodriguez-herrera/galeria10.jpg'
import galeria11 from '../../../public/images/centro-de-educacion-tecnica-huascar-rodriguez-herrera/galeria11.jpg'
import galeria12 from '../../../public/images/centro-de-educacion-tecnica-huascar-rodriguez-herrera/galeria12.jpg'

const Arrows = (props) => {
  const Arrow = styled.div`
    border-radius: 50%;
    background-color: white;
    color: ${colors.primary.dark};
    margin: 0 3rem;
    z-index: 2;
    position: absolute;
    top: 50%;

    ${mq.md} {
      display: block !important;
      width: 5rem;
      height: 5rem;
      padding: 1rem;
    }
    &:focus {
      background-color: white;
      color: ${colors.primary.dark};
    }
    &:hover {
      background-color: white;
      color: ${colors.primary.dark};
    }
    &:before {
      content: initial;
    }
  `

  return <Arrow {...props} />
}

const Galeria = () => {
  const images = [
    galeria01,
    galeria02,
    galeria03,
    galeria04,
    galeria05,
    galeria06,
    galeria07,
    galeria08,
    galeria09,
    galeria10,
    galeria11,
    galeria12,
  ]

  return (
    <Section fluid>
      <Carousel
        prevArrow={
          <Arrows>
            <LeftArrowIcon />
          </Arrows>
        }
        nextArrow={
          <Arrows>
            <RightArrowIcon />
          </Arrows>
        }
        autoplay
        pauseOnHover
      >
        {Object.values(images).map((image, index) => {
          return (
            <Media>
              <Image
                key={index}
                src={image}
                alt={
                  'Centro De Educación Técnica Huascar Rodríguez Herrera - Oferta Técnia - Imagen ' +
                  index
                }
                width={1920}
                height={1080}
                objectFit="cover"
                objectPosition="35% 50%"
                placeholder="blur"
              />
            </Media>
          )
        })}
      </Carousel>
    </Section>
  )
}

export default Galeria

const Section = styled.section`
  ${container}
  padding: 0;
  display: grid;
  grid-template-columns: 100%;
`

const Media = styled.div`
  display: grid !important;
  height: 56.25vw;
  font-size: 0;
  ${mq.lg} {
    height: 50vw;
  }
  ${mq.xl} {
    height: 40vw;
  }
`
