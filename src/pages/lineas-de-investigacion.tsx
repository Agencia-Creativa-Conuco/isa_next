import React from "react";
import { GetStaticPropsContext } from "next";
import { getNextStaticProps } from "@faustjs/next";
import { client } from "client";

import styled from "@emotion/styled";
import Link from "next/link";
import Layout from "components/layout";
import colors from "components/colors";
import { container, mq } from "components/grid";
import { REVALIDATE_TIME, SITE_URL } from "lib/constants";
import { useRouter } from "next/router";

const ProjectLines = () => {
  const { useQuery } = client;
  const lineasDeInvestigacion = useQuery().lineasDeInvestigacion({
    first: 1000,
  })?.nodes;

  const departamentos = useQuery()
    .departamentos({
      first: 1000,
    })
    .nodes?.filter((departamento) =>
      lineasDeInvestigacion
        .map((line) => line.departamento.node.id)
        .includes(departamento.id)
    );

  const facultades = useQuery()
    .facultades({
      first: 1000,
    })
    .nodes?.filter((facultad) => {
      return departamentos
        .map((departamento) => {
          return departamento.facultad.node.id;
        })
        .includes(facultad.id);
    });

  const router = useRouter();
  const seo = {
    title: "Líneas de investigación",
    description: "Líneas de investigación",
    canonical: SITE_URL + router.asPath,
    // noFollow: carrera.seo.metaRobotsNofollow,
    // noIndex: carrera.seo.metaRobotsNoindex,
  };

  return (
    <Layout {...{ seo }}>
      <Section>
        <Cover>
          <Container>
            <Title>Líneas de investigación</Title>
          </Container>
        </Cover>
        <List>
          <Container>
            {facultades.map((facultad) => {
              return (
                <Section as="div" key={facultad.id}>
                  <Faculty>{facultad.nombre}</Faculty>
                  {departamentos
                    .filter(
                      (departamento) =>
                        departamento.facultad.node.id === facultad.id
                    )
                    .map((departamento) => {
                      return (
                        <div key={departamento.id}>
                          <Departament>{departamento.nombre}</Departament>
                          <ContainerLine>
                            {lineasDeInvestigacion
                              .filter(
                                (line) =>
                                  line.departamento.node.id === departamento.id
                              )
                              .map((line) => {
                                return (
                                  <Link
                                    href={line.uri ?? ""}
                                    key={line.id}
                                    passHref
                                  >
                                    <SLink>
                                      <Line>{line.nombre}</Line>
                                    </SLink>
                                  </Link>
                                );
                              })}
                          </ContainerLine>
                        </div>
                      );
                    })}
                </Section>
              );
            })}
          </Container>
        </List>
      </Section>
    </Layout>
  );
};

export default ProjectLines;

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page: ProjectLines,
    client,
    revalidate: REVALIDATE_TIME,
  });
}

const Section = styled.article`
  margin-bottom: 5.5rem;
  ${mq.md} {
    margin-bottom: 9.5rem;
  }
`;

const Cover = styled.section`
  overflow: hidden;
  background: ${colors.primary.base};

  padding-top: 5.6rem;
  margin-bottom: 5.6rem;
  ${mq.md} {
    padding-top: 9.6rem;
    margin-bottom: 9.5rem;
  }
`;

const Container = styled.div`
  ${container}
`;
const ContainerLine = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-column-gap: 2.8rem;

  ${mq.md} {
    grid-template-columns: 48% 48%;
  }
`;

const List = styled(Section)``;

const Title = styled.h1`
  text-align: center;
  color: white;
  margin-bottom: 4rem;
  margin-top: 4rem;
  text-shadow: ${colors.shadow.base};
`;

const Faculty = styled.h2`
  text-align: center;
  font-weight: 300;
  padding: 0 0 1rem;
`;

const Departament = styled.h3`
  text-transform: uppercase;
`;

const Line = styled.h4`
  font-weight: normal;
  padding: 1.5rem;
  background-color: #fafafa;
  transition: all 0.25s ease-in-out;
  margin: 0.5rem 0;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const SLink = styled.a`
  text-decoration: none;
  color: inherit;
`;
