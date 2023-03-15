import React from "react";
import { GetStaticPropsContext } from "next";
import { getNextStaticProps } from "@faustjs/next";
import { client } from "client";
import styled from "@emotion/styled";
import Layout from "components/layout";
import NosotrosCover from "templates/nosotros/nosotros-cover";
import NosotrosHistory from "templates/nosotros/nosotros-history";
import NosotrosRector from "templates/nosotros/nosotros-rector";
import NosotrosCampus from "templates/nosotros/nosotros-campus";
import NosotrosPhilosophy from "templates/nosotros/nosotros-philosophy";
import { PageIdType } from "@faustjs/core/client";
import Page from "components/PageMeta";
import { idxModelGenerator } from "lib/auxiliar";
import { REVALIDATE_TIME, SITE_URL } from "lib/constants";
import { useRouter } from "next/router";

const Nosotros = () => {
  const router = useRouter();

  const seo = {
    title: "NOSOTROS",
    description:
      "La Universidad ISA propicia en sus aulas el desarrollo de líderes visionarios, guiados por los valores de honestidad, responsabilidad, respeto, compromiso social y calidad.",
    canonical: SITE_URL + router.asPath,
    // noFollow: carrera.seo.metaRobotsNofollow,
    // noIndex: carrera.seo.metaRobotsNoindex,
  };

  // Load the post, but only if the data is ready.
  return (
    <Page uri="/nosotros">
      <Layout {...{ seo }}>
        <Container>
          <NosotrosCover />
          <NosotrosHistory {...idxModelGenerator("Nuestra Historia")} />
          <NosotrosRector {...idxModelGenerator("Nuestro Rector")} />
          <NosotrosPhilosophy {...idxModelGenerator("Filosofía Nosotros")} />
          <NosotrosCampus {...idxModelGenerator("Nuestro campus")} />
        </Container>
      </Layout>
    </Page>
  );
};

export default Nosotros;

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page: Nosotros,
    client,
    revalidate: REVALIDATE_TIME,
  });
}

const Container = styled.div`
  width: 100%;
  margin: 0;
  overflow: hidden;
`;
