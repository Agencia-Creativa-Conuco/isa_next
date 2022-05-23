import styled from '@emotion/styled'
import React from 'react'
import TeamSlider from 'components/team-slider'
import { client } from 'client'

const DIPTeam = (props) => {
  const { useQuery } = client
  const investigadores = useQuery()
    .investigadores({
      first: 200,
    })
    ?.nodes.filter((investigador) => investigador.esEquipo)
  const interno = []
  const externo = []

  investigadores.map((item) => {
    //GUARDA EQUIPO DE INVESTIGACION INTERNO
    item.datosInvestigador.carreraNacionalInvestigacion.equipoInvestigacion ===
      'interno' && interno.push(item)

    //GUARDA EQUIPO DE INVESTIGACION EXTERNO
    item.datosInvestigador.carreraNacionalInvestigacion.equipoInvestigacion ===
      'externo' && externo.push(item)

    return 0
  })

  return interno.length || externo.length ? (
    <Container {...props}>
      <TeamSlider
        investigadores={interno}
        title="EQUIPO DE INVESTIGACIÓN INTERNO"
      />
      <TeamSlider
        investigadores={externo}
        title="EQUIPO DE INVESTIGACIÓN EXTERNO"
      />
    </Container>
  ) : null
}

export default DIPTeam

const Container = styled.div``
