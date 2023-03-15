import React from "react";
import { getNextStaticProps, is404 } from "@faustjs/next";
import { GetStaticPropsContext } from "next";
import { client, LineaDeInvestigacionIdType } from "client";
import styled from "@emotion/styled";
import { container, mq } from "components/grid";
import Link from "next/link";
import Image from "next/image";
import { fetchAPI } from "lib/api";
import Layout from "components/layout";
import blur from "styles/blur";
import colors from "components/colors";
import { REVALIDATE_TIME, SITE_URL } from "lib/constants";

const Page = ({ slug }) => {
  const { useQuery } = client;
  const lineaDeInvestigacion = useQuery().lineaDeInvestigacion({
    id: slug,
    idType: LineaDeInvestigacionIdType.SLUG,
  });

  const investigaciones = lineaDeInvestigacion.investigaciones().nodes;

  const seo = {
    title: lineaDeInvestigacion.title(),
    description: lineaDeInvestigacion.title(),
    canonical: SITE_URL + lineaDeInvestigacion.uri,
  };

  return (
    <Layout {...{ seo }}>
      <Article>
        <Cover>
          <Container spaceTop>
            <Title>{lineaDeInvestigacion.nombre}</Title>
          </Container>
        </Cover>
        {investigaciones?.length ? (
          <List>
            <Container space small>
              <SubTitle>Proyectos de investigación</SubTitle>
              <Investigaciones>
                {investigaciones.map((investigacion, index) => {
                  return (
                    <Link href={investigacion.uri ?? ""} key={index} passHref>
                      <SLink>
                        <Project>
                          {investigacion.imagenPortada ? (
                            <ProjectMedia>
                              <Image
                                src={
                                  investigacion.imagenPortada.mediaItemUrl ??
                                  blur
                                }
                                alt={investigacion.nombre}
                                width={1920}
                                height={1920}
                                objectFit="cover"
                                blurDataURL={blur.src}
                                placeholder="blur"
                                priority
                              />
                            </ProjectMedia>
                          ) : null}
                          <ProjectTitle>{investigacion.nombre}</ProjectTitle>
                        </Project>
                      </SLink>
                    </Link>
                  );
                })}
              </Investigaciones>
            </Container>
          </List>
        ) : null}
      </Article>
    </Layout>
  );
};

export default Page;

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = context.params.slug.toString();

  const { lineaDeInvestigacion } = await fetchAPI(
    `
      query ($slug: ID!) {
        lineaDeInvestigacion(id: $slug, idType: SLUG) {
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
    notFound: !lineaDeInvestigacion,
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

const Investigaciones = styled.div`
  display: grid;
  gap: 3rem;
  ${mq.md} {
    grid-template-columns: 1fr 1fr;
  }
`;

const Container = styled.div`
  ${container}
`;

const Cover = styled.div`
  overflow: hidden;
  background-color: ${colors.primary.base};
`;

const List = styled.section`
  margin-bottom: 20rem !important;
`;

const Title = styled.h1`
  text-align: center;
  color: white;
  margin-bottom: 4rem;
  margin-top: 4rem;
`;

const SubTitle = styled.h2`
  font-weight: 300;
`;

const Project = styled(Container)`
  padding: 1.5rem;
  background-color: #fafafa;
  transition: all 0.25s ease-in-out;
  margin: 0.5rem 0;
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 1.5rem;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const ProjectTitle = styled.h3`
  margin: 0;
  text-transform: uppercase;
  color: ${colors.text.base};
`;

const ProjectMedia = styled.div`
  display: grid;
  font-size: 0;
`;

const SLink = styled.a`
  text-decoration: none;
  color: inherit;
`;
