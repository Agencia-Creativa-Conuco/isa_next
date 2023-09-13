import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import colors from "components/colors";
import { container, mq } from "components/grid";
import rector from "../../../public/images/nosotros/rector.jpg";

const NosotrosRector = (props) => {
  const name = "Dr. Edwin Reyes",
    jobtitle = "Rector",
    content = `
            <p>En nombre de la Universidad ISA, les doy la bienvenida a este portal a través del cual podrán obtener información relevante sobre nuestra institución, además de todas las opciones que tiene la Universidad para ofrecerles como alternativa al momento de elegir una alma máter para su educación.</p>
            <p>Nuestra institución brinda opciones que comprenden diferentes áreas del conocimiento, tanto a nivel técnico, grado y postgrado. Asimismo, nos preocupamos por la formación de recursos humanos para nuestra sociedad, siendo un espacio que se enfoca en generar tecnologías y servicios a los sectores productivos.</p>
            <p>De su lado, nuestro excelente equipo de profesores está empeñado en educar a nuestros estudiantes como buenos profesionales en cada una de sus áreas, cada uno orientados a inculcar valores que primen en cada componente de nuestra estructura social.</p>
            <p>Nuestros egresados, son muestra de nuestros principios de honestidad y responsabilidad que nos distinguen en el quehacer profesional.</p>
            <p>En esta página podrán encontrar la información necesaria para poder orientarse sobre todo lo que ofrecemos, espero les sirva de ayuda.</p>
        `;

  return (
    <Section {...props}>
      <Container>
        <CubeRector>
          <Media>
            <Image
              src={rector}
              alt={name}
              width={1920}
              height={1920}
              objectFit="cover"
              placeholder="blur"
            />
          </Media>
          <CubeRector2 />
        </CubeRector>
        <Content>
          <SectionTitle>
            <TitleText>{name}</TitleText>
            <TitleText>{jobtitle}</TitleText>
          </SectionTitle>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Content>
      </Container>
    </Section>
  );
};

export default NosotrosRector;

const Section = styled.section`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 7%;
    padding-bottom: 7%;
    background: ${colors.primary.base};
    right: 0;
    top: -1%;
    box-shadow: 0 2.5rem 2.5rem rgba(0, 0, 0, 0.25);
  }
`;

const Container = styled.div`
  ${container}
  display: grid;
  grid-template-columns: 100%;

  ${mq.lg} {
    grid-template-columns: 50% 50%;
  }
`;

const Content = styled.div``;

const SectionTitle = styled.h2`
  margin-top: 10rem;
`;

const TitleText = styled.span`
  display: block;
  &:last-of-type {
    transform-origin: 0 0;
    transform: scale(0.7);
  }
`;

const CubeRector = styled.div`
  position: relative;
  width: 54rem;
  height: fit-content;
  max-width: 100%;
  margin: 4rem auto 0;
  align-self: center;
  ${mq.md} {
    padding-right: 6rem;
  }
  &::before {
    content: "";
    position: absolute;
    left: 8%;
    top: 8%;
    width: 13%;
    padding-bottom: 13%;
    background: ${colors.primary.base};
    z-index: 2;
    box-shadow: 0 2.5rem 2.5rem rgba(0, 0, 0, 0.5);
  }
  &::after {
    content: "";
    position: absolute;
    width: 5%;
    padding-bottom: 5%;
    background: ${colors.primary.base};
    left: 2%;
    top: 2%;
    opacity: 0.6;
    z-index: -1;
  }
`;

const CubeRector2 = styled.div`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 45%;
    padding-bottom: 35%;
    background: ${colors.primary.base};
    opacity: 0.3;
    right: 0;
    bottom: 0;
    transform: translate(-40%, 20%);
    z-index: -1;
  }
  &::after {
    content: "";
    position: absolute;
    width: 30%;
    padding-bottom: 15%;
    background: ${colors.primary.base};
    opacity: 0.3;
    right: 0;
    bottom: 0;
    transform: translate(-10%, 47%);
    z-index: -1;
  }
`;
const Media = styled.div`
  border-radius: 50%;
  overflow: hidden;
  font-size: 0;
`;
