import React from 'react'
import styled from '@emotion/styled'
import CardBody from './card-body'
import urlSlug from 'url-slug'
import Loading from '../loading'
import { container, mq } from 'components/grid'
import { h1 } from 'styles/tipography'

const ResultsBody = ({ items }) => {
  // const { SelectUI, selectedOption } = useFilter()

  // const options = [
  //   { value: 'WpPage', label: 'Páginas' },
  //   { value: 'WpRecurso', label: 'Recursos' },
  //   { value: 'WpCarrera', label: 'Carreras' },
  //   { value: 'WpPost', label: 'Publicaciones' },
  //   { value: 'WpFacultad', label: 'Facultades' },
  //   { value: 'WpInvestigacion', label: 'Investigaciones' },
  //   { value: 'WpDepartamento', label: 'Departamentos' },
  //   { value: 'WpLineaDeInvestigacion', label: 'Líneas de investigación' },
  //   { value: 'WpGrado', label: 'Oferta académica' },
  // ]

  // Filtrando valor del select

  return items.length ? (
    <Section space small>
      <Title>Resultados</Title>
      {/* <SelectUI options={optionsFilter} /> */}
      <Results>
        {items?.map((item, index) => {
          const { title, nombre, __typename, uri, slug } = item

          const uriParsed = nombre ? uri.replace(slug, urlSlug(nombre)) : uri

          const objecTypes = {
            Page: 'Página',
            Recurso: 'Recurso',
            Departamento: 'Departamento',
            Carrera: 'Carrera',
            Post: 'Publicación',
            Facultad: 'Facultad',
            Investigacion: 'Investigación',
            LineaDeInvestigacion: 'Línea de investigación',
            Grado: 'Oferta académica',
          }

          const translateTypes = objecTypes[__typename] || title

          return (
            <CardBody
              key={index}
              title={title()}
              type={__typename}
              uri={uriParsed}
              translateTypes={translateTypes}
              item={item}
            />
          )
        })}
      </Results>
    </Section>
  ) : items?.length !== 0 ? (
    <Loading />
  ) : (
    <Section space>
      <Title> Sin Resultados 😔 </Title>
      <SubTitle>Intenta nuevamente con otro término de búsqueda</SubTitle>
    </Section>
  )
}

export default ResultsBody

const Section = styled.section`
  ${container}
  padding:0;

  h1:first-of-type {
    text-align: center;
  }

  h3:first-of-type {
    padding: 1.5rem;
  }
`

const Results = styled.div`
  display: grid;
  grid-template-columns: 100%;

  ${mq.md} {
    grid-template-columns: 50% 50%;
  }
`

const Title = styled.h2`
  ${h1}
  text-align: center;
  font-weight: 900;
  margin-bottom: 4rem;
`

const SubTitle = styled.h3`
  text-align: center;
`
