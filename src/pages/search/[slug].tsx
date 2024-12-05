import React from "react";
import { getNextStaticProps, is404 } from "@faustjs/next";
import { GetStaticPropsContext } from "next";
import { client, PostObjectsConnectionOrderbyEnum, OrderEnum } from "client";

import ResultsHeader from "components/search/results-header";
import ResultsBody from "components/search/results-body";

import styled from "@emotion/styled";

import Layout from "components/layout";
import { REVALIDATE_TIME, SITE_URL } from "lib/constants";

const Page = ({ slug }) => {
  const query = slug.replace("-", " ");
  const { useQuery } = client;

  const pages = useQuery().pages({
    where: {
      search: query,
      orderby: [
        { field: PostObjectsConnectionOrderbyEnum.DATE, order: OrderEnum.DESC },
      ],
    },
  })?.nodes;
  const posts = useQuery().posts({
    where: {
      search: query,
      orderby: [
        { field: PostObjectsConnectionOrderbyEnum.DATE, order: OrderEnum.DESC },
      ],
    },
  })?.nodes;
  const carreras = useQuery().carreras({
    where: {
      search: query,
      orderby: [
        { field: PostObjectsConnectionOrderbyEnum.DATE, order: OrderEnum.DESC },
      ],
    },
  })?.nodes;
  const facultades = useQuery().facultades({
    where: {
      search: query,
      orderby: [
        { field: PostObjectsConnectionOrderbyEnum.DATE, order: OrderEnum.DESC },
      ],
    },
  })?.nodes;
  const grados = useQuery().grados({
    where: {
      search: query,
      orderby: [
        { field: PostObjectsConnectionOrderbyEnum.DATE, order: OrderEnum.DESC },
      ],
    },
  })?.nodes;
  const investigaciones = useQuery().investigaciones({
    where: {
      search: query,
      orderby: [
        { field: PostObjectsConnectionOrderbyEnum.DATE, order: OrderEnum.DESC },
      ],
    },
  })?.nodes;
  const lineasDeInvestigacion = useQuery().lineasDeInvestigacion({
    where: {
      search: query,
      orderby: [
        { field: PostObjectsConnectionOrderbyEnum.DATE, order: OrderEnum.DESC },
      ],
    },
  })?.nodes;
  const recursos = useQuery().recursos({
    where: {
      search: query,
      orderby: [
        { field: PostObjectsConnectionOrderbyEnum.DATE, order: OrderEnum.DESC },
      ],
    },
  })?.nodes;

  const list = []
    .concat(
      pages,
      posts,
      carreras,
      facultades,
      grados,
      investigaciones,
      lineasDeInvestigacion,
      recursos
    )
    .sort((a, b) => {
      const dateA: any = new Date(a.date);
      const dateB: any = new Date(b.date);
      return dateA - dateB;
    });

  const seo = {
    title: "Búsqueda",
    description: "Resultados de búsqueda",
    canonical: SITE_URL + "/search/" + slug,
    noindex: true,
    nofollow: true,
  };
  return (
    <Layout {...{ seo }}>
      <Article>
        <ResultsHeader {...{ slug }} />
        <ResultsBody items={list} />
      </Article>
    </Layout>
  );
};

export default Page;

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = context.params.slug.toString();

  return getNextStaticProps(context, {
    Page,
    client,
    revalidate: REVALIDATE_TIME,
    notFound: false,
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
