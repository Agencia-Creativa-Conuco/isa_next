import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import colors from "components/colors";
import { container, mq } from "components/grid";
import servicios from "../../../public/images/biblioteca/servicios.jpg";

const BibliotecaServicios = () => {
  const title = "Servicios",
    content = `
            <ul>
                <li>Préstamo de materiales: libros, revistas, enciclopedias, diccionarios, atlas, entre otros.</li>
                <li>Sala de lectura con capacidad para 60 usuarios simultáneamente y ambiente propicio para el estudio.</li>
                <li>Catálogo en línea donde se pueden localizar con facilidad todo el material bibliográfico con que cuenta la biblioteca.</li>
                <li>Sala digital dotada de computadoras con internet, scanners, impresión y enciclopedias digitales para consulta e investigación.</li>
                <li>Consulta en Bases de datos: EBSCO, TEEAL</li>
                <li>Orientación y asesoría al usuario.</li>
                <li>Consulta de Libros digitales.</li>
                <li>Préstamos de equipos y materiales audiovisuales como televisores, cámara digital, proyectores de multimedia, retroproyectores, portátiles, DVD.</li>
                <li>Servicios de fotocopiado, encuadernación y venta de materiales.</li>
                <li>Servicio de Internet Wifi</li>
            </ul>
        `,
    image = servicios;

  return (
    <Section id="section_1" fluid>
      <Media>
        <DecoMedia />
        <Image
          src={image}
          width={1920}
          height={1152}
          objectFit="cover"
          placeholder="blur"
          alt={title}
        />
      </Media>
      <DivTitle>
        <SectionTitle> {title} </SectionTitle>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </DivTitle>
    </Section>
  );
};

export default BibliotecaServicios;

const Section = styled.section`
  ${container}
  overflow: hidden;
  padding: 0;
  display: grid;
  grid-template-columns: 100%;

  margin-bottom: 5.5rem;
  margin-top: 5.5rem;
  ${mq.lg} {
    grid-template-columns: 50% 50%;
    margin-bottom: 9.6rem;
    margin-top: 9.6rem;
  }

  &::before {
    content: "";
    position: absolute;
    background: ${colors.gray.light};
    width: 100%;
    height: 100%;
    ${mq.md} {
      width: 97%;
    }
  }
`;

const DivTitle = styled.div`
  margin: 6rem;
  position: relative;

  ${mq.md} {
    margin: 2rem 6rem 0rem 4rem;
  }

  ${mq.xl} {
    margin: 4rem 8rem 6rem 12rem;
  }
`;

const SectionTitle = styled.h2``;

const Media = styled.div`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    padding: 3%;
    padding-bottom: 53.2%;
    background: ${colors.blue.dark};
    z-index: 1;
    left: 0;
    top: 0;
    box-shadow: 0 2.5rem 2.5rem rgba(0, 0, 0, 0.15);
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    padding: 3%;
    padding-bottom: 15%;
    background-color: ${colors.blue.base};
    z-index: 2;
  }
`;
const DecoMedia = styled.div`
  ${mq.lg} {
    &::before {
      content: "";
      position: absolute;
      padding: 3%;
      padding-bottom: 25%;
      background: ${colors.blue.base};
      z-index: 1;
      left: 100%;
      bottom: 0;
      box-shadow: 0 2.5rem 2.5rem rgba(0, 0, 0, 0.15);
    }
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 100%;
      padding: 3%;
      padding-bottom: 10%;
      background-color: ${colors.blue.dark};
      z-index: 2;
    }
  }
`;
