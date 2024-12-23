import React from "react";
import { GetStaticPropsContext } from "next";
import { getNextStaticProps } from "@faustjs/next";
import { client } from "client";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Carousel from "react-slick";
import Layout from "../components/layout";
import Image from "next/image";
import colors from "components/colors";
import { LeftArrowIcon, RightArrowIcon } from "../components/icons";
import { container, mq } from "components/grid";
import logo from "../../public/images/liaai/logo.jpg";
import liaai01 from "../../public/images/liaai/liaai01.jpg";
import liaai03 from "../../public/images/liaai/liaai03.jpg";
import liaai04 from "../../public/images/liaai/liaai04.jpg";
import liaai05 from "../../public/images/liaai/liaai05.jpg";
import liaai07 from "../../public/images/liaai/liaai07.jpg";
import Page from "components/PageMeta";
import { useRouter } from "next/router";
import { REVALIDATE_TIME, SITE_URL } from "lib/constants";

const Arrows = (props) => {
  const Arrow = styled.div`
    border-radius: 50%;
    background-color: white;
    color: ${colors.primary.dark};
    margin: 0 3rem;
    z-index: 2;
    position: absolute;
    top: 50%;

    ${mq.md} {
      display: block !important;
      width: 5rem;
      height: 5rem;
      padding: 1rem;
      margin: 0;
      box-shadow: 0px 0px 1px #b7b8b9;
    }
    &:focus {
      background-color: white;
      color: white;
    }
    &:hover {
      background-color: white;
      color: white;
    }
    &:before {
      content: initial;
    }
  `;

  return <Arrow {...props} />;
};

