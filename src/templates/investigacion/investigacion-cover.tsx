import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { container, mq } from "components/grid";
import Image from "next/image";
import { h2 } from "styles/posts-tipography";
import colors from "components/colors";
import { Investigacion } from "client";
import blur from "styles/blur";

interface InvestigacionProps {
  investigacion: Investigacion;
}
const InvestigacionCover = ({ investigacion }: InvestigacionProps) => {
  const { nombre, imagenPortada, descripcion } = investigacion;

  return (
    <Section>
      <DivBG />
      <Container>
        <DecoContent>
          <Media>
            <Image
              src={imagenPortada.mediaItemUrl ?? blur}
              width={1920}
              height={1080}
              objectFit="cover"
              blurDataURL={blur.src}
              placeholder="blur"
              priority
              alt={nombre}
            />
          </Media>
          <StylesContent>
            <Title>{nombre}</Title>
            <Copy dangerouslySetInnerHTML={{ __html: descripcion }} />
          </StylesContent>
        </DecoContent>
      </Container>
    </Section>
  );
};

export default InvestigacionCover;

const Section = styled.section``;

const Container = styled.div`
  ${container}
  padding: 0;
`;

const DivBG = styled.div`
  width: 100%;
  height: 25rem;
  position: relative;
  top: 0;
  background: ${colors.primary.base};
  ${mq.lg} {
    height: 30rem;
  }
`;

const DecoContent = styled(Container)`
  position: relative;
  background: white;
  position: relative;
  margin-top: -12rem;
  border-radius: 0 0rem 3rem 3rem;
  box-shadow: silver 0 10px 10px;

  ${mq.lg} {
    border-radius: 0 3rem 3rem 0;
  }
`;
const StylesContent = styled.div`
  padding: 2rem 4rem;
  ${mq.lg} {
    padding: 4rem 5rem;
  }
`;

const Title = styled.h1`
  margin-bottom: 3rem;
`;

const Copy = styled.div`
  white-space: break-spaces;
  ${mq.xl} {
    max-width: 57rem;
  }
`;

const Media = styled.div`
  display: grid;
  font-size: 0;
`;
