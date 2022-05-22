import React from 'react'
import styled from '@emotion/styled'

import Header from 'components/Header'
import Footer from 'components/Footer'
import ResourcesList from './resourceslist'
import Contact from './contact'
import PageIndexes from './page-indexes'
import Seo from '../components/seo'
import { client, Recurso } from 'client'

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  //   require('smooth-scroll')('a[href*="#"]')
}

interface LayoutProps {
  recursos?: Recurso[]
  uri?: string
  children?: any
}

const Layout = ({ recursos = [], uri, children, ...props }: LayoutProps) => {
  const { useQuery } = client
  const settings = useQuery()?.generalSettings

  const recursosPagina = uri
    ? useQuery()
        .nodeByUri({
          uri: uri,
        })
        .$on.Page.datosRecursos.relacion.map((item) => item.$on.Recurso)
    : []

  console.log(recursosPagina)
  const listaRecursos = recursos.concat(recursosPagina)
  //Si contacto no es pasado en props, utiliza page;
  //   const [page] = usePages().filter((page) => page.uri === props.path)

  // const recursos = page?.datosRecursos?.relacion.map((item) => item.$on.Recurso)

  // const [resultsSearch, setResultsSearch] = useState()

  return (
    <>
      {/* <Helmet
        htmlAttributes={{
          lang: 'en',
        }}
      >
        <title>{settings.title}</title>
        <meta name="description" content={settings.description} />
      </Helmet> */}

      {/* <Seo {...props} /> */}

      <Header />

      <Main>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              // ...{ resultsSearch, setResultsSearch },
            })
          }
          return child
        })}
        {/* 
          Se muestran recursos relacionados con el tipo de dato 
            - Se excluye el tipo pensum para los objetos de tipo WpCarrera. Ya que los pensums se muestran de una forma distinta en las carreras
        */}
        {listaRecursos?.length ? (
          <ResourcesList
            items={listaRecursos || []}
            // exclude={contacto?.type === 'carrera' ? ['pensum'] : []}
          />
        ) : null}
        {/* Se muestra información de contacto relacionada con el tipo de dato */}
        {/* <Contact data={contacto?.contacto} /> */}
        {/* {data && <PageIndexes data={data} />} */}
      </Main>

      <Footer />
    </>
  )
}

export default Layout

const Main = styled.main`
  overflow: hidden;
`
