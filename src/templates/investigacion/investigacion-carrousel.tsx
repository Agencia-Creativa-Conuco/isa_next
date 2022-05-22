import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { mq, container } from 'components/grid'
import Image from 'next/image'
import Carousel from 'react-slick'
import { LeftArrowIcon, RightArrowIcon } from '../../components/icons'
import colors from 'components/colors'
import blur from 'styles/blur'
import { Investigacion } from 'client'

const Arrows = (props) => {
  interface ArrowProps {
    bgColor?: string
    color?: string
  }
  const Arrow = styled.div`
    ${({ bgColor = 'blue', color = 'white' }: ArrowProps) => css`
      padding: 1rem;
      border-radius: 50%;
      background-color: ${bgColor};
      color: ${color};
      width: 5rem;
      height: 5rem;
      margin: 0 3rem;
      z-index: 2;
      position: absolute;
      top: 50%;
      display: none !important;
      ${mq.lg} {
        display: block !important;
      }
      &:focus {
        background-color: ${bgColor};
        color: ${color};
      }
      &:hover {
        background-color: ${bgColor};
        color: ${color};
      }
      &:before {
        content: initial;
      }
    `}
  `

  return <Arrow {...props} />
}
interface InvestigacionCarrouselProps {
  investigacion: Investigacion
}
const InvestigacionCarrousel = ({
  investigacion,
}: InvestigacionCarrouselProps) => {
  const imagenes = investigacion.datosInvestigacion.imagenes

  return imagenes.length ? (
    <Section spaceTop fluid>
      <SliderWrapper>
        <Carousel
          infinite={true}
          slidesToShow={3}
          slidesToScroll={1}
          centerMode
          prevArrow={
            <Arrows color={'white'} bgColor={colors.primary.base}>
              <LeftArrowIcon />
            </Arrows>
          }
          nextArrow={
            <Arrows color={'white'} bgColor={colors.primary.base}>
              <RightArrowIcon />
            </Arrows>
          }
          responsive={[
            {
              breakpoint: mq.smv,
              settings: {
                slidesToShow: 1,
                centerMode: true,
                variableWidth: false,
              },
            },
            {
              breakpoint: mq.mdv,
              settings: {
                slidesToShow: 2,
                centerMode: false,
                variableWidth: false,
              },
            },
            {
              breakpoint: mq.lgv,
              settings: {
                slidesToShow: 3,
                centerMode: false,
                variableWidth: false,
              },
            },
          ]}
        >
          {imagenes.map((imagen, index) => {
            return (
              <SlideStyle key={index}>
                <Image
                  src={imagen.mediaItemUrl ?? blur}
                  width={1920}
                  height={1344}
                  objectFit="cover"
                  blurDataURL={blur.src}
                  placeholder="blur"
                  priority
                />
              </SlideStyle>
            )
          })}
        </Carousel>
      </SliderWrapper>
    </Section>
  ) : null
}

export default InvestigacionCarrousel

const Section = styled.section`
  ${container}
  padding: 0;
`

const SliderWrapper = styled.div``

const SlideStyle = styled.div``
