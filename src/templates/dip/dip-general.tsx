import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Carousel from "react-slick";
import Image from "next/image";
import colors from "components/colors";
import Link from "next/link";
import { h4 } from "styles/tipography";
import { container, mq } from "components/grid";
import { client } from "client";
import blur from "styles/blur";

const DIPGeneral = (props) => {
  const { useQuery } = client;

  const facultades = useQuery().facultades({
    first: 10000,
  })?.nodes;

  const departamentos = useQuery()
    .departamentos({
      first: 10000,
    })
    ?.nodes?.filter(
      (departamento) => departamento.lineasDeInvestigacion()?.nodes?.length
    );

  const lineasDeInvestigacion = useQuery().lineasDeInvestigacion({
    first: 10000,
  })?.nodes;

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState([]);
  const [slider2, setSlider2] = useState([]);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  return departamentos.length ? (
    <Section fluid {...props}>
      <Carousel
        arrows={false}
        dots
        appendDots={(dots: any[]) => {
          return (
            <Dots>
              {dots.map((item, index) => {
                return <Dot key={index}>{item}</Dot>;
              })}
            </Dots>
          );
        }}
        asNavFor={nav2}
        ref={(slider: any) => setSlider1(slider)}
      >
        {departamentos.map((item, index) => {
          const { imagenPortada, nombre } = item;

          return (
            <Media key={index}>
              <Image
                src={imagenPortada.mediaItemUrl ?? blur}
                alt={nombre}
                width={1920}
                height={1080}
                objectFit="cover"
                blurDataURL={blur.src}
                placeholder="blur"
              />
            </Media>
          );
        })}
      </Carousel>
      <Carousel
        arrows={false}
        fade
        asNavFor={nav1}
        ref={(slider: any) => setSlider2(slider)}
      >
        {departamentos.map((departamento, index) => {
          const [facultad] = facultades.filter((facultad) => {
            return departamento.facultad.node.id === facultad.id;
          });

          const lines = lineasDeInvestigacion.filter((line) =>
            departamento
              .lineasDeInvestigacion()
              ?.nodes.map((item) => item.id)
              .includes(line.id)
          );

          return (
            <Departament key={index}>
              <ContentContainer>
                {facultad ? <FacultyName>{facultad.nombre}</FacultyName> : null}
                <DepartamentName>{departamento.nombre}</DepartamentName>
                <DepartamentProjects>
                  {lines.map((item, index) => {
                    const { nombre } = item;
                    return (
                      <Project key={index}>
                        <StyledLink href={item?.uri ?? ""}>
                          <ProjectName>{nombre}</ProjectName>
                        </StyledLink>
                      </Project>
                    );
                  })}
                </DepartamentProjects>
              </ContentContainer>
            </Departament>
          );
        })}
      </Carousel>
    </Section>
  ) : null;
};

export default DIPGeneral;

const Section = styled.section`
  ${container}
  padding: 0;

  display: grid;
  grid-template-columns: 100%;

  ${mq.lg} {
    grid-template-columns: 50% 50%;
  }
`;

const ContentContainer = styled.div`
  ${container}
  width: 200%;

  margin: 5rem auto;

  ${mq.lg} {
    margin: 7rem 0 5rem 2rem;

    width: 80%;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Departament = styled.div``;

const FacultyName = styled.h3`
  margin-bottom: 0rem;
  font-weight: 300;
  text-transform: uppercase;
`;

const DepartamentName = styled.h2`
  margin-top: 0;
  margin-bottom: 4rem;
  font-weight: 900;
  text-transform: uppercase;
`;

const DepartamentProjects = styled.ul`
  /* padding: 0;
    margin: 0; */
`;

const Project = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
  color: ${colors.gray.base};
  transition: all 0.25s ease-in-out;
  position: relative;
  z-index: 1;
  &:hover {
    color: ${colors.secondary.base};
  }
`;

const ProjectName = styled.h3`
  ${h4}
  margin: 0rem;
  font-weight: initial;
  text-transform: uppercase;
  color: inherit;
  padding: 1rem 0;
`;

const Dots = styled.ul`
  margin: 0;
  padding: 0;
  position: absolute;
  bottom: 2rem;
`;

const Dot = styled.div`
  margin: 0;
  padding: 0;
  list-style: none;
  display: inline-block;
  button {
    margin: 0 !important;
    padding: 0 !important;
    width: 1.5rem !important;
    height: 1.5rem !important;
    border-radius: 50% !important;
    background-color: white !important;
    opacity: 0.5;
    &:before {
      content: none !important;
    }
    &:after {
      content: none;
    }
  }
  .slick-active {
    button {
      opacity: 1;
    }
  }
`;

const Media = styled.div`
  display: grid;
  font-size: 0;
`;
