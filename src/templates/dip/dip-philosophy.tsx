import React from "react";
import { useState } from "react";
import styled from "@emotion/styled";
import colors from "components/colors";
import { container, mq } from "components/grid";
import { css } from "@emotion/react";

import { Spring, animated } from "@react-spring/web";

const DIPPhilosophy = (props) => {
  const tabs = [
    {
      title: "Departamento De Investigaciones y Publicaciones",
      content: `
                <p>Este departamento es dependiente de la Vicerrectoría de Investigación, Extensión y Postgrado de la Universidad ISA. El mismo tiene la responsabilidad institucional de posicionarla, en forma sostenible como, uno de los principales referentes en los círculos científicos y empresariales a nivel nacional y regional, debido a la calidad y pertinencia de sus investigaciones, así como por la rigurosidad y volumen de sus publicaciones.</p>
            `,
    },
    {
      title: "Misión",
      content: `
                <p>Desarrollar, factibilizar y fortalecer la investigación y publicación científica, tecnológica y de innovación, mediante prácticas éticas y temas relevantes con impacto a nivel nacional e internacional.</p>
            `,
    },
    {
      title: "Visión",
      content: `
                <p>Ser un departamento que posibilite, impulse y apoye las investigaciones y publicaciones, a los fines de contribuir en la solución de problemas de la sociedad.</p>
            `,
    },
    {
      title: "Naturaleza de la investigación en la Universidad ISA",
      content: `
                <p>La Universidad ISA, en el marco de su naturaleza y el compromiso institucional con el desarrollo profesional, económico, social y cultural de la sociedad dominicana, contribuye en función de los problemas nacionales e internacionales, a través de diferentes formas de investigación científica, tecnológica y humanística, cuyos objetivos son: </p>
                <ul>
                    <li>Estimular la investigación en ciencias básicas, aplicadas y el desarrollo tecnológico, desde una perspectiva cuantitativa y/ o cualitativa, en diferentes áreas del conocimiento, así como en aquellas propias del quehacer de la universidad en su contexto nacional, regional e internacional</li>
                    <li>Estimular las iniciativas individuales y colectivas al interior de las unidades académicas, contribuyendo a la generación y desarrollo de la investigación en el seno de la universidad, ajustándose a los planes de desarrollo del departamento y la universidad</li>
                    <li>Fomentar la convergencia de esfuerzos de distintas áreas del conocimiento de la universidad, en torno a uno o más problemas que ésta se plantee institucionalmente, por la relevancia que puedan tener para el país y/o la región</li>
                    <li>Incentivar, apoyar y ofrecer el debido seguimiento a la postulación de proyectos a fondos externos, a nivel nacional, regional e internacional</li>
                    <li>Incentivar y apoyar la realización de las publicaciones indexadas del personal de investigación y de los estudiantes de la universidad</li>
                    <li>Generar conocimiento que aporta al quehacer científico y desarrollo tecnológico nacional y regional, basado en los principios fundamentales de la universidad.</li>
                </ul>
            `,
    },
  ];

  // Index 0 by default
  const [view, setView] = useState(0);

  const handlerView = (value) => setView(value);

  return (
    <StyledSection fluid {...props}>
      <Container>
        <DecoContainer />
        <ColumnOne>
          {tabs.map((item, i) => {
            const { title, content } = item;

            const isActive = view === i;

            return (
              <Spring
                key={i}
                reset={isActive}
                from={{ opacity: 0 }}
                to={[{ opacity: 1 }]}
              >
                {(styles) => (
                  <animated.div style={styles}>
                    <CardInfo key={i} active={isActive}>
                      <CardTitle>{title}</CardTitle>
                      <div dangerouslySetInnerHTML={{ __html: content }} />
                    </CardInfo>
                  </animated.div>
                )}
              </Spring>
            );
          })}
        </ColumnOne>
        <ColumnTwo>
          <List>
            {tabs.map((item, i) => {
              const { title } = item;

              const isActive = view === i;

              return (
                <Item key={i} onClick={() => handlerView(i)} active={isActive}>
                  {title}
                </Item>
              );
            })}
          </List>
        </ColumnTwo>
      </Container>
    </StyledSection>
  );
};

export default DIPPhilosophy;

const StyledSection = styled.section`
  ${container}
  margin-top: 9.5rem;
  &:before {
    content: "";
    background-color: ${colors.blue.dark};
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    ${mq.lg} {
      width: 50%;
    }
  }
  &:after {
    content: "";
    position: absolute;
    background: ${colors.blue.base};
    width: 15%;
    padding-bottom: 15%;
    bottom: 0;
    right: 0;
    border-radius: 50%;
    transform: translate(50%, 50%);
    opacity: 0.8;
    z-index: 3;
  }
`;

const Container = styled.div`
  ${container}
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "col_2 col_2"
    "col_1 col_1";

  ${mq.lg} {
    grid-template-areas: "col_1 col_2";
  }
`;

const DecoContainer = styled.div`
  position: relative;
  z-index: -1;
  background: ${colors.gray.light};
  width: 100%;
  padding-bottom: 13%;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: -5rem;
  display: none;
  ${mq.lg} {
    display: block;
  }
`;

const ColumnOne = styled.div`
  background-color: ${colors.blue.dark};
  grid-area: col_1;
  z-index: 3;
  ${mq.lg} {
    padding-right: 1.5rem;
  }
`;

const ColumnTwo = styled.div`
  z-index: 2;
  grid-area: col_2;
`;

const CardInfo = styled.div`
  display: none;
  margin-top: 4rem;
  min-height: 40rem;
  color: white;
  padding-bottom: 4rem;

  ${mq.lg} {
    min-height: 70rem;
    margin-top: 6rem;
  }
  ${(props: { active?: boolean }) =>
    props.active
      ? css`
          display: block;
        `
      : ""};
`;

const CardTitle = styled.h2`
  color: white;
  text-transform: uppercase;
  margin-bottom: 3rem;
`;

const List = styled.ul`
  padding: 1rem 0;
  max-width: 75rem;
  margin: 0 auto;
  text-align: center;
  background-color: ${colors.gray.light};
  margin-top: -4rem;
  position: relative;
  ${mq.lg} {
    text-align: left;
    background-color: initial;
    margin-top: initial;
    padding: 0;
    padding-left: 3rem;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 3rem;
    padding-bottom: 3rem;
    background-color: ${colors.blue.dark};
    border-radius: 50%;
    transform: translate(-50%, -50%);
    ${mq.lg} {
      width: 6rem;
      padding-bottom: 6rem;
      transform: translate(0%, -120%);
    }
  }
`;

const Item = styled.li`
  display: inline-block;
  list-style: none;
  font-size: 2rem;
  /* text-transform: uppercase; */
  cursor: pointer;
  padding: 1rem;
  margin: 0;
  ${mq.lg} {
    display: block;
    font-size: 3rem;
  }

  ${(props: { active?: boolean }) =>
    props.active
      ? css`
          font-weight: 600;
          text-decoration: underline;
          text-decoration-color: ${colors.secondary.base};
          text-decoration-thickness: 0.3rem;
          transition: padding 900ms ease-out;
        `
      : ""};
`;