const LIAAI = (props) => {
  const metaData = {
    title: "LIAAI",
    description:
      "El Laboratorio de Inocuidad de Alimentos y Análisis Industrial (LIAAI), es una dependencia de carácter científico y tecnológico, con autonomía administrativa, adscrito a la Universidad ISA.  El LIAAI nace con la intención de responder a la necesidad del sector agrícola e industrial de tener a la  disposición un laboratorio, con personal altamente capacitado, tecnología especializada, capaz de ofrecer servicios de análisis destinados a confirmar la calidad de los productos según los requerimientos nacionales e internacionales.",
  };

  const router = useRouter();

  const seo = {
    title: "LIAAI",
    description:
      "El Laboratorio de Inocuidad de Alimentos y Análisis Industrial (LIAAI), es una dependencia de carácter científico y tecnológico, con autonomía administrativa, adscrito a la Universidad ISA.  El LIAAI nace con la intención de responder a la necesidad del sector agrícola e industrial de tener a la  disposición un laboratorio, con personal altamente capacitado, tecnología especializada, capaz de ofrecer servicios de análisis destinados a confirmar la calidad de los productos según los requerimientos nacionales e internacionales.",
    canonical: SITE_URL + router.asPath,
    // noFollow: carrera.seo.metaRobotsNofollow,
    // noIndex: carrera.seo.metaRobotsNoindex,
  };

  const imagesSlider = [liaai01, liaai03, liaai04, liaai05, liaai07];

  return (
    <Page uri="/liaai">
      <Layout {...{ seo }}>
        <Section>
          <Container>
            <Overlay>
              <Logo>
                <Image
                  src={logo}
                  alt="Laboratorio de Inocuidad de Alimentos y Análisis Industrial (LIAAI)"
                />
              </Logo>
              <Title>
                Laboratorio de Análisis Industrial e Inocuidad de los Alimentos
              </Title>
              <p>
                El Laboratorio de Inocuidad de Alimentos y Análisis Industrial
                (LIAAI), es una dependencia de carácter científico y
                tecnológico, con autonomía administrativa, adscrito a la
                Universidad ISA. El LIAAI nace con la intención de responder a
                la necesidad del sector agrícola e industrial de tener a la
                disposición un laboratorio, con personal altamente capacitado,
                tecnología especializada, capaz de ofrecer servicios de análisis
                destinados a determinar la calidad de los productos según los
                requerimientos nacionales e internacionales.
              </p>
            </Overlay>
          </Container>
        </Section>

        <SPoliticas>
          <SSection as="div">
            <Container>
              <Section>
                <SubTitle>Políticas de Gestión LIAAI</SubTitle>
                <ListPolíticas>
                  <li>
                    El Laboratorio de Inocuidad de Alimentos y Análisis
                    Industrial (LIAAI) tiene como política garantizar la
                    competencia técnica en sus actividades, así como la validez
                    técnica de los resultados de ensayos microbiológicos,
                    químicos, físicos y físicoquímicos, cumpliendo,
                    permanentemente, los requerimientos de nuestros clientes,
                    las reglamentaciones aplicables de los organismos normativos
                    en el ámbito nacional e internacional y los requisitos de
                    las organizaciones que otorgan reconocimiento.
                  </li>
                  <li>
                    La Alta Gerencia asegura la provisión de los recursos
                    necesarios (personal, equipos, instalaciones, trazabilidad
                    metrológica, información y seguridad) para gestionar riesgos
                    y lograr que las operaciones se desarrollen en forma
                    coherente, confiable, imparcial y confidencial.
                  </li>
                  <li>
                    El personal y la Alta Gerencia del LIAAI están totalmente
                    comprometidos con el cumplimiento del sistema de gestión y
                    la implementación de mejoras e innovación de todos los
                    procesos, según la Norma ISO/IEC/17025.
                  </li>
                </ListPolíticas>
              </Section>
            </Container>
          </SSection>
        </SPoliticas>

        <SectionSlider>
          <Container>
            <Carousel
              prevArrow={
                <Arrows>
                  <LeftArrowIcon />
                </Arrows>
              }
              nextArrow={
                <Arrows>
                  <RightArrowIcon />
                </Arrows>
              }
              autoplay={false}
              pauseOnHover
            >
              {imagesSlider.map((image, index) => {
                return (
                  <Image
                    key={index}
                    src={image}
                    alt="LIAAI"
                    width={1920}
                    height={1080}
                    objectFit="cover"
                    placeholder="blur"
                  />
                );
              })}
            </Carousel>
          </Container>
        </SectionSlider>

        <SectionServicios>
          <Container>
            <SubTitle>Servicios que ofrece</SubTitle>

            <CotainerServices>
              <div>
                <h3>Análisis Microbiológicos</h3>
                <ul>
                  <li>Aerobio Mesófilos</li>
                  <li>Echericha coli</li>
                  <li>Coliformes Fecales</li>
                  <li>Coliformes Totales</li>
                  <li>Enterobacteria</li>
                  <li>Listeria</li>
                  <li>Pseudomona</li>
                  <li>Recuent E.c</li>
                  <li>Salmonella</li>
                  <li>Staphylococcus aureus</li>
                  <li>CPP Aerobios Mesófilos</li>
                  <li>CPP E. coli</li>
                  <li>CPP Enterobacterias</li>
                  <li>CPP Coliformes Totales</li>
                  <li>CPP Salmonella</li>
                  <li>CPP Staphylococcus aureus</li>
                  <li>NMP E. coli</li>
                  <li>NMP Coliformes Fecales</li>
                  <li>NMP Coliformes Totales</li>
                  <li>NMP Pseudomonas</li>
                </ul>
              </div>
              <div>
                <h3>Análisis Físicos, Químicos y Fisico-Químicos</h3>
                <ul>
                  <li>Pesticidas en frutas y vegetales.</li>
                  <li>
                    Fisico-Quimicos: pH, conductividad eléctrica, turbidez,
                    salinidad, dureza y sólidos totales disueltos.
                  </li>
                  <li>Nitritos.</li>
                  <li>% Ceniza total.</li>
                  <li>Residuos de pesticidas (frutas, vegetales, suelos) </li>
                  <li>pH en alimentos </li>
                  <li>pH en agua </li>
                  <li>pH en suelos </li>
                  <li>Turbidez </li>
                  <li>Sólidos Totales Disueltos ( STD) </li>
                  <li>Conductividad eléctrica (CE) </li>
                  <li>Demanda Bioquímica de Oxígeno (DBO) </li>
                  <li>Demanda Química de Oxígeno (DQO) </li>
                  <li>Fosfato reactivo (ortofosfato) </li>
                  <li>Dureza Salinidad </li>
                  <li>Porcentaje de Cenizas Totales </li>
                  <li>Humedad </li>
                  <li>Actividad de Agua </li>
                  <li>Materia Seca </li>
                  <li>Sólidos Solubles</li>
                  <li>Nitritos (En Embutidos) </li>
                  <li>Acidez Titulable </li>
                  <li>Viscosidad </li>
                  <li>Consistencia</li>
                  <li>Índice de solubilidad en agua </li>
                  <li>Índice de absorción de agua </li>
                  <li>Poder de hinchamiento </li>
                  <li>Densidad aparente (alimentos y forraje)</li>
                  <li>Granulometría/tamaño de partículas Materia volátil </li>
                  <li>Poder calorífico superior </li>
                  <li>Carbono fijado </li>
                  <li>Carbono orgánico total (suelos) </li>
                  <li>Materia orgánica total (suelos) </li>
                  <li>Textura (suelos)</li>
                  <li>Materia grasa en leche (Gerber) </li>
                  <li>Materia grasa en carne y embutidos (Soxhlet) </li>
                  <li>Índice de refracción </li>
                  <li>Capacidad de retención de agua (carne y embutidos) </li>
                  <li>Contenido de metoxilos (pectinas)</li>
                  <li>Contenido Ácido galacturónico (pectinas) </li>
                  <li>Grado de Esterificación (pectinas) </li>
                  <li>
                    Pectina soluble en agua y pectina total Ácidos Grasos Libres
                  </li>
                </ul>
              </div>
            </CotainerServices>
          </Container>
        </SectionServicios>
      </Layout>
    </Page>
  );
};

