import React from "react";
import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";
import colors from "components/colors";
import moment from "moment";
import { DayPicker } from "react-day-picker";
import useModal from "hooks/useModal";
import Link from "next/link";
import { container, mq } from "./grid";
import es from "date-fns/locale/es";
import { client, PeriodoDeAdmision } from "client";
import Cta from "./CTA";

interface EventProps {
  event?: PeriodoDeAdmision;
}

const Event = ({ event }: EventProps) => {
  const { openModal, ModalUI } = useModal();
  const examDates =
    event.datosPeriodosDeAdmision.fechasExamenesAdmision?.map((date) =>
      moment(date.fechaExamen, "", "es").toDate()
    ) || [];

  const pastMonth = examDates[examDates.length - 1];

  const urlPOMA = event.datosPeriodosDeAdmision.urlFormulario;

  return (
    <>
      <EventCard onClick={openModal}>
        {/* <EventDay color={colors.secondary.base}>{day}</EventDay> */}
        <EventName>{event.nombre}</EventName>
      </EventCard>
      <ModalUI title={event.nombre}>
        <EventTitle>Fechas para tomar el examen de admisión</EventTitle>

        <DayPicker
          mode="multiple"
          selected={examDates}
          defaultMonth={pastMonth}
          locale={es}
        />
        <ColStyles>
          <BoxContact>
            <span>Haz tu cita en: </span>
            <Link href={"mailto:admisiones@isa.edu.do"} target="_blank">
              admisiones@isa.edu.do
            </Link>
          </BoxContact>
          <BoxContact>
            <span>Whatsapp: </span>
            <Link href={"https://wa.me/8295209209"} target="_blank">
              829-520-9209
            </Link>
          </BoxContact>
          <br />
          {urlPOMA ? (
            <Cta to={urlPOMA} target="_blank">
              Solicitar prueba de admisión
            </Cta>
          ) : null}
        </ColStyles>
      </ModalUI>
    </>
  );
};

// var isEmpty = (".DayPicker-Month").html() === "";
// var getid= document.getElementById("identificador_del_div").hasChildNodes();
interface CalendarProps {
  title?: string;
  noEventsTitle?: string;
}
const Calendar = ({
  title = "FECHAS PARA TOMAR EL EXAMEN DE ADMISIÓN POMA",
  noEventsTitle,
}: CalendarProps) => {
  const { useQuery } = client;
  //Obtiene los datos de los Eventos
  const events = useQuery().periodosDeAdmision()?.nodes;

  //Ordena los eventos de menor a mayor
  // const events = events.nodes.nodes
  //Ordena por el campo orden de wordpress
  // .sort((a, b) => a.order - b.order)

  // Load the post, but only if the data is ready.
  return noEventsTitle || events.length ? (
    <Section>
      <Global styles={birthdayStyle} />

      <Container>
        {title ? <Title>{title}</Title> : null}
        {events.length ? (
          <EventList>
            {events.map((event, index) => {
              return <Event key={index} event={event} />;
            })}
          </EventList>
        ) : (
          <NoEventsText>{noEventsTitle}</NoEventsText>
        )}
      </Container>
    </Section>
  ) : null;
};

export default Calendar;

const Section = styled.section`
  margin-bottom: 9.6rem;
  margin-top: 9.6rem;
`;

const Container = styled.div`
  ${container}
`;

const Title = styled.h2`
  text-align: center;
`;

const EventList = styled.div`
  max-width: fit-content;
  margin: 0 auto;
  ${mq.md} {
    border-radius: 10rem;
    padding: 1.5rem;
    overflow: hidden;
    box-shadow: 0 2rem 2rem rgba(0, 0, 0, 0.2);
    background-color: white;
    columns: 32rem 3;
    column-rule-style: solid;
    column-rule-color: lightgray;
    column-rule-width: 0.25rem;
  }
`;

const EventCard = styled.div`
  cursor: pointer;
  background-color: white;
  padding: 0.5rem 1.5rem;
  margin: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20rem;
  box-shadow: 0 2rem 2rem rgba(0, 0, 0, 0.2);
  margin: 2rem;
  border-radius: 10rem;
  ${mq.md} {
    /* border-left: 0.2rem solid lightgray; */
    box-shadow: initial;
    margin: initial;
    border-radius: initial;
  }
  &:first-of-type {
    /* border: initial; */
  }
`;

const EventName = styled.span`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

const NoEventsText = styled.p`
  text-align: center;
`;

const EventTitle = styled.h3`
  color: ${colors.primary.dark};
  text-transform: uppercase;
  text-align: left;
  margin-bottom: 2rem;
  margin-top: 0;
`;

const birthdayStyle = css`
  .rdp-caption {
    text-align: center;
  }

  .rdp-caption_label {
    font-size: 1.8rem;
    color: ${colors.text.base};
  }

  .rdp-nav_button {
    padding: 0.5rem;
    margin: 1rem;
  }

  .rdp-table {
    margin-top: 1rem;
  }

  .rdp-head {
    background-color: ${colors.primary.dark};
    text-align: center;
    color: white;
  }

  .rdp-cell {
    padding: 1rem;
    background-color: ${colors.gray.light};
  }

  .rdp-day {
    background-color: ${colors.gray.light};
    width: 100%;
    text-align: center;
    padding: 0.8rem;
    box-sizing: content-box;
    margin-left: -0.8rem;
  }

  .rdp-day_selected {
    color: white;
    background-color: ${colors.primary.base};
    position: relative;
  }

  .rdp-vhidden {
    display: none;
  }
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

const ColStyles = styled.div`
  margin-top: 2rem;
`;
