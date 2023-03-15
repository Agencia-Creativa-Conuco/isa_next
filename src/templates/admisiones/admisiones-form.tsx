import React, { useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import colors from "components/colors";
import Form from "components/form";
import ctas from "styles/cta";
import Image from "next/image";
import Link from "next/link";
import { Grado } from "client";

import { container, mq } from "components/grid";
import formImage from "../../../public/images/admisiones/form.jpg";
import {
  client,
  PostObjectsConnectionOrderbyEnum,
  PostObjectsConnectionOrderbyInput,
  OrderEnum,
} from "client";

const AdmisionesForm = (props) => {
  const { useQuery } = client;
  const [active, setActive] = useState(0);

  const order: PostObjectsConnectionOrderbyInput = {
    field: PostObjectsConnectionOrderbyEnum.MENU_ORDER,
    order: OrderEnum.ASC,
  };

  const gradeForms = useQuery()
    .grados({
      where: {
        orderby: [order],
      },
    })
    .nodes // .sort((a, b) => a.orden - b.orden)
    ?.map((grado, index) => {
      return {
        ...grado.formulariosGrado,
        action: () => {
          setActive(index + 1);
        },
        name: grado.nombre,
      };
    });

  // const forms = useGrados()

  //   //Solo muestra los grados que tienen formulario
  //   .sort((a, b) => a.order - b.order)
  //   .filter((grado) => grado.formularios.tipo)
  //   .map((grado, index) => {
  //     grado.formularios.action = () => {
  //       setActive(index + 1)
  //     }
  //     grado.formularios.name = grado.nombre
  //     return grado.formularios
  //   })

  const forms = [
    {
      tipoFormulario: "",
      urlFormularioGoogle: "",
      hsFormularios: [],
      name: "Regresar",
      action: () => {
        setActive(0);
      },
    },
  ].concat(
    gradeForms.map((item) => ({
      tipoFormulario: item.tipoFormulario,
      urlFormularioGoogle: item.urlFormularioGoogle,
      hsFormularios: item.hsFormularios,
      name: item.name,
      action: item.action,
    }))
  );

  return forms?.length > 1 ? (
    <Section {...props} style={{ overflow: "hidden" }}>
      <Container fluid id="section_3">
        <Media>
          <Image
            src={formImage}
            width={1920}
            height={1080}
            objectFit="cover"
            objectPosition="40% 40%"
            placeholder="blur"
            alt="formulario"
          />
        </Media>

        <Wrapper id="form">
          <Container>
            <Title>Solicitud de admisión</Title>
            <Buttons>
              {forms?.map((form, index) => {
                const { name, action } = form;
                return (
                  <div key={index}>
                    <Grade
                      color={colors.primary.dark}
                      hidden={index === 0 || index !== active}
                    >
                      {name}
                    </Grade>
                    {form.tipoFormulario === "google" ? (
                      <Link href={form.urlFormularioGoogle ?? ""} passHref>
                        <SLink
                          target="_blank"
                          hidden={
                            index === active || (active >= 1 && index >= 1)
                          }
                        >
                          {name}
                        </SLink>
                      </Link>
                    ) : (
                      <Cta
                        key={index}
                        onClick={action}
                        hidden={index === active || (active >= 1 && index >= 1)}
                      >
                        {name}
                      </Cta>
                    )}
                  </div>
                );
              })}
            </Buttons>
            <Displayer>
              {forms
                ?.filter(
                  (form, index) =>
                    index === active && form.tipoFormulario === "hubspot"
                )
                .map((form, index) => {
                  const formIds = form.hsFormularios.map(
                    (item) => item.idFormulario
                  );

                  return (
                    <Form
                      key={index}
                      formIds={formIds ?? []}
                      cardStyle={false}
                    />
                  );
                })}
            </Displayer>
          </Container>
        </Wrapper>
      </Container>
    </Section>
  ) : null;
};

export default AdmisionesForm;

const Section = styled.section``;

const Container = styled.div`
  ${container}
  padding: 0;
  display: grid;
  grid-template-columns: 100%;
  justify-content: flex-start;
`;

const Media = styled.div`
  width: 100%;
  height: 100%;
  ${mq.md} {
    height: 100%;

    position: absolute;
  }
`;

const Wrapper = styled.div`
  background-color: ${colors.gray.light};
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 2.5rem;
  z-index: 5;
  ${mq.sm} {
    padding: 4rem;
  }
  ${mq.md} {
    padding: 4rem;
    max-width: 40rem;
    min-height: 65rem;
    margin-left: 8rem;
  }
  ${mq.xl} {
    margin-left: 15rem;
  }
`;

const Title = styled.h2`
  text-transform: uppercase;
  margin-bottom: 3rem;
`;

const Grade = styled.h3`
  ${({ color = "darkblue", hidden }) => css`
    ${hidden ? "display:none;" : ""}
    text-transform: uppercase;
    /* background-color: #F0F0F0; */
    padding: 0.5rem;
    color: ${color};
    font-weight: 900;
    border-top: 0.2rem solid ${color};
    border-bottom: 0.2rem solid ${color};
  `}
`;

const Cta = styled.button`
  ${ctas}
  display: block;
  margin-bottom: 2rem;
  ${(props) =>
    props.hidden
      ? css`
          display: none;
        `
      : ""}
`;

const SLink = styled.a`
  ${ctas}
`;

const Buttons = styled.div``;

const Displayer = styled.div``;
