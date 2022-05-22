import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import colors from 'components/colors'
import Form from '../../components/form'
import Cta from 'components/CTA'
import { container, mq } from 'components/grid'
import { Carrera } from 'client'

interface CarreraProps {
  carrera?: Carrera
}

const CarreraForm = ({ carrera }: CarreraProps) => {
  const { imagenFormulario, grado } = carrera

  const formIds = grado.node.formulariosGrado.hsFormularios.map(
    (formulario) => formulario.idFormulario,
  )

  const googleForm = grado.node.formulariosGrado.urlFormularioGoogle
  const tipoFormulario = grado.node.formulariosGrado.tipoFormulario

  return tipoFormulario ? (
    <Section>
      <BSection backgrounUrl={imagenFormulario.mediaItemUrl ?? '/'}>
        <Container>
          <Wrapper>
            <Title>Solicitud de admisión</Title>
            {tipoFormulario === 'hubspot' ? (
              <Form formIds={formIds} cardStyle={false} />
            ) : tipoFormulario === 'google' ? (
              <Cta to={googleForm ?? ''} target="_blank">
                Solicitar
              </Cta>
            ) : null}
          </Wrapper>
        </Container>
      </BSection>
    </Section>
  ) : null
}

export default CarreraForm

const Section = styled.section`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`

const BSection = styled.div`
  ${(props: { backgrounUrl?: string }) => css`
    background: url(${props.backgrounUrl});
    background-size: cover;
    background-position: center center;
  `}
`

const Container = styled.div`
  ${container}
  padding: 0;
  display: grid;
  grid-template-columns: 100%;
  justify-content: flex-start;
`

const Wrapper = styled.div`
  max-width: 40rem;
  min-height: 50rem;
  padding: 2rem 0;
  background-color: ${colors.gray.light};
  ${mq.md} {
    padding: 4rem;
  }
`

const Title = styled.h2`
  text-transform: uppercase;
  margin-bottom: 3rem;
`
