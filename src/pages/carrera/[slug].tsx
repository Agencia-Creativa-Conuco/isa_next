import React from "react";
import { getNextStaticProps, is404 } from "@faustjs/next";
import { GetStaticPropsContext } from "next";
import { client, CarreraIdType } from "client";

import styled from "@emotion/styled";
import CarreraCover from "templates/carrera/carrera-cover";
import CarreraPerfil from "templates/carrera/carrera-perfil";
import CarreraCompetencias from "templates/carrera/carrera-competencies";
import CarreraPensum from "templates/carrera/carrera-pensum";
import CarreraForm from "templates/carrera/carrera-form";

import Layout from "components/layout";
import { fetchAPI } from "lib/api";

import { REVALIDATE_TIME, SITE_URL } from "lib/constants";

const Page = ({ slug }) => {
  const { useQuery } = client;
  const carrera = useQuery().carrera({
    id: slug,
    idType: CarreraIdType.SLUG,
  });

  const contacto = carrera.contacto;

  const recursos = carrera
    .recursos()
    .nodes?.filter((recurso) => recurso.tipo.toString() !== "pensum");

  const seo = {
    title: carrera.title(),
    description: carrera.copy,
    canonical: SITE_URL + carrera.uri,
    // noFollow: carrera.seo.metaRobotsNofollow,
    // noIndex: carrera.seo.metaRobotsNoindex,
    openGraph: {
      // type: carrera.seo.opengraphType,
      images: [
        {
          url: `${SITE_URL}/_next/image?url=${carrera.featuredImage.node.mediaItemUrl}&w=1920&q=75`,
        },
      ],
    },
  };
  return (
    <Layout {...{ contacto, recursos, seo }}>
      <Article>
        <CarreraCover {...{ carrera }} />
        <CarreraPerfil {...{ carrera }} />
        <CarreraCompetencias {...{ carrera }} />
        <CarreraPensum {...{ carrera }} />
        <CarreraForm {...{ carrera }} />
      </Article>
    </Layout>
  );
};

export default Page;

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = context.params.slug.toString();

  const { carrera } = await fetchAPI(
    `
    query ($slug: ID!) {
      carrera(id: $slug, idType: SLUG) {
        id
      }
    }
  `,
    {
      variables: { slug },
    }
  );

  return getNextStaticProps(context, {
    Page,
    client,
    revalidate: REVALIDATE_TIME,
    notFound: !carrera,
    props: {
      slug,
    },
  });
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

const Article = styled.article``;
