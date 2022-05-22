import React, { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import Carousel from 'react-slick'
import colors from 'components/colors'
import { h4 } from 'styles/tipography'
import useModal from 'hooks/useModal'
import Form from 'components/form'
import ctas from 'styles/cta'
import { container, mq } from 'components/grid'
import baloncesto from '../../../public/images/servicios-estudiantiles/baloncesto.jpg'
import voleibol from '../../../public/images/servicios-estudiantiles/voleibol.jpg'
import futbol from '../../../public/images/servicios-estudiantiles/futbol.jpg'
import atletismo from '../../../public/images/servicios-estudiantiles/atletismo.jpg'
import beisbol from '../../../public/images/servicios-estudiantiles/beisbol.jpg'
import softbol from '../../../public/images/servicios-estudiantiles/softbol.jpg'
import ajedrez from '../../../public/images/servicios-estudiantiles/ajedrez.jpg'
import rugby from '../../../public/images/servicios-estudiantiles/rugby.jpg'

const ServiciosEstudiantilesDeportes = () => {
  const title = 'Unidad de Deporte',
    content = `
            <p>La unidad de Deporte gestiona profesionalmente los programas de actividad física y deportiva para los estudiantes, con el objetivo de fomentar y mantener en ellos la importancia de aquellos aspectos que tengan que ver con su desarrollo y disciplina física. Esta unidad coordina la formación de equipos, entrenamientos y participación del estudiantado en los principales eventos deportivos universitarios e interuniversitarios que se desarrollan en el país.</p>
        `,
    anotherTitle = 'DISCIPLINAS DESARROLLADAS PARA AMBOS GÉNEROS',
    sports = [
      {
        name: 'Baloncesto',
        image: baloncesto,
      },
      {
        name: 'Voleibol',
        image: voleibol,
      },
      {
        name: 'Fútbol',
        image: futbol,
      },
      {
        name: 'Atletismo',
        image: atletismo,
      },
      {
        name: 'Béisbol',
        image: beisbol,
      },
      {
        name: 'Sóftbol',
        image: softbol,
      },
      {
        name: 'Ajedrez',
        image: ajedrez,
      },
      {
        name: 'Rugby',
        image: rugby,
      },
    ]

  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  const [slider1, setSlider1] = useState([])
  const [slider2, setSlider2] = useState([])

  const { openModal, ModalUI } = useModal()

  useEffect(() => {
    setNav1(slider1)
    setNav2(slider2)
  }, [slider1, slider2])

  return (
    <Section id="section_5">
      <ContainerCarrousel>
        <Carousel
          asNavFor={nav2}
          pauseOnHover
          ref={(slider: any) => setSlider1(slider)}
        >
          {sports
            ? sports.map((item, index) => {
                return (
                  <Logo
                    key={index}
                    src={item.image}
                    width={1920}
                    height={1080}
                    objectFit="cover"
                  />
                )
              })
            : null}
        </Carousel>
        <Carousel
          autoplay
          asNavFor={nav1}
          ref={(slider: any) => setSlider2(slider)}
          slidesToShow={3}
          pauseOnHover
          // centerMode={true}

          responsive={[
            {
              breakpoint: mq.lgv,
              settings: {
                centerMode: true,
              },
            },
          ]}
        >
          {sports
            ? sports.map((item, index) => {
                return (
                  <Dot key={index} onClick={(e) => nav2.slickGoTo(index)}>
                    <Logo
                      src={item.image}
                      width={1920}
                      height={1080}
                      objectFit="cover"
                    />
                  </Dot>
                )
              })
            : null}
        </Carousel>
      </ContainerCarrousel>
      <ContentCol>
        <DivTitle>
          <SectionTitle>{title}</SectionTitle>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          <AnotherTitle>{anotherTitle}</AnotherTitle>
          <Container>
            {sports
              ? sports.map((item, index) => {
                  return <Sport key={index}>{item.name}</Sport>
                })
              : null}
          </Container>
          <br />
          <Button onClick={openModal}>Únete a un equipo</Button>
        </DivTitle>
      </ContentCol>
      <ModalUI title={'Se parte de uno de nuestros equipos deportivos'}>
        <Form
          formId={'7f47e998-3b09-4293-a2a6-0c0cabdc65ed'}
          cardStyle={false}
        />
      </ModalUI>
    </Section>
  )
}

export default ServiciosEstudiantilesDeportes

const Section = styled.section`
  ${container}
  padding: 0;
  display: grid;
  margin-top: 5.5rem;

  grid-template-columns: 100%;
  ${mq.md} {
    margin-top: 9.6rem;
    margin-bottom: 9.6rem;
    div:first-of-type {
      order: 2;
    }
    grid-template-columns: 41% 59%;
  }
`

const ContainerCarrousel = styled.div`
  z-index: 2;
`
const ContentCol = styled.div`
  z-index: 1;
  position: relative;
  padding: 0 1.5rem 4rem;

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
    ${mq.md} {
      transform: scale(1.2, 1.7);
    }
  }
`

const Container = styled.div`
  ${container}
  display: grid;
  grid-template-columns: 100%;
  ${mq.md} {
    grid-template-columns: auto auto;
  }
`

const Dot = styled.div`
  padding: 0.5rem;
`

const Logo = styled(Image)`
  z-index: initial;
`

const SectionTitle = styled.h2`
  margin-bottom: 2rem;
`
const DivTitle = styled.div`
  margin-right: 1rem;
`

// const CardMin = styled.div`
//     margin-top: 4rem;
// `;

// const MinLogo = styled(Image)`
// `;

const Sport = styled.p`
  font-weight: bold;
  margin-bottom: 0.2rem;
`

const AnotherTitle = styled.h3`
  ${h4}
  font-weight: 700;
`

const Button = styled.button`
  ${ctas}
`
