import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";
import { container, mq } from "components/grid";
import bancoAdopen from "../../../public/images/admisiones/banco_adopem.png";
import banfondesa from "../../../public/images/admisiones/banfondesa.jpg";
import fundapec from "../../../public/images/admisiones/fundapec.png";

const AdmisionesCredito = (props) => {
  const data = [
    {
      url: "https://bancoadopem.com.do/",
      title: "Banco Adopem",
      image: bancoAdopen,
    },
    {
      url: "https://banfondesa.com.do/",
      title: "Banfondesa",
      image: banfondesa,
    },
    {
      url: "https://www.fundapec.edu.do/",
      title: "Fundapec",
      image: fundapec,
    },
  ];

  return (
    <Section {...props}>
      <Title>Asistencia para la gestión del crédito educativo</Title>
      <Copy>Financiamiento disponible a través de:</Copy>
      <Container>
        {data.map((item, key) => {
          return (
            <ItemCol key={key}>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                aria-label={item.title}
              >
                <Institution>
                  <Media>
                    <Image src={item.image} alt={item.title} />
                  </Media>
                </Institution>
              </a>
            </ItemCol>
          );
        })}
      </Container>
      <ContainerContact>
        <h5>CONTACTOS</h5>
        <BoxContact>
          <span>Email: </span>
          <Link href={"mailto:asistenciaeconomica@isa.edu.do"} target="_blank">
            asistenciaeconomica@isa.edu.do
          </Link>
        </BoxContact>
        <BoxContact>
          <span>Teléfono: </span>
          <Link href={"tel:8092472000"} target="_blank">
            809-247-2000. Ext.: 235, 236 y 237
          </Link>
        </BoxContact>
      </ContainerContact>
    </Section>
  );
};

export default AdmisionesCredito;

const Section = styled.section`
  ${container}
  margin: 9.6rem auto;
`;

const Container = styled.div`
  ${mq.md} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ItemCol = styled.div`
  padding: 0 1.5rem 0 0;
  align-self: center;
`;

const ContainerContact = styled.div`
  margin-top: 4rem;
`;
const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 4rem;
`;

const Copy = styled.p``;

const Institution = styled.div`
  width: 100%;
  max-width: 25rem;
  margin: 0 auto;
  margin-bottom: 2rem;
  display: flex;
  position: relative;
`;

const Media = styled.div`
  flex: 1;
`;

const BoxContact = styled.div`
  & > a {
    text-decoration: none;
    color: black;
  }
  & > span {
    font-weight: bold;
    color: #001f56;
  }
`;
