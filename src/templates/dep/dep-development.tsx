import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Image from 'next/image'
import colors from 'components/colors'
import { container, mq } from 'components/grid'
import ambitos from '../../../public/images/direccion-extension-y-proyectos/ambitos.svg'

const DEPDevelopment = (props) => {
  const title = 'Proyectos En Desarrollo',
    content = `
            <p>Además de dedicarse a la docencia y la investigación, la Universidad cuenta con una amplia trayectoria en la elaboración y ejecución de proyectos, principalmente relacionados al desarrollo social y agroproductivo. Esto ha conllevado a que la institución posea una fuerte vinculación con las distintas entidades, ONG, Ministerios y Estamentos Estatales que brindan soporte al desarrollo del país y a los sectores más vulnerables.</p>
            <p>Con ello se ha cultivado una amplia experiencia sobre las metodologías de intervención, tanto para los programas de capacitación, como para el acompañamiento y asistencia técnica dirigidos al incremento de la competitividad y al mejoramiento de la calidad y productividad de dichos sectores.</p>
            <p>Actualmente, la Universidad ISA, mediante alianzas estratégicas con entidades públicas y privadas, enfoca sus esfuerzos en los siguientes ámbitos:</p>
        `,
    contentActividades = `
            <ul style="list-style-type: circle">
                <li>Producción Sostenible y Seguridad Alimentaria</li>
                <li>Innovación de Bienes y Servicios de los Sectores Productivos</li>
                <li>Nutrición y Sistemas de Alimentación Animal</li>
                <li>Desarrollo de Empresas Rurales y Agroalimentarias</li>
                <li>Gestión Ambiental</li>
                <li>Gestión Empresarial</li>
                <li>Desarrollo Comunitario</li>
                <li>Emprendimiento e Innovación</li>
            </ul>
        `

  return (
    <Section {...props}>
      <Container fluid>
        <LSection as="div">
          <ContainerWrapper>
            <Wrapper color="white">
              <Title> {title} </Title>
              <Content>
                <div dangerouslySetInnerHTML={{ __html: content }} />
              </Content>
            </Wrapper>
          </ContainerWrapper>
        </LSection>

        <RSection as="div">
          <ContainerWrapper>
            <Wrapper>
              <Media>
                <Image src={ambitos} alt="Logo de proyecto..." />
              </Media>
              <List dangerouslySetInnerHTML={{ __html: contentActividades }} />
            </Wrapper>
          </ContainerWrapper>
        </RSection>
      </Container>
    </Section>
  )
}

export default DEPDevelopment

const Section = styled.section``

const LSection = styled.div`
  background-color: ${colors.primary.dark};
`
const RSection = styled.div``

const Container = styled.div`
  ${container}
  padding: 0;

  display: grid;
  grid-template-columns: 100%;
  ${mq.md} {
    grid-template-columns: 50% 50%;
  }
`

const ContainerWrapper = styled.div`
  margin-bottom: 3.2rem;
  margin-top: 3.2rem;
  ${mq.md} {
    margin-bottom: 6.4rem;
    margin-top: 6.4rem;
  }
`
const Title = styled.h2`
  margin-bottom: 3rem;
  color: ${(props) => props.color};
`

const Wrapper = styled.div`
  align-self: center;
  padding: 0 1.5rem;
  ${({ color }) => css`
    ${color
      ? css`
          * {
            color: ${color};
          }
        `
      : css``}
    ${mq.xl} {
      max-width: 57rem;
      margin: 0 auto;
    }
  `}
`

const List = styled.div`
  margin: 0;
  padding: 0;
`

const Content = styled.div`
  color: ${(props) => props.color};
`

const Media = styled.div`
  position: relative;
  margin-bottom: 4rem;
  font-size: 0;
  max-width: 25rem;
  margin-left: auto;
  margin-right: auto;
`
