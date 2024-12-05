import { getNextStaticProps, is404 } from "@faustjs/next";
import Head from "next/head";
import { Header, Footer, Posts, Pagination } from "components";
import { GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { client } from "client";
import Layout from "components/layout";
import { REVALIDATE_TIME, SITE_URL } from "lib/constants";

const POSTS_PER_PAGE = 6;

export default function Page() {
  const { useQuery, usePosts, useCategory } = client;
  const { query = {} } = useRouter();
  const { categorySlug, paginationTerm, categoryCursor } = query;
  const generalSettings = useQuery().generalSettings;
  const category = useCategory();
  const isBefore = paginationTerm === "before";
  const posts = usePosts({
    after: !isBefore ? (categoryCursor as string) : undefined,
    before: isBefore ? (categoryCursor as string) : undefined,
    first: !isBefore ? POSTS_PER_PAGE : undefined,
    last: isBefore ? POSTS_PER_PAGE : undefined,
  });

  const seo = {
    title: "Categoría - " + category.name,
    description: category.name + " de la Universidad ISA",
    canonical: `${SITE_URL}/category/${category.slug}`,
    // noFollow: carrera.seo.metaRobotsNofollow,
    // noIndex: carrera.seo.metaRobotsNoindex,
  };

  return (
    <Layout {...{ seo }}>
      <main className="content content-single">
        <Posts posts={posts?.nodes} heading={`Categoría: ${category?.name}`} />

        <Pagination
          pageInfo={posts.pageInfo}
          basePath={`/category/${categorySlug}`}
        />
      </main>
    </Layout>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
    revalidate: REVALIDATE_TIME,
    notFound: await is404(context, { client }),
  });
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
