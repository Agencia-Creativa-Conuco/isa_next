import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Link from 'next/link'
import colors from 'components/colors'
import { container, mq } from 'components/grid'
import { Facultad } from 'client'

export interface FacultadProps {
  facultad: Facultad | Facultad['preview']['node'] | null | undefined
}

const FacultadAreas = ({ facultad }: FacultadProps) => {
  const { color = colors.primary.base } = facultad

  const departamentos = facultad.departamentos()?.nodes

  return departamentos?.length ? (
    <Section>
      <Container>
        <Card>
          <SectionTitle color={color}> Áreas Académicas </SectionTitle>
          <List>
            {departamentos
              .filter((departament) => {
                return departament.carreras().nodes?.length
              })
              .map((departament, index) => {
                const { nombre, uri } = departament

                return departament.nombre ? (
                  <Item key={index}>
                    <SLink
                      href={uri ?? '/'}
                      color={color}
                      color2={colors.text.base}
                    >
                      {nombre}
                    </SLink>
                  </Item>
                ) : null
              })}
          </List>
        </Card>
      </Container>
    </Section>
  ) : null
}

export default FacultadAreas

const Section = styled.section`
  margin-top: -10rem !important;
  margin-bottom: 5.5rem;
  ${mq.md} {
    margin-bottom: 9.6rem;
  }
`

const Container = styled.div`
  ${container}
  display:grid;
  grid-template-columns: 100%;
`

const Card = styled.div`
  box-shadow: 0 0.7rem 2rem rgba(0, 0, 0, 0.15);
  border-radius: 15px;
  padding-bottom: 4rem;
  position: relative;
  margin-bottom: 50px;
  background: white;
`

const SectionTitle = styled.h2`
  margin-top: 4rem;
  margin-bottom: 2rem;
  text-align: center;
  color: ${(props) => props.color};
`

const SLink = styled(Link)`
  ${(props: { color?: string; color2?: string }) => css`
    text-decoration: none;
    color: ${props.color2};
    position: relative;
    display: block;

    &:hover {
      cursor: pointer;
      color: ${props.color};
    }

    &:before {
      content: '•';
      transform-origin: 50% 50%;
      transform: scale(2);
      display: inline-block;
      margin-right: 1rem;
      margin-left: -1.5rem;
    }
  `}
`

const List = styled.ul`
  margin: 0 auto;
  padding: 0;
  display: grid;
  grid-template-columns: 90%;
  justify-content: center;

  ${mq.md} {
    grid-template-columns: 60%;
  }
`

const Item = styled.li`
  list-style: none;
  line-height: 1;
`
