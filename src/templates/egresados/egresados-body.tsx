import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import colors from 'components/colors'
import Image from 'next/image'
import { container, mq } from 'components/grid'
import Carousel from 'react-slick'
import agisa01 from '../../../public/images/servicios-estudiantiles/agisa01.jpg'
import agisa02 from '../../../public/images/servicios-estudiantiles/agisa02.jpg'
import agisa03 from '../../../public/images/servicios-estudiantiles/agisa03.jpg'
import agisa04 from '../../../public/images/servicios-estudiantiles/agisa04.jpg'
import agisa05 from '../../../public/images/servicios-estudiantiles/agisa05.jpg'
import agisa06 from '../../../public/images/servicios-estudiantiles/agisa06.jpg'
import agisa07 from '../../../public/images/servicios-estudiantiles/agisa07.jpg'

const EgresadosBody = () => {
  const images = [agisa01, agisa02, agisa03, agisa04, agisa05, agisa06, agisa07]

  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  const [slider1, setSlider1] = useState([])
  const [slider2, setSlider2] = useState([])

  useEffect(() => {
    setNav1(slider1)
    setNav2(slider2)
  }, [slider1, slider2])

  const title = 'Asociación De Graduados De ISA (AGISA)'
  const content = `
      <p>Es una institución privada, sin fines de lucro que agrupa y promueve el mejoramiento de los profesionales graduados de los diversos programas de estudios de ISA.</p>
      <p>AGISA surge mediante el decreto número 455 del año 1990 con los objetivos de promover: </p>
      <ul>
      <li>El desarrollo institucional del Instituto Superior de Agricultura, y el acercamiento entre  ISA y sus egresados.</li>
      <li>El desarrollo social, cultural, científico y económico de sus miembros.</li>
      <li>El establecimiento de lazos de amistad, cooperación y compañerismo entre los miembros de la asociación.</li>
      <li>La Cooperación y acercamiento entre las instituciones cívico culturales, del sector agropecuario y asociaciones que tengan relación o afinidad con AGISA.</li>
      <li>La divulgación de informaciones científicas del sector agropecuario entre sus miembros y a nivel público.</li>
      <li>La difusión de ideas no comprometidas con el orden político-partidista, que conlleven a la búsqueda de soluciones a los grandes problemas de la agricultura dominicana</li>
      </ul>

      `

  return (
    <Section>
      <SectionTitle>{title}</SectionTitle>
      <Wrapper>
        <Content>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Content>
        <MediaContainer>
          <DecoMedia>
            <VisualCarousel>
              <Carousel
                asNavFor={nav2}
                pauseOnHover
                arrows={false}
                ref={(slider: any) => setSlider1(slider)}
              >
                {images.map((item, index) => {
                  return (
                    <SMedia key={index}>
                      <Media>
                        <Logo
                          src={item}
                          width={1920}
                          height={1080}
                          objectFit="cover"
                        />
                      </Media>
                    </SMedia>
                  )
                })}
              </Carousel>
            </VisualCarousel>

            <ThumbnailCarousel>
              <Carousel
                autoplay
                asNavFor={nav1}
                ref={(slider: any) => setSlider2(slider)}
                slidesToShow={3}
                pauseOnHover
                vertical={true}
                verticalSwiping={true}
                arrows={false}
                responsive={[
                  {
                    breakpoint: mq.lgv,
                    settings: {
                      vertical: false,
                      verticalSwiping: false,
                      slidesToShow: 4,
                      arrows: false,
                      dots: false,
                      centerMode: true,
                    },
                  },
                ]}
              >
                {images.map((item, index) => {
                  return (
                    <Dot key={index} onClick={(e) => nav2.slickGoTo(index)}>
                      <Logo
                        src={item}
                        width={1920}
                        height={1080}
                        objectFit="cover"
                      />
                    </Dot>
                  )
                })}
              </Carousel>
            </ThumbnailCarousel>
          </DecoMedia>
        </MediaContainer>
      </Wrapper>
    </Section>
  )
}

export default EgresadosBody

const Section = styled.section`
  padding: 4rem 0;
  background-color: ${colors.gray.light};
`

const SectionTitle = styled.h1`
  text-align: center;
`

const Wrapper = styled.div`
  ${container};

  ${mq.lg} {
    padding: 5%;
    display: grid;
    grid-template-columns: 47.75% 47.75%;
    column-gap: 5%;
  }
`

const Dot = styled.div``

const Logo = styled(Image)``

const Content = styled.div`
  color: ${(props) => props.color};
  padding: 1.5rem;
  ${mq.sm} {
    padding: 5%;
  }
  ${mq.lg} {
    padding: 0;
    order: 2;
  }
`

const MediaContainer = styled.div`
  position: relative;
  ${mq.lg} {
    height: 0;
    padding-bottom: 73%;
    order: 1;
  }
`

const DecoMedia = styled.div`
  display: grid;
  grid-template-columns: 100%;
  row-gap: 1.5rem;

  &:before {
    content: '';
    position: absolute;
    right: 5%;
    top: 0%;
    transform: translate(0, -50%);
    background: ${colors.primary.base};
    width: 23%;
    padding-bottom: 4%;
    z-index: -1;
  }
  &:after {
    content: '';
    position: absolute;
    right: 5%;
    top: 0%;
    transform: translate(0, -50%);
    background: ${colors.primary.dark};
    width: 12%;
    padding-bottom: 4%;
    z-index: -1;
  }

  ${mq.lg} {
    grid-template-columns: 23.75% 73.75%;
    column-gap: 2.5%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    &::before {
      z-index: 0;
    }
    &::after {
      z-index: 0;
    }
  }
`

const VisualCarousel = styled.div`
  font-size: 0;

  ${mq.lg} {
    order: 2;
  }
`

const ThumbnailCarousel = styled.div`
  font-size: 0;
  width: 100%;
  display: block;

  .slick-list {
    padding: 0 !important;
  }

  .slick-slide {
    padding: 0 0.75rem;
  }

  ${mq.lg} {
    order: 1;
    height: 100%;
    position: relative;

    .slick-slider {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
    }

    .slick-list {
      height: 100% !important;
    }

    .slick-slide {
      padding: 0;
      padding-bottom: 10%;
      overflow: hidden;
    }
  }
`

const SMedia = styled.div`
  position: relative;
  height: 0;
  padding-bottom: 56.25%;
  ${mq.lg} {
    padding-bottom: 100%;
  }
`

const Media = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: grid !important;
`
