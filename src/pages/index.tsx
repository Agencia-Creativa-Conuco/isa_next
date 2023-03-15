import { getNextStaticProps } from "@faustjs/next";
import { GetStaticPropsContext } from "next";
import React from "react";
import { client } from "client";

import HomeCover from "templates/home/home-cover";
import HomeOffer from "templates/home/home-offer";
import Calendar from "components/calendar";
import HomeNews from "templates/home/home-news";
import HomeAplication from "templates/home/home-aplication";
import HomeContact from "templates/home/home-contact";
import Layout from "components/layout";
import { REVALIDATE_TIME } from "lib/constants";

export default function Page() {
  return (
    <Layout>
      <main className="content">
        <HomeCover />
        <HomeOffer />
        <Calendar />
        <HomeNews />
        <HomeAplication />
        <HomeContact />
      </main>
    </Layout>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return getNextStaticProps(context, {
    Page,
    client,
    revalidate: REVALIDATE_TIME,
  });
}
