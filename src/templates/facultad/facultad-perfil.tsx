import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'
import colors from 'components/colors'
import { container, mq } from 'components/grid'
import { Facultad } from 'client'
import blur from 'styles/blur'

export interface FacultadProps {
  facultad: Facultad | Facultad['preview']['node'] | null | undefined
}

const FacultyPerfil = ({ facultad }: FacultadProps) => {
  const {
    color,
    nombreDecano,
    puestoDecano,
    biografiaDecano,
    fotoDecano,
  } = facultad

  return (
    <Section>
      <SpercialSection>
        <Container>
          <CubeDecano decoBg={color || colors.primary.dark}>
            <Media>
              <Image
                src={fotoDecano?.mediaItemUrl ?? blur}
                width={1920}
                height={1920}
                alt={nombreDecano}
                objectFit="cover"
                blurDataURL={blur.src}
                placeholder="blur"
              />
            </Media>
            <CubeDecano2 decoBg={color || colors.primary.dark} />
          </CubeDecano>

          <Content>
            <Title color={color || colors.primary.dark}>
              <JobTitle>{puestoDecano}</JobTitle>
              <Name>{nombreDecano}</Name>
            </Title>
            <div dangerouslySetInnerHTML={{ __html: biografiaDecano }} />
          </Content>
        </Container>
      </SpercialSection>
    </Section>
  )
}

export default FacultyPerfil

const Section = styled.section`
  background: ${colors.gray.light};
  overflow: hidden;
  padding-bottom: 10rem;
`

const SpercialSection = styled.section`
  margin: 5.5rem auto;
  ${mq.md} {
    margin-bottom: 9.6rem;
    margin-top: 12.6rem;
  }
`

const Container = styled.div`
  ${container}
  display:grid;
  grid-template-columns: 100%;
  align-items: flex-start;

  ${mq.lg} {
    grid-template-columns: 50% 50%;
  }
`

const Content = styled.div`
  padding: 0 1.5rem;
  align-self: center;
  ${mq.md} {
    padding: 0 2rem;
  }
`

const Title = styled.h2`
  color: ${(props) => props.color};
  line-height: 1;
`

const JobTitle = styled.span`
  color: inherit;
  font-weight: 300;
  display: block;
  transform-origin: 0% 50%;
  transform: scale(0.6);
  line-height: inherit;
`

const Name = styled.span`
  color: inherit;
  font-weight: inherit;
  display: block;
  line-height: inherit;
`

const CubeDecano = styled.div`
  position: relative;
  width: 80%;
  height: fit-content;
  max-width: 50rem;
  margin: 0 auto;
  margin-top: 4rem;
  margin-bottom: 2rem;
  &::before {
    content: '';
    position: absolute;
    left: -7%;
    top: 16%;
    padding: 10%;
    background: ${(props: { decoBg?: string }) => props.decoBg};
    z-index: 1;
    box-shadow: 0 2.5rem 2.5rem rgba(0, 0, 0, 0.5);
    opacity: 0.5;
  }
`

const CubeDecano2 = styled.div`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    padding: 15%;
    background: ${(props: { decoBg?: string }) => props.decoBg};
    opacity: 0.3;
    right: 0;
    bottom: 0;
    transform: translate(35%, -67%);
  }
  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    background: ${(props: { decoBg?: string }) => props.decoBg};
    transform: translate(34%, -203%);
    padding: 7%;
    z-index: 2;
  }
`

const Media = styled.div`
  border-radius: 50%;
  overflow: hidden;
  font-size: 0;
`
