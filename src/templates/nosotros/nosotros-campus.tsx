import React, { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { container, mq } from 'components/grid'
import Image from 'next/image'
import Carousel from 'react-slick'
import { LeftArrowIcon, RightArrowIcon } from 'components/icons'
import colors from 'components/colors'
import ReactPlayer from 'react-player'
import { client } from 'client'
import campus01 from '../../../public/images/nosotros/campus01.jpg'
import campus02 from '../../../public/images/nosotros/campus02.jpg'
import campus03 from '../../../public/images/nosotros/campus03.jpg'
import campus04 from '../../../public/images/nosotros/campus04.jpg'
import campus05 from '../../../public/images/nosotros/campus05.jpg'
import campus06 from '../../../public/images/nosotros/campus06.jpg'
import campus07 from '../../../public/images/nosotros/campus07.jpg'
import campus08 from '../../../public/images/nosotros/campus08.jpg'
import campus09 from '../../../public/images/nosotros/campus09.jpg'
import campus10 from '../../../public/images/nosotros/campus10.jpg'
import campus11 from '../../../public/images/nosotros/campus11.jpg'
import campus12 from '../../../public/images/nosotros/campus12.jpg'
import campus13 from '../../../public/images/nosotros/campus13.jpg'
import campus14 from '../../../public/images/nosotros/campus14.jpg'
import campus15 from '../../../public/images/nosotros/campus15.jpg'
import campus16 from '../../../public/images/nosotros/campus16.jpg'
import campus17 from '../../../public/images/nosotros/campus17.jpg'
import campus18 from '../../../public/images/nosotros/campus18.jpg'

const Arrows = (props) => {
  const Arrow = styled.div`
    border-radius: 50%;
    background-color: ${colors.primary.dark};
    color: white;
    margin: 0 3rem;
    z-index: 2;
    position: absolute;
    top: 50%;
    opacity: 0.8;

    ${mq.md} {
      display: block !important;
      width: 5rem;
      height: 5rem;
      padding: 1rem;
    }
    &:focus {
      background-color: ${colors.primary.dark};
      color: white;
      opacity: 1;
    }
    &:hover {
      background-color: ${colors.primary.dark};
      color: white;
      opacity: 1;
    }
    &:before {
      content: initial;
    }
  `

  return <Arrow {...props} />
}

const NosotrosCampus = (props) => {
  const { useQuery } = client

  const videoInstitucional = useQuery().acfOptionsVideoInstitucional
    .videoInstitucional.urlVideo

  const [isPlaying, setIsPlaying] = useState(false)

  const images = [
    campus01,
    campus02,
    campus03,
    campus04,
    campus05,
    campus06,
    campus07,
    campus08,
    campus09,
    campus10,
    campus11,
    campus12,
    campus13,
    campus14,
    campus15,
    campus16,
    campus17,
    campus18,
  ]

  const title = 'Nuestro campus'

  return Object.values(images).length ? (
    <Section {...props}>
      <Container fluid>
        <SectionTitle>{title}</SectionTitle>
        <Carousel
          prevArrow={
            <Arrows bgColor={'white'}>
              <LeftArrowIcon />
            </Arrows>
          }
          nextArrow={
            <Arrows bgColor={'white'}>
              <RightArrowIcon />
            </Arrows>
          }
          afterChange={() => setIsPlaying(false)}
          infinite={false}
        >
          {videoInstitucional ? (
            <ContainerVideo>
              <Playing onClick={() => setIsPlaying(!isPlaying)} />
              <DivVideo>
                <ReactPlayer
                  width="100%"
                  height="100%"
                  css={reactPlayer}
                  controls
                  url={videoInstitucional}
                  playing={isPlaying}
                  onPause={() => setIsPlaying(false)}
                  onPlay={() => setIsPlaying(true)}
                />
              </DivVideo>
            </ContainerVideo>
          ) : null}

          {Object.values(images)
            .filter((item) => item.src.includes('campus'))
            .sort((a, b) => {
              if (a.src > b.src) {
                return 1
              }
              if (a.src < b.src) {
                return -1
              }
              // a must be equal to b
              return 0
            })
            .map((item, index) => {
              return (
                <Media key={index}>
                  <SMedia>
                    <Image
                      src={item}
                      width={1920}
                      height={1080}
                      alt={`Campus Universidad ISA - ${index}`}
                      objectFit="cover"
                      placeholder="blur"
                    />
                  </SMedia>
                </Media>
              )
            })}
        </Carousel>
      </Container>
    </Section>
  ) : null
}

export default NosotrosCampus

const Section = styled.section``

const Container = styled.div`
  ${container}
  padding: 0;
`

const SectionTitle = styled.h2`
  text-align: center;
  margin-top: 4rem;
  ${mq.lg} {
    margin-bottom: 0;
    right: 18%;
    position: absolute;
    top: -9rem;
    z-index: 200;
  }
`

const ContainerVideo = styled.div`
  position: relative;
`

const Playing = styled.div`
  width: 100%;
  position: absolute;
  height: calc(100% - 23.7%);
  z-index: 2;

  ${mq.sm} {
    height: calc(100% - 13.7%);
  }
  ${mq.md} {
    height: calc(100% - 10.7%);
  }

  ${mq.lg} {
    height: calc(100% - 12.2%);
  }
  ${mq.xl} {
    height: calc(100% - 9.2%);
  }
`

const DivVideo = styled.div`
  position: relative;
  padding-top: 56.25%;
  ${mq.xl} {
    padding-top: 45%;
  }
`

const Media = styled.div`
  position: relative;
  padding-top: 56.25%;
  font-size: 0;
  ${mq.xl} {
    padding-top: 45%;
  }
`

const SMedia = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  font-size: 0;
`

const reactPlayer = css`
  position: absolute;
  top: 0;
  left: 0;
`
