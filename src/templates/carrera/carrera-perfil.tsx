import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Image from "next/image";
import { container, mq } from "components/grid";
import colors from "components/colors";
import { Carrera } from "client";
import blur from "styles/blur";

interface CarreraProps {
  carrera?: Carrera;
}

const CarreraPerfil = ({ carrera }: CarreraProps) => {
  const { imagenPerfilEgresado, contenidoPerfilEgresado, facultad } = carrera;

  const tituloPerfilEgresado = "Perfil del egresado";

  const facultyColor = facultad?.node?.color || colors.primary.base;

  return (
    <Section>
      <Container>
        <Media decoBgColor={facultyColor}>
          <Image
            src={imagenPerfilEgresado.mediaItemUrl ?? blur}
            alt={tituloPerfilEgresado}
            width={1920}
            height={2688}
            objectFit="cover"
            blurDataURL={blur.src}
            placeholder="blur"
            priority
          />
        </Media>

        <Content>
          <Title color={facultyColor}>{tituloPerfilEgresado}</Title>
          <Description
            dangerouslySetInnerHTML={{ __html: contenidoPerfilEgresado }}
          />
        </Content>
      </Container>
    </Section>
  );
};

export default CarreraPerfil;

const Section = styled.div`
  margin-bottom: 5.5rem;
  margin-top: 5.5rem;
  ${mq.md} {
    margin-bottom: 9.6rem;
    margin-top: 9.6rem;
  }
`;

const Container = styled.div`
  ${container}
  padding: 0;

  display: grid;
  grid-template-columns: 100%;

  ${mq.lg} {
    grid-template-columns: 51% 49%;
  }
`;
interface MediaProps {
  decoBgColor?: string;
}
const Media = styled.div`
  ${({ decoBgColor = "green" }: MediaProps) => css`
    width: 100%;
    position: relative;
    max-width: 40rem;
    height: fit-content;
    margin: 0 auto;
    padding: 0 1.5rem;
    margin-top: -25%;
    background-color: ${colors.gray.light};
    font-size: 0;
    ${mq.lg} {
      max-width: 75%;
      order: 2;
    }
    &:before {
      content: "";
      background-color: ${decoBgColor};
      width: 15%;
      padding-bottom: 15%;
      position: absolute;
      bottom: 0;
      right: 0;
      transform: translate(50%, 50%);
      box-shadow: 0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.15);
      z-index: 1;
    }
  `}
`;

const Content = styled.div`
  margin: 0 auto;
  padding: 4rem 1.5rem;
  position: relative;
  z-index: 2;
`;

const Title = styled.h2`
  ${({ color = "green" }) => css`
    color: ${color};
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 3rem;
  `}
`;

const Description = styled.div``;
