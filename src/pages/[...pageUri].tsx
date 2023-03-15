import React from "react";
import { getNextStaticProps, is404 } from "@faustjs/next";
import { GetStaticPropsContext } from "next";
import { client, Page as PageType } from "client";
import Layout from "components/layout";

import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Image from "next/image";
import { container, mq } from "components/grid";
import colors from "components/colors";
import blur from "styles/blur";
import { REVALIDATE_TIME, SITE_URL } from "lib/constants";

export interface PageProps {
  page: PageType | PageType["preview"]["node"] | null | undefined;
}

export function PageComponent({ page }: PageProps) {
  // const { useQuery } = client
  // const generalSettings = useQuery().generalSettings
  const { title, content, featuredImage, pageSettings } = page;

  const pageCustom = pageSettings.pageCustom;

  const contacto = page?.contacto;
  const recursos = page?.datosRecursos?.relacion?.map(
    (item) => item.$on.Recurso
  );

  const seo = {
    title: page.title(),
    description: page.title(),
    canonical: SITE_URL + page.uri,
    // noFollow: page.seo.metaRobotsNofollow,
    // noIndex: page.seo.metaRobotsNoindex,
    openGraph: {
      // type: page.seo.opengraphType,
      images: [
        {
          url: `${SITE_URL}/_next/image?url=${page.featuredImage.node.mediaItemUrl}&w=1920&q=75`,
        },
      ],
    },
  };

  return (
    <Layout {...{ contacto, recursos, seo }}>
      {/* <Global styles={css`${styles}`} /> */}
      <Article as="article">
        {/* COVER */}
        {!pageCustom ? (
          <Section>
            <Cover
              bgColor={colors.primary.dark}
              hasMedia={featuredImage ? true : false}
            >
              <Media>
                <Image
                  src={featuredImage?.node?.mediaItemUrl ?? blur}
                  alt={title()}
                  width={1920}
                  height={960}
                  objectFit="cover"
                  blurDataURL={blur.src}
                  placeholder="blur"
                  priority
                />
              </Media>
            </Cover>
            <Header>
              <Container>
                <TitleWrapper>
                  <Title dangerouslySetInnerHTML={{ __html: title() }} />
                </TitleWrapper>
              </Container>
            </Header>
          </Section>
        ) : null}
        {/* Render the content using the Html2React component so the HTML is processed
        by the processors we included in the libraries.html2react.processors array. */}
        <Section>
          <Container space thin>
            <Content dangerouslySetInnerHTML={{ __html: content() }} />
          </Container>
        </Section>
      </Article>
    </Layout>
  );
}

export default function Page() {
  const { usePage } = client;
  const page = usePage();

  return <PageComponent page={page} />;
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

const Article = styled.article``;
const Section = styled.section``;

interface CoverProps {
  bgColor?: string;
  hasMedia?: boolean;
}
const Cover = styled.div`
  ${({ bgColor = "darkblue", hasMedia }: CoverProps) => css`
    background-color: ${bgColor};
    position: relative;
    height: 0;
    font-size: 0;
    padding-bottom: 56.25%;
    ${mq.md} {
      padding-bottom: 45%;
    }
    ${mq.lg} {
      padding-bottom: 45rem;
    }
    ${mq.xl} {
      padding-bottom: 50rem;
    }
    ${hasMedia
      ? css`
          ${mq.xl} {
            max-height: 55rem;
            overflow: hidden;
          }
        `
      : css`
          min-height: 40rem;
        `}
  `}
`;

const Media = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
`;

const Header = styled.div`
  margin-top: -10rem;
`;

const TitleWrapper = styled.div`
  background-color: white;
  border-radius: 5rem 5rem 0 0;
  overflow: hidden;
`;

const Title = styled.h1`
  ${({ color = "#001F56" }) => css`
    color: ${color};
    margin-top: 4rem;
    margin-bottom: 4rem;
    padding: 0 10rem;
    text-align: center;
  `}
`;

const Content = styled.div`
  max-width: 75rem;
  margin: 0 auto;
`;

const Container = styled.div`
  ${container}
`;
