import React from 'react'
import { GetStaticPropsContext } from 'next'
import { getNextStaticProps } from '@faustjs/next'
import { client } from 'client'
import styled from '@emotion/styled'
import Link from 'next/link'
import Layout from 'components/layout'
import colors from 'components/colors'
import Image from 'next/image'
import { h4 } from 'styles/tipography'
import { container, mq } from 'components/grid'
import fdiversity from '../../../public/images/investigacion/facilidades/fdiversity.jpg'
import infostat from '../../../public/images/investigacion/facilidades/infostat.png'
import minitab from '../../../public/images/investigacion/facilidades/minitab.svg'
import past from '../../../public/images/investigacion/facilidades/past.png'
import r from '../../../public/images/investigacion/facilidades/r.png'
import rstudio from '../../../public/images/investigacion/facilidades/rstudio.svg'
import sas from '../../../public/images/investigacion/facilidades/sas.jpg'
import turnitin from '../../../public/images/investigacion/facilidades/turnitin.jpg'
import blur from 'styles/blur'
import PageMeta from 'components/PageMeta'

const ProjectLines = () => {
  const title = 'Facilidades y Recursos de Investigación'
  const facilities = [
    {
      title: 'Laboratorio de Inocuidad De Alimentos y Análisis Industrial',
      url: '/liaai',
      target: '_blank',
    },
    {
      title: 'Biblioteca Marco A. Cabral de la Universidad ISA',
      url: 'http://bibliotecaunisa.com/',
      target: '_blank',
    },
  ]
  const resources = [
    {
      category: 'Paquetes Estadísticos',
      list: [
        {
          title: 'FDIVERSITY',
          url: 'http://www.nucleodiversus.org/index.php?mod=page&id=62',
          target: '_blank',
          image: fdiversity,
        },
        {
          title: 'INFOSTAT',
          url: 'https://www.infostat.com.ar/',
          target: '_blank',
          image: infostat,
        },
        {
          title: 'MINITAB',
          url: 'https://www.minitab.com/es-mx/',
          target: '_blank',
          image: minitab,
        },
        {
          title: 'PAST',
          url: 'https://www.portalprogramas.com/past/',
          target: '_blank',
          image: past,
        },
        {
          title: 'R',
          url: 'https://www.r-project.org/',
          target: '_blank',
          image: r,
        },
        {
          title: 'R STUDIO',
          url: 'https://rstudio.com/',
          target: '_blank',
          image: rstudio,
        },
        {
          title: 'SAS UNIVERSITY EDITION',
          url: 'https://www.sas.com/es_mx/home.html',
          target: '_blank',
          image: sas,
        },
        {
          title: 'TURNITIN',
          url: 'https://www.turnitin.com/',
          target: '_blank',
          image: turnitin,
        },
      ],
    },
  ]

  const metaData = {
    title: 'Facilidades y recursos',
    description: 'Facilidades y recursos de investigación.',
  }

  return (
    <PageMeta uri="/investigacion/facilidades">
      <Layout>
        <Section as="article">
          <Cover>
            <Container>
              <Title color={colors.shadow.base}>{title}</Title>
            </Container>
          </Cover>
          <Facilidades>
            <List>
              <Container>
                <STitle>Facilidades</STitle>

                <ContainerFacilidades>
                  {facilities.map((facility, index) => {
                    return (
                      <SLink
                        href={facility.url}
                        target={facility.target}
                        rel="noopener"
                        key={index}
                      >
                        <Line>
                          <span>{facility.title}</span>
                        </Line>
                      </SLink>
                    )
                  })}
                </ContainerFacilidades>
              </Container>
            </List>
          </Facilidades>
          <Recursos>
            <List>
              <Container>
                <STitle>Recursos</STitle>

                {resources.map((item, index) => {
                  return (
                    <div key={index}>
                      <SubTitle>{item.category}</SubTitle>
                      <ContainerRecursos>
                        {item.list.map((resource, index) => {
                          return (
                            <SLink
                              key={index}
                              href={resource.url}
                              target={resource.target}
                              rel="noopener"
                            >
                              <Line>
                                <ContainerSub>
                                  <InlineImage>
                                    <Image
                                      src={resource.image ?? blur}
                                      width={1920}
                                      height={960}
                                      objectFit="contain"
                                      alt="Facilidades"
                                      blurDataURL={blur.src}
                                      placeholder="blur"
                                    />
                                  </InlineImage>
                                  <span>{resource.title}</span>
                                </ContainerSub>
                              </Line>
                            </SLink>
                          )
                        })}
                      </ContainerRecursos>
                    </div>
                  )
                })}
              </Container>
            </List>
          </Recursos>
        </Section>
      </Layout>
    </PageMeta>
  )
}

export default ProjectLines

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page: ProjectLines,
    client,
  })
}

const Section = styled.article`
  margin-bottom: 5.5rem;
  ${mq.md} {
    margin-bottom: 9.5rem;
  }
`

const Cover = styled.section`
  overflow: hidden;
  background: ${colors.primary.base};

  padding-top: 5.6rem;
  margin-bottom: 5.6rem;
  ${mq.md} {
    padding-top: 9.6rem;
    margin-bottom: 9.5rem;
  }
`

const Container = styled.div`
  ${container}
`

const ContainerFacilidades = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 2.8rem;

  ${mq.md} {
    grid-template-columns: 50% 50%;
  }
`

const ContainerRecursos = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 2.8rem;

  ${mq.md} {
    grid-template-columns: 50% 50%;
  }

  ${mq.lg} {
    grid-template-columns: 32% 32% 32%;
    margin: 0 auto;
  }
`

const ContainerSub = styled.div`
  display: flex;
  column-gap: 20px;
`

const List = styled(Section)``

const Title = styled.h1`
  text-align: center;
  color: white;
  margin-bottom: 4rem;
  margin-top: 4rem;
  text-shadow: ${(props) => props.color};
`

const Facilidades = styled.div``

const Recursos = styled.div``

const Line = styled.h2`
  ${h4}
  font-weight: normal;
  padding: 1.5rem;
  background-color: #fafafa;
  transition: all 0.25s ease-in-out;
  margin: 0.5rem 0;
  &:hover {
    background-color: #f5f5f5;
  }
`

const SLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const STitle = styled.h2``

const SubTitle = styled.h3`
  font-weight: 300;
  text-transform: uppercase;
`

const InlineImage = styled.span`
  width: 8rem;
  height: 8rem;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
`
