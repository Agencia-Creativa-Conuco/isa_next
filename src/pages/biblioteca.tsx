import React from "react";
import { GetStaticPropsContext } from "next";
import { getNextStaticProps } from "@faustjs/next";
import { client } from "client";
import styled from "@emotion/styled";
import BibliotecaCover from "templates/biblioteca/biblioteca-cover";
import BibliotecaServicios from "templates/biblioteca/biblioteca-servicios";
import BibliotecaRecursos from "templates/biblioteca/biblioteca-recursos";
import BibliotecaHorario from "templates/biblioteca/biblioteca-horario";
import Layout from "components/layout";
import PageMeta from "components/PageMeta";
import { REVALIDATE_TIME, SITE_URL } from "lib/constants";
import { useRouter } from "next/router";

const Biblioteca = () => {
  const router = useRouter();
  const seo = {
    title: "Biblioteca",
    description:
      "La biblioteca de la Universidad ISA, se concibe como un centro de información y fuente de conocimiento en permanente renovación. Su accionar, está orientado a la búsqueda del crecimiento científico y espiritual de toda la comunidad universitaria, a través del contacto con los medios y actores que sirven de catalizador.",
    canonical: SITE_URL + router.asPath,
    // noFollow: carrera.seo.metaRobotsNofollow,
    // noIndex: carrera.seo.metaRobotsNoindex,
  };

  return (
    <PageMeta uri="/biblioteca">
      <Layout {...{ seo }}>
        <Container>
          <BibliotecaCover />
          <BibliotecaServicios />
          <BibliotecaRecursos />
          <BibliotecaHorario />
        </Container>
      </Layout>
    </PageMeta>
  );
};

export default Biblioteca;

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page: Biblioteca,
    client,
    revalidate: REVALIDATE_TIME,
  });
}

const Container = styled.div`
  width: 100%;
  margin: 0;
  overflow: hidden;
`;
