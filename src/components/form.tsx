import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { mq } from "components/grid";
const HubspotForm: any = dynamic(() => import("react-hubspot-form"), {
  ssr: false,
});
import Loading from "components/loading";
import colors from "components/colors";
import { HUBSPOT_ID } from "lib/constants";
import dynamic from "next/dynamic";

interface FormProps {
  formId?: string;
  formIds?: string[];
  id?: string;
  loadingHeight?: string;
  cardStyle?: boolean;
  submitedTitle?: string;
  submitedText?: string;
}
const Form = ({
  formId,
  formIds = [],
  id = "form",
  loadingHeight = "100%",
  cardStyle = true,
  submitedTitle = "¡Gracias por enviar el formulario!",
  submitedText = "Hola, gracias por contactar Universidad ISA, responderemos su requerimiento en cuanto nos sea posible. Siempre a la orden.",
  ...props
}: FormProps) => {
  const [submited, setSubmited] = useState(false);
  const [active, setActive] = useState(0);
  const [displayedForms, setDisplayedForms] = useState([]);

  const forms = formIds?.length ? formIds : [formId];

  const manageFormSubmit = () => {
    if (active < forms.length - 1) {
      setActive(active + 1);
    } else {
      setSubmited(true);
    }
  };

  useEffect(() => {
    const scripts = [
      "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js",
      // '//js.hs-scripts.com/20627890.js',
      // '//js.hsforms.net/forms/shell.js',
    ];

    scripts.map((url) => {
      const script = document.createElement("script");
      script.src = url;
      let jqueryScript = document.getElementsByTagName("script");
      let src = Array.from(jqueryScript).filter(
        (item) => item.src === script.src
      );
      if (src.length === 0) {
        document.body.appendChild(script);
      }

      return url;
    });
  }, []);

  return (
    <FormSwitcher id={id}>
      {forms.length && !submited ? (
        <>
          <FormDots>
            {forms.map((form, index) => {
              const isVisible =
                displayedForms.includes(index) && displayedForms.length > 1;
              const isCurrent = index === active;

              return (
                <Dot
                  key={index}
                  onClick={() => {
                    setActive(index);
                  }}
                  hidden={!isVisible}
                  bgColor={colors.primary.base}
                  current={isCurrent}
                >
                  {index + 1}
                </Dot>
              );
            })}
          </FormDots>
          {forms.map((form: string, index) => {
            const isVisible = active === index;

            return isVisible && form ? (
              <FormContainer
                key={index}
                id={index.toString()}
                {...{ cardStyle, ...props }}
                hidden={!isVisible}
              >
                <FormCut>
                  <HubspotForm
                    portalId={HUBSPOT_ID}
                    formId={form}
                    onReady={() => {
                      setDisplayedForms(displayedForms.concat(active));
                    }}
                    onFormSubmitted={() => {
                      manageFormSubmit();
                    }}
                    inlineMessage={submitedText}
                    loading={<Loading height={loadingHeight} />}
                  />
                </FormCut>
              </FormContainer>
            ) : null;
          })}
        </>
      ) : (
        <Message id="form">
          <h3>{submitedTitle}</h3>
          <p>{submitedText}</p>
        </Message>
      )}
    </FormSwitcher>
  );
};

export default Form;

const FormSwitcher = styled.div``;

const FormDots = styled.ul`
  display: flex;
  margin: 0;
  margin-bottom: 2rem;
`;

const Dot = styled.li`
  ${(props: { bgColor?: string; current?: boolean }) => css`
    list-style: none;
    padding: 1rem;
    border-radius: 1rem;
    line-height: 1.5rem;
    margin: 0.25rem;
    cursor: pointer;
    transition: 0.25s all ease-in-out;
    ${props.current
      ? css`
          background-color: ${props.bgColor};
          color: white;
        `
      : css`
          background-color: #f0f0f0;
          color: inherit;
        `}
    &:first-of-type {
      margin-left: 0;
    }
    &:last-of-type {
      margin-right: 0;
    }
  `}
`;

const FormContainer = styled.div`
  ${(props: { cardStyle?: boolean }) => css`
    ${props.cardStyle
      ? css`
          background-color: white;
          padding: 3rem 1.5rem;
          max-width: 60rem;
          margin: 0 auto;
          box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.15);
          border-radius: 2rem;
          ${mq.sm} {
            border-radius: 4rem;
            padding: 3rem;
          }
          ${mq.md} {
            padding: 4rem;
          }
        `
      : css``}
  `}
`;

const FormCut = styled.div`
  padding: 0 0.1rem;
  overflow: hidden;
  iframe {
    width: 100%;
    display: block;
    margin-bottom: -8.5rem;
  }
`;

const Message = styled.div``;
