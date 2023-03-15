import { GetStaticPropsContext } from "next";
import Page from "pages/category/[categorySlug]";
import { getNextStaticProps } from "@faustjs/next";
import { client } from "client";
import { REVALIDATE_TIME } from "lib/constants";

export default Page;

export async function getStaticProps(context: GetStaticPropsContext) {
  const { paginationTerm } = context.params;
  if (!(paginationTerm === "after" || paginationTerm === "before")) {
    return {
      notFound: true,
    };
  }

  return getNextStaticProps(context, {
    Page,
    client,
    revalidate: REVALIDATE_TIME,
  });
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
