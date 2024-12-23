import React, { useEffect } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { h3 } from "styles/tipography";
import { SearchIcon } from "./icons";
import ResourceCard from "./resource-card";
import colors from "components/colors";
import useModal from "hooks/useModal";
import ctas from "styles/cta";
import { container, mq } from "components/grid";
import { client, Recurso } from "client";

interface ResourcesListProps {
  spaceTopNone?: boolean;
  spaceBottomNone?: boolean;
  spaceNone?: boolean;
  title?: string;
  titleAs?: any;
  titleColor?: string;
  resourceColor?: string;
  searchEnable?: boolean;
  alwaysVisibile?: boolean;
  noResultsText?: string;
  thin?: boolean;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
  exclude?: any[];
  items?: Recurso[];
}

const ResourcesList = ({
  spaceTopNone,
  spaceBottomNone,
  spaceNone,
  title = "Recursos",
  titleAs = "h2",
  titleColor = colors.primary.dark,
  resourceColor = colors.primary.dark,
  searchEnable = false,
  alwaysVisibile = false,
  noResultsText = "Sin resultados para mostrar",
  thin = false,
  small = false,
  medium = true,
  large = false,
  exclude = [],
  items = [],
}: ResourcesListProps) => {
  const resources = items?.filter(
    (resource) => !exclude.includes(resource.tipo)
  );

  const { openModal, ModalUI } = useModal();

  useEffect(() => {}, []);

  return resources.length || alwaysVisibile ? (
    <Section
      {...{
        spaceTopNone,
        spaceBottomNone,
        spaceNone,
        thin,
        small,
        medium,
        large,
      }}
    >
      <ContainerUI>
        <Title as={titleAs} color={titleColor}>
          {title}
        </Title>
        <Button onClick={openModal}>Ver recursos</Button>
      </ContainerUI>

      <ModalUI>
        <Container>
          <Title as={titleAs} color={titleColor}>
            {title}
          </Title>

          {searchEnable ? (
            <SearchForm role="search" aria-label="Buscar:" onSubmit={(e) => {}}>
              <SearchInput
                type="text"
                placeholder="Buscar:"
                onInput={(e) => {}}
              />
              <SearchButton>
                <SearchIcon />
              </SearchButton>
            </SearchForm>
          ) : null}
          <ContainerCard>
            {resources.length ? (
              resources.map((item, index) => {
                return (
                  <ResourceCard
                    key={index}
                    title={item?.nombre}
                    color={resourceColor}
                    item={item}
                  />
                );
              })
            ) : (
              <Message color={colors.red.base}>{noResultsText}</Message>
            )}
          </ContainerCard>
        </Container>
      </ModalUI>
    </Section>
  ) : null;
};

export default ResourcesList;

const Section = styled.section`
  margin-bottom: 6.4rem;
  margin-top: 6.4rem;
  ${mq.md} {
    margin-bottom: 12.8rem;
    margin-top: 12.8rem;
  }
`;
const Container = styled.div`
  ${container}
`;

const ContainerUI = styled.div`
  ${container}
  text-align:center;
`;

const ContainerCard = styled.div`
  ${container}
  display:grid;
  grid-template-columns: 100%;
  grid-column-gap: 2rem;
  justify-content: center;
  ${mq.lg} {
    grid-template-columns: 40% 40%;
  }
  ${mq.xl} {
    grid-template-columns: 33.3333% 33.3333% 33.3333%;
  }
`;

const Title = styled.h2`
  ${(props: { color?: string }) => css`
    text-align: center;
    font-weight: 900;
    margin-bottom: 50px;
    color: ${props.color};
  `}
`;

const SearchForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 80px;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding-left: 20px;
  padding-right: 80px;
  outline: none;
  border: none;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  font-size: 20px;
`;

const SearchButton = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: white;
  outline: none;
  border: none;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  background-color: ${colors.primary.base};
  cursor: pointer;
  text-align: center;
  svg {
    display: inline-block;
    transform: scale(1.2);
  }
`;

const Message = styled.p`
  ${h3}
  ${({ color }) => css`
    text-align: center;
    color: ${color};
  `}
`;

const Button = styled.button`
  ${ctas}
`;