export default LIAAI;

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page: LIAAI,
    client,
    revalidate: REVALIDATE_TIME,
  });
}

const Section = styled.section`
  position: relative;
  z-index: 3;
  margin-top: 6.4rem;

  ${mq.md} {
    margin-top: 12.8rem;
  }
`;

const Container = styled.div`
  ${container};
`;

const Overlay = styled.div`
  padding: 5%;
  position: relative;
  background-color: white;
  margin-bottom: -10%;
  border-radius: 2rem;
  &:before {
    content: "";
    position: absolute;
    border-radius: 2rem;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 70%;
    box-shadow: 0 0 3.5rem rgba(0, 0, 0, 0.3);
    z-index: -1;
  }
`;
const SPoliticas = styled.section`
  position: relative;
  margin-top: 0;
  z-index: 2;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 5%;
    padding-bottom: 5%;
    height: 0;
    background-color: ${colors.primary.base};
    transform: translate(50%, -50%);
    z-index: 1;
  }
  /* &:after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10%;
    padding-bottom: 10%;
    height: 0;
    background-color: ${colors.primary.base};
    transform: translate(50%, 50%);
    z-index: 1;
  } */
`;

const SectionSlider = styled.section`
  position: relative;
  margin-top: 0;
  margin-bottom: 5.5rem;
  ${mq.md} {
    margin-bottom: 9.6rem;
  }
  &:before {
    content: "";
    position: absolute;
    top: -50%;
    left: 0;
    background: ${colors.primary.dark};
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &:after {
    content: "";
    position: absolute;
    bottom: 50%;
    right: 0;
    width: 10%;
    padding-bottom: 10%;
    height: 0;
    background-color: ${colors.primary.base};
    transform: translate(50%, 50%);
    z-index: -1;
  }
`;

const Logo = styled.div`
  max-width: 25rem;
  margin: 0 auto;
  margin-bottom: 3rem;
  ${mq.md} {
    max-width: 35rem;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 4rem;
`;

const SSection = styled.div`
  margin-bottom: 5.5rem;
  padding-top: 5%;
  ${mq.md} {
    margin-bottom: 9.6rem;
  }
  background-color: ${colors.primary.dark};
  color: white;
  overflow: hidden;
`;

const SectionServicios = styled.div`
  margin-bottom: 5.5rem;

  h2 {
    color: ${colors.primary.dark};
  }
  ${mq.md} {
    margin-bottom: 9.6rem;
  }
  overflow: hidden;
`;

const SubTitle = styled.h2`
  color: white;
  margin-top: 0;
  margin-bottom: 3rem;
`;

const ListPolíticas = styled.ul`
  display: grid;
  column-gap: 1.5rem;
  row-gap: 1.5rem;
  margin: 0;
  ${mq.md} {
    grid-template-columns: 1fr 1fr;
  }
  ${mq.lg} {
    grid-template-columns: 1fr 1fr;
  }
`;
const CotainerServices = styled.div`
  display: grid;
  grid-template-columns: 100%;
  ${mq.md} {
    grid-template-columns: 50% 50%;
  }
`;
