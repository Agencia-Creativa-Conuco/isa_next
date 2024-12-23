import React from 'react'
import styled from '@emotion/styled'
import colors from 'components/colors'
import { container, mq } from 'components/grid'

const BibliotecaRecursos = () => {
  const title = 'Recursos',
    copy = `
      <p><b>Modalidades de uso</b>: Los documentos deben ser solicitados a través del personal bibliotecario en calidad de préstamo. El período de préstamo está sujeto a las características específicas de cada colección.</p>
      <p></p>
    `,
    titlecontent =
      'Para los fines de servicio al público, la Biblioteca cuenta con los siguientes recursos:',
    content = [
      {
        cloneContent:
          '<b>Colección General:</b> integrada por obras que  cubren toda el área del conocimiento y cuyo fin es servir de fuente de información para la formación de la comunidad académica.',
      },
      {
        cloneContent:
          '<b>Colección de Referencia:</b> formada por obras que  facilitan la respuesta rápida a una necesidad de información específica. Entre estos se encuentran: diccionarios, enciclopedias, directorios, anuarios, atlas, índices, etc.',
      },
      {
        cloneContent:
          '<b>Colección de Reserva:</b> integrada por los libros de texto y/o cualquier material cuya consulta es asignada por los profesores como soporte al desarrollo de un programa analítico en particular.',
      },
      {
        cloneContent:
          '<b>Colección Dominicana.</b>  Integrada por documentaciones de autores dominicanos o extranjeros que tienen como tema aspectos de la República Dominicana.',
      },
      {
        cloneContent:
          '<b>Colección de Hemeroteca:</b> formada por las publicaciones periódicas: revistas, periódicos, boletines y otras.',
      },
      {
        cloneContent:
          '<b>Colección de tesis y trabajos de investigación.</b>  Integrada por documentos que han sido presentados para la obtención de un grado académico en instituciones de educación superior.',
      },
      {
        cloneContent:
          '<b>Colección de folletos.</b>  Integrada por los documentos impresos sin encuadernación de imprenta y que han sido producidos de manera no convencional.',
      },
      {
        cloneContent:
          '<b>Colección de audiovisuales y Multimedia.</b>  Integrada por el conjunto de dispositivos que despliegan la información de manera expositiva e interactiva así como los equipos de videos, sonido, diapositivas, discos compactos, etc.',
      },
      {
        cloneContent:
          '<b>Colección virtual.</b> Integrada por el conjunto de documentos en formato digital.',
      },
      {
        cloneContent:
          '<b>Colección especial.</b>  Integrada por aquellas documentaciones que poseen un alto valor por su singularidad, antigüedad o procedencia.',
      },
      {
        cloneContent:
          '<b>Colección Institucional.</b>  Integrada por las documentaciones producidas por la institución y que registran su accionar.',
      },
    ]

  return (
    <Section id="section_2">
      <Title>{title}</Title>
      <ColStyles color={colors.blue.base}>
        <Copy dangerouslySetInnerHTML={{ __html: copy }} />
      </ColStyles>

      <ColStyles color={colors.blue.dark}>
        <SectionTitle>{titlecontent}</SectionTitle>
        <Container>
          {content.map((item, index) => {
            const { cloneContent } = item
            return (
              <p
                key={index}
                dangerouslySetInnerHTML={{ __html: cloneContent }}
              />
            )
          })}
        </Container>
      </ColStyles>
    </Section>
  )
}

export default BibliotecaRecursos

const Section = styled.section`
  ${container}
  padding: 0;
  margin-bottom: 5.5rem;
  margin-top: 5.5rem;
  ${mq.md} {
    margin-bottom: 9.6rem;
    margin-top: 9.6rem;
  }
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 1.5rem;
  ${mq.md} {
    grid-template-columns: 50% 50%;
  }
`

const ColStyles = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  padding: 4rem;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 100%;
    background-color: ${(props) => props.color};
    z-index: -1;
  }
`

const Title = styled.h2``

const SectionTitle = styled.h3`
  color: white;
  margin-top: 0;
  margin-bottom: 3rem;
`

const Copy = styled.div`
  text-shadow: ${colors.shadow.base};
  font-size: 1.8rem;
`
