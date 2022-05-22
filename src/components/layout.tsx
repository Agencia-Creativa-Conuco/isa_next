import React from 'react'
// import Helmet from 'react-helmet'
import { Global } from '@emotion/react'
import styled from '@emotion/styled'

import globalStyles from 'styles/global-styles'
import Header from 'components/Header'
import Footer from 'components/Footer'
import ResourcesList from './resourceslist'
import Contact from './contact'
// import usePages from '../hooks/usePages'
import PageIndexes from './page-indexes'
import Seo from '../components/seo'
// import query from 'next/client'

import { client } from 'client'

if (typeof window !== 'undefined') {
  // eslint-disable-next-line global-require
  //   require('smooth-scroll')('a[href*="#"]')
}

const Layout = (props) => {
  const { useQuery } = client
  const settings = useQuery()?.generalSettings
  //Si contacto no es pasado en props, utiliza page;
  //   const [page] = usePages().filter((page) => page.uri === props.path)

  const {
    children,
    // contacto = page,
    contacto,
    data,
  } = props

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

      <Seo {...props} />

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
        {/* <ResourcesList
          items={contacto?.recursos || []}
          exclude={contacto?.type === 'WpCarrera' ? ['pensum'] : []}
        /> */}
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
