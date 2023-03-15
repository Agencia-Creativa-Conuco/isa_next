import React from "react";
import { GetStaticPropsContext } from "next";
import { getNextStaticProps } from "@faustjs/next";
import { client } from "client";

import Layout from "components/layout";
import EgresadosCover from "templates/egresados/egresados-cover";
import EgresadosBody from "templates/egresados/egresados-body";
import PageMeta from "components/PageMeta";
import { REVALIDATE_TIME, SITE_URL } from "lib/constants";
import { useRouter } from "next/router";
const EgresadosSingle = () => {
  const metaData = {
    title: "Egresados",
    description: "Pronto agregaremos una description a la pagina de Egresados",
  };

  const router = useRouter();

  const seo = {
    title: "Egresados",
    description: "Pronto agregaremos una description a la pagina de Egresados",
    canonical: SITE_URL + router.asPath,
    // noFollow: carrera.seo.metaRobotsNofollow,
    // noIndex: carrera.seo.metaRobotsNoindex,
  };

  return (
    <PageMeta uri="/egresados">
      <Layout {...{ seo }}>
        <EgresadosCover />
        <EgresadosBody />
      </Layout>
    </PageMeta>
  );
};

export default EgresadosSingle;

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page: EgresadosSingle,
    client,
    revalidate: REVALIDATE_TIME,
  });
}
