import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import colors from 'components/colors'
import Carousel from 'react-slick'
import { container, mq } from 'components/grid'
import excelencia01 from '../../../public/images/servicios-estudiantiles/excelencia01.jpg'
import excelencia02 from '../../../public/images/servicios-estudiantiles/excelencia02.jpg'
import excelencia03 from '../../../public/images/servicios-estudiantiles/excelencia03.jpg'
import excelencia04 from '../../../public/images/servicios-estudiantiles/excelencia04.jpg'
import excelencia05 from '../../../public/images/servicios-estudiantiles/excelencia05.jpg'
import excelencia06 from '../../../public/images/servicios-estudiantiles/excelencia06.jpg'
import excelencia07 from '../../../public/images/servicios-estudiantiles/excelencia07.jpg'
import excelencia08 from '../../../public/images/servicios-estudiantiles/excelencia08.jpg'
import excelencia09 from '../../../public/images/servicios-estudiantiles/excelencia09.jpg'

const ServiciosEstudiantilesExcelencia = (props) => {
  const images = [
    excelencia01,
    excelencia02,
    excelencia03,
    excelencia04,
    excelencia05,
    excelencia06,
    excelencia07,
    excelencia08,
    excelencia09,
  ]

  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  const [slider1, setSlider1] = useState([])
  const [slider2, setSlider2] = useState([])

  useEffect(() => {
    setNav1(slider1)
    setNav2(slider2)
  }, [slider1, slider2])

  const title = 'Programa Premiación a la Excelencia Académica.',
    content = `
            <p>El programa de premiación a la excelencia académica, es una actividad donde la institución, a través de la implementación de un proceso de reconocimiento periódico, público y continuo, exalta los esfuerzos exitosos logrados por los estudiantes al final del período académico cursado y al cierre del año académico. Esta celebración se realiza una vez al año.</p>
            <p><b>Objetivos</b></p>
            <ul>
                <li>Mantener presente, en el estudiantado, el valor de la excelencia como base y principio que guía las acciones de la Universidad.</li>
                <li>Fortalecer el espíritu de competencia sana entre estudiantes para alcanzar mejores rendimientos académicos, contribuyendo así en la creación de una cultura amplia, alentadora y compartida hacia la excelencia académica.</li>
                <li>Fortalecer la relación entre estudiantes fomentando los valores de respeto, responsabilidad, solidaridad, colaboración, y servicio en el acontecer académico cotidiano.</li>
            </ul>
        `
  // image = images["servicios-estudiantiles"].excelencia,

  return (
    <Section {...props}>
      <Wrapper>
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

        <ContentCol>
          <DivTitle>
            <SectionTitle>{title}</SectionTitle>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </DivTitle>
        </ContentCol>
      </Wrapper>
    </Section>
  )
}

export default ServiciosEstudiantilesExcelencia

const Section = styled.section`
  ${container}
  padding: 0;
  margin-top: 5.5rem;

  ${mq.md} {
    margin-top: 9.6rem;
    margin-bottom: 9.6rem;
  }
`

const Wrapper = styled.div`
  ${mq.lg} {
    border-radius: 50px;
    padding: 5%;
    display: grid;
    grid-template-columns: 47.75% 47.75%;
    column-gap: 5%;
  }
`

const ContentCol = styled.div`
  z-index: 1;
  position: relative;
  padding: 5%;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${colors.primary.light};
    opacity: 0.3;
    z-index: -1;
    transform-origin: 50% 100%;
    ${mq.lg} {
      transform: scale(1.2, 2);
    }
  }
`

const Dot = styled.div``

const Logo = styled(Image)``

const DivTitle = styled.div`
  margin-left: 1rem;
`

const SectionTitle = styled.h2`
  font-weight: 900;
  font-size: 2rem;
  margin-top: 0;
  ${mq.md} {
    font-size: 3rem;
  }
`

const MediaContainer = styled.div`
  position: relative;
  ${mq.lg} {
    height: 0;
    padding-bottom: 73%;
  }
`

const DecoMedia = styled.div`
  display: grid;
  grid-template-columns: 100%;
  row-gap: 1.5rem;

  &:before {
    content: '';
    position: absolute;
    left: 5%;
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
    left: 5%;
    top: 0%;
    transform: translate(0, -50%);
    background: ${colors.primary.dark};
    width: 12%;
    padding-bottom: 4%;
    z-index: -1;
  }

  ${mq.lg} {
    grid-template-columns: 73.75% 23.75%;
    column-gap: 2.5%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const VisualCarousel = styled.div`
  font-size: 0;
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
