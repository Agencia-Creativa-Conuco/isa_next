import React from 'react'
import styled from '@emotion/styled'
import { container } from 'components/grid'
import colors from 'components/colors'

const InvestigacionResume = ({ investigacion }) => {
  const { resumen } = investigacion

  return (
    <BGSection>
      <Container space thin>
        <Content>
          <Copy dangerouslySetInnerHTML={{ __html: resumen }} />
        </Content>
      </Container>
    </BGSection>
  )
}

export default InvestigacionResume

const BGSection = styled.section`
  /* overflow: hidden; */
  &:before {
    content: '';
    position: absolute;
    width: 100%;
    bottom: 0;
    height: calc(100% + 70rem);
    background-color: ${colors.gray.light};
    z-index: -1;
  }
`

const Container = styled.div`
  ${container}
`

const Content = styled.div`
  overflow: hidden;
`

const Copy = styled.div``
