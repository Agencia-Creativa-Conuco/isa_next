import React from 'react'
import styled from '@emotion/styled'

import Header from 'components/Header'
import Footer from 'components/Footer'
import ResourcesList from './resourceslist'
import Contact from './contact'
import PageIndexes from './page-indexes'
import { client, Recurso } from 'client'

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  //   require('smooth-scroll')('a[href*="#"]')
}

// interface LayoutProps {
//   recursos?: Recurso[]
//   contacto?: any
//   children?: any
// }

const Layout = (props) => {
  const { useQuery } = client
  const settings = useQuery()?.generalSettings

  // const [resultsSearch, setResultsSearch] = useState()

  return (
    <>
      <Header />

      <Main>
        {React.Children.map(props.children, (child) => {
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
        {props.recursos?.length ? (
          <ResourcesList
            items={props.recursos || []}
            // exclude={contacto?.type === 'carrera' ? ['pensum'] : []}
          />
        ) : null}
        {/* Se muestra información de contacto relacionada con el tipo de dato */}
        {props.contacto?.mostrar ? <Contact data={props.contacto} /> : null}
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
