import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import colors from "components/colors";
import { container, mq } from "components/grid";
import enfermeria from "../../../public/images/servicios-estudiantiles/enfermeria.png";

const ServiciosEstudiantilesClinica = (props) => {
  const title = "Salud y Enfermería",
    content = `
            <p>Incentiva la salud y ofrece servicios de atención primaria a la comunidad universitaria. </p>
            <p>La Unidad de Salud y Enfermería se enfoca en atender y orientar las necesidades de salud y emergencias que puedan surgir durante el desarrollo de la actividad académica y administrativa de la Universidad, ofreciendo servicios de atención primaria, primeros auxilios ambulatorios y de urgencia a la comunidad universitaria.</p>
            <p>Esta unidad promueve además, campañas orientadas a fomentar hábitos de conductas sanas y riesgos de enfermedades, con el objetivo primordial de contribuir al desarrollo integral, tanto de los estudiantes, como de los empleados, mediante la prevención, mantenimiento y promoción de la salud. </p>
            <p><strong>Horarios</strong><br>
            <span>Lunes a viernes de 8:00 a.m. - 12:00p.m. / 1:00 p.m. - 5:00 p.m.</span>
            <br>
            <span>Sábados de 8:00 a.m. - 12:00 p.m.</span>
            </p>
        `,
    image = enfermeria;

  return (
    <Section {...props}>
      <DecoLogo>
        <Media src={image} alt="Bienestar Estudiantil" objectFit="cover" />
      </DecoLogo>

      <ContentCol>
        <DivTitle>
          <SectionTitle>{title}</SectionTitle>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </DivTitle>
      </ContentCol>
    </Section>
  );
};

export default ServiciosEstudiantilesClinica;

const Section = styled.section`
  ${container}
  padding: 0;
  margin-top: 5.5rem;
  display: grid;
  grid-template-columns: 100%;
  ${mq.md} {
    margin-top: 9.6rem;
    margin-bottom: 9.6rem;
    grid-template-columns: 59% 46%;
  }
`;

const ContentCol = styled.div`
  z-index: 1;
  position: relative;
  /* padding-bottom: 4rem; */
  padding: 0 1.5rem 4rem 1.5rem;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${colors.primary.light};
    opacity: 0.3;
    z-index: -1;
    transform-origin: 50% 100%;
    ${mq.md} {
      transform: scale(1.2, 2);
    }
  }
`;

const Media = styled(Image)`
  z-index: 2;
`;

const DivTitle = styled.div``;

const SectionTitle = styled.h2`
  margin-bottom: 2rem;
`;

const DecoLogo = styled.div`
  position: relative;
  display: grid;
  ${mq.lg} {
    display: initial;
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: -4%;
    background: ${colors.blue.dark};
    width: 15%;
    padding-bottom: 7%;
    z-index: 5;
    // transform: translate(50%,0);
  }
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: -4%;
    background: ${colors.cta.base};
    width: 45%;
    padding-bottom: 7%;
    z-index: 4;
  }
`;
