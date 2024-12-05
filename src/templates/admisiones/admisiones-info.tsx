import React, { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { AdmissionRequisiteIcon } from "components/icons";
import { h2 } from "styles/tipography";
import { Spring, animated } from "@react-spring/web";
import colors from "components/colors";
import { container, mq } from "components/grid";
import { client } from "client";

const AdmisionesInfo = (props) => {
  const { useQuery } = client;
  const categories = useQuery().gruposDeRequisitos({
    first: 10000,
  }).nodes;

  //Obtiene los grados
  const grades = useQuery()
    .grados({
      first: 10000,
    })
    ?.nodes // ?.sort((a, b) => a.order - b.order)
    ?.filter((grade) => {
      return grade.datosRequisitos.requisitos?.length;
    })
    .sort((a, b) => a.orden - b.orden);

  const [view, setView] = useState(0);

  return grades.length ? (
    <Section fluid {...props}>
      <Navigation>
        <ColumnContainer>
          <Icon>
            <AdmissionRequisiteIcon />
          </Icon>
          <ImtemUl>
            {grades.map((grade, index) => {
              const isActive = view === index;

              const { nombre, id } = grade;

              return (
                <Item
                  key={index}
                  color={isActive ? "white" : colors.secondary.dark}
                  onClick={() => setView(index)}
                  {...{ isActive }}
                >
                  <ItemName>{nombre}</ItemName>
                </Item>
              );
            })}
          </ImtemUl>
        </ColumnContainer>
      </Navigation>

      <Displayer>
        {grades.map((grade, index) => {
          const requisitos = grade.datosRequisitos?.requisitos;

          const isActive = view === index;

          return (
            <Spring
              key={index}
              reset={isActive}
              from={{ opacity: 0 }}
              to={[{ opacity: 1 }]}
            >
              {(styles) => (
                <animated.div style={styles}>
                  <DisplayerSection key={index} hidden={view !== index}>
                    <DisplayerSectionTitle color={colors.secondary.dark}>
                      Requisitos de admisión {grade.title()}
                    </DisplayerSectionTitle>

                    <Groups>
                      {categories.map((group, index) => {
                        const { id, name } = group;

                        const catRequirements = requisitos?.filter((item) => {
                          return item.categoria
                            .map((category) => category.id)
                            .includes(id);
                        });

                        return catRequirements.length ? (
                          <Group key={index} color={colors.secondary.dark}>
                            <GroupName>{name}</GroupName>
                            <Requirements>
                              {catRequirements.map((item, index) => {
                                return (
                                  <Requirement
                                    key={index}
                                    color={colors.secondary.dark}
                                  >
                                    {item.requisito}
                                  </Requirement>
                                );
                              })}
                            </Requirements>
                          </Group>
                        ) : null;
                      })}
                    </Groups>
                  </DisplayerSection>
                </animated.div>
              )}
            </Spring>
          );
        })}
      </Displayer>
    </Section>
  ) : null;
};

export default AdmisionesInfo;

const Section = styled.section`
  ${container}
  padding: 0;

  display: grid;
  grid-template-columns: 100%;
  grid-template-areas:
    "col_2"
    "col_1";

  ${mq.md} {
    grid-template-columns: 58% 33% 9%;
    grid-template-areas: "col_1 col_2 space";
  }
`;
const Navigation = styled.div`
  background-color: ${colors.secondary.light};
  width: 100%;
  margin: 0 auto;
  padding: 10%;
  grid-area: col_2;
  ${mq.sm} {
    padding: 5%;
  }
  ${mq.md} {
    padding: 3rem;
  }
`;

const ColumnContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  ${mq.sm} {
    grid-template-columns: 1fr 1fr;
  }
  ${mq.md} {
    grid-template-columns: 100%;
  }
`;

const ImtemUl = styled.ul`
  margin: 0;
  padding: 0;
  align-self: end;
`;
interface ItemProps {
  color?: string;
  isActive?: boolean;
}
const Item = styled.li`
  ${({ color = "green", isActive }: ItemProps) => css`
    ${h2}
    cursor: pointer;
    font-weight: bold;
    text-align: right;
    text-transform: uppercase;
    list-style: none;
    color: ${color};
    margin: 0;
    margin-bottom: 0rem;
    padding: 0.5rem 0;
    transition: all 0.25s ease-in-out;
    ${isActive
      ? css`
          transform-origin: 100% 0%;
          transform: scale(1.2);
        `
      : css``}
  `}
`;

const ItemName = styled.span`
  display: block;
`;

const Displayer = styled.div`
  grid-area: col_1;
  background-color: ${colors.secondary.lighter};
`;

const DisplayerSection = styled.div`
  margin: 0;
  text-align: right;
  padding: 10%;
  ${mq.sm} {
    padding: 5%;
  }
  ${mq.md} {
    padding: 3rem;
  }
`;

const DisplayerSectionTitle = styled.h2`
  ${({ color = "red" }) => css`
    color: ${color};
    text-transform: uppercase;
    font-weight: 900;
    margin-top: 0;
  `}
`;

const Groups = styled.ul``;

const Group = styled.li`
  ${({ color = "green" }) => css`
    color: ${color};
    list-style: none;
  `}
`;

const GroupName = styled.h3`
  text-transform: uppercase;
  font-weight: 600;
  color: inherit;
`;

const Requirements = styled.ul``;

const Requirement = styled.li`
  color: ${colors.secondary.dark};
  list-style: none;
`;

const Icon = styled.div`
  color: ${colors.secondary.dark};
  max-width: 30rem;
  margin: 2rem auto;
  order: initial;

  ${mq.md} {
    order: 2;
  }
`;
