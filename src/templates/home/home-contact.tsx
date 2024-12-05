import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import colors from "components/colors";
import Form from "components/form";
import { container, mq } from "components/grid";
import image from "../../../public/images/home/contacto.jpg";

const HomeContact = () => {
  const title = "Contáctanos";

  return (
    <Section id="section_5" fluid>
      <Media>
        <Imagen
          src={image}
          alt={title}
          width={1920}
          height={1080}
          objectFit="cover"
          objectPosition="95% 50%"
          placeholder="blur"
        />
      </Media>
      <Container>
        <Content>
          <SectionTitle> {title} </SectionTitle>
          <Form formId="386740ac-0068-4408-b0ad-1b7b62a5c417" />
        </Content>
      </Container>
    </Section>
  );
};

export default HomeContact;

const Section = styled.section`
  ${container}
  padding: 0;
  display: grid;
  grid-template-columns: 100%;
  grid-template-areas:
    "col_1"
    "col_2";

  ${mq.lg} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "col_2 col_1";
  }
`;
const Container = styled.div`
  position: relative;
  grid-area: col_2;
`;

const Content = styled.div`
  margin: 3rem 1.5rem;
  &::after {
    content: "";
    background: ${colors.primary.light};
    width: 8%;
    padding: 8%;
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  margin: 6rem auto;
  text-align: center;
`;

const Imagen = styled(Image)`
  grid-area: col_1;
  ${mq.md} {
    margin-top: 10%;
    &::after {
      padding: 20px;
      bottom: 0;
      transform: translateX(-4rem);
    }
  }

  ${mq.lg} {
    margin-top: 0;
    &::after {
      padding: 40px;
      transform: translateX(-8rem);
    }
  }
`;

const Media = styled.div`
  display: flex;
  align-self: center;
  width: 100%;
  height: 100%;
  position: relative;
`;
