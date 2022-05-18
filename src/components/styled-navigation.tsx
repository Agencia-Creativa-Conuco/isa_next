import React, { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Image from 'next/image'
import Link from 'next/link'
import { LeftArrowIcon } from './icons'
import { Spring, animated } from '@react-spring/web'
import colors from 'styles/colors'
import { container, mq } from 'components/grid'
import { MenuItem } from 'client'

const Item = ({ item, ...other }) => {
  const { label, url, datosMenu, childItems = [] } = item

  const { level = 1 } = other

  const isMain = level === 1

  return (
    <Component>
      {datosMenu?.etiqueta ? (
        <Etiqueta>
          <Title
            color={
              (level + 1) % 2 === 0 && level !== 1
                ? colors.text.base
                : level >= 2
                ? colors.primary.dark
                : colors.primary.dark
            }
            bgHover={colors.gray.light}
            {...{ isMain, level }}
          >
            {label}
          </Title>
        </Etiqueta>
      ) : (
        <StyledLink href={url} aria-label="Click para abrir el...">
          <Title
            color={
              (level + 1) % 2 === 0 && level !== 1
                ? colors.text.base
                : level >= 2
                ? colors.primary.dark
                : colors.primary.dark
            }
            bgHover={colors.gray.light}
            {...{ isMain, level }}
          >
            {label}
          </Title>
        </StyledLink>
      )}
      {childItems()?.nodes.length ? (
        <ItemList items={childItems} level={level + 1} />
      ) : null}
    </Component>
  )
}

const Component = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;

  ul {
    display: grid;
    margin: 1rem 0 0 0;
    ${mq.md} {
      grid-template-columns: 1fr 1fr;
    }
  }

  li ul:first-of-type {
    display: grid;
    grid-template-columns: 1fr;
  }
`

interface TitleProps {
  isMain?: boolean
  level?: number
  color?: string
  bgHover?: string
}

const Title = styled.span`
  ${({
    isMain,
    level,
    color = 'blue',
    bgHover = 'lightgray',
  }: TitleProps) => css`
    color: ${color};
    padding: 0.5rem 1.5rem;
    text-transform: uppercase;
    font-size: 2rem;
    display: block;
    ${mq.md} {
      display: inline-block;
    }
    &:hover {
      background-color: ${bgHover};
    }
    ${isMain
      ? css`
          font-weight: 900;
        `
      : level % 2 !== 0
      ? css`
          font-weight: 400;
          text-transform: initial;
        `
      : css`
          font-weight: 300;
          text-transform: initial;
        `}
  `}
`

const ItemList = ({ items, ...other }) => {
  const { level = 1 } = other

  return (
    <List {...{ level }}>
      <ListContainer>
        {items().nodes.map((item?: MenuItem) => {
          return <Item key={item.id} item={item} {...other} />
        })}
      </ListContainer>
    </List>
  )
}

interface ListProps {
  level?: number
  container?: any
}

const List = styled.div`
  ${({ level }: ListProps) => css`
    padding: 0;
    ${level === 2
      ? css`
          margin-bottom: 2rem;
        `
      : css`
          margin-bottom: 0;
        `};
    ${(level + 1) % 2 === 0 || level + 1 === 3
      ? css`
          padding-left: 0;
        `
      : css`
          padding-left: 1rem;
        `}
  `}
`

const ListContainer = styled.ul`
  ${container}
`

const NavItem = ({ item, isActive, setView }) => {
  const {
    id,
    label,
    description,
    datosMenu: { icono },
    childItems,
  } = item

  return icono.mediaItemUrl ? (
    <MItem
      onClick={(e) => setView(isActive ? null : id)}
      active={isActive}
      bg={colors.blue.base}
      bgHover={colors.gray.light}
    >
      <MenuItemBody>
        <IconWrapper>
          <Image
            src={icono.mediaItemUrl}
            alt={label}
            width={1920}
            height={1920}
            priority
          />
        </IconWrapper>
        <OfferTitle>{label}</OfferTitle>
        {description ? <OfferCopy>{description}</OfferCopy> : null}
      </MenuItemBody>
      {childItems().nodes.length ? (
        <ExpandIcon
          bgColor={isActive ? 'white' : colors.primary.dark}
          color={isActive ? colors.primary.dark : 'white'}
          {...{ isActive }}
        >
          <LeftArrowIcon />
        </ExpandIcon>
      ) : null}
    </MItem>
  ) : null
}

const StyledNavigation = ({ items }) => {
  const [view, setView] = useState('')

  return items.length ? (
    <Navigation>
      <Container as="div">
        {items
          .filter((item: MenuItem) => {
            return !item.parentId && item.datosMenu.visibleInicio
          })
          .map((item: MenuItem, index: number) => {
            const { id, url, childItems, parentId, datosMenu, ...props } = item

            const isActive = view === id

            return childItems().nodes.length ? (
              <NavItem key={index} {...{ item, isActive, setView }} />
            ) : (
              url && (
                <Link href={url} key={index} passHref>
                  <StyledLink
                    rel="noopener"
                    aria-label="Click para abrir el..."
                    {...props}
                  >
                    <NavItem {...{ item, isActive, setView }} />
                  </StyledLink>
                </Link>
              )
            )
          })}
      </Container>

      <Displayer as="div">
        {items
          .filter((item?: MenuItem) => !item.parentId)
          .map((item?: MenuItem) => {
            const { id, childItems } = item

            const isActive = view === id

            return childItems().nodes.length ? (
              <DisplayerSection key={item.id} hidden={!isActive}>
                <Spring
                  reset={isActive}
                  from={{ marginTop: '-100%', opacity: 0 }}
                  to={[{ marginTop: '0', opacity: 1 }]}
                >
                  {(styles) => (
                    <Anim style={styles}>
                      <ItemList items={childItems} />
                    </Anim>
                  )}
                </Spring>
              </DisplayerSection>
            ) : null
          })}
      </Displayer>
    </Navigation>
  ) : null
}

export default StyledNavigation

const Container = styled.div`
  ${container}
  display: grid;
  grid-template-columns: 1fr 1fr;
  ${mq.lg} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

const Anim = styled(animated.div)`
  padding: 5rem 0;
`

const Navigation = styled.div`
  box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.15);
`

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
`

const Etiqueta = styled.span`
  text-decoration: none;
  color: inherit;
`

interface MItemProps {
  active?: boolean
  bg?: string
  bgHover?: string
}

const MItem = styled.div`
  ${({ active, bg = 'lightblue', bgHover = 'lightgray' }: MItemProps) => css`
    padding: 1.5rem;
    text-align: center;
    transition: all 200ms ease-in-out;
    cursor: pointer;
    height: 100%;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ${mq.md} {
      min-height: 10rem;
      padding: 2.5rem 1.5rem;
    }

    ${active
      ? css`
          background-color: ${bg};
          color: white;
          transform: scale(1.1);
          z-index: 2;
          box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.15);

          ${OfferTitle} {
            color: white;
          }
        `
      : css`
          &:hover {
            background-color: ${bgHover};
            box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.15);
          }
        `}
  `}
`

const MenuItemBody = styled.div``

const OfferTitle = styled.h3`
  margin-top: 0;
  font-weight: 900;
  font-size: 1.8rem;
  margin-bottom: 0;
  text-transform: uppercase;
  ${mq.md} {
    margin-bottom: 1rem;
  }
`

const OfferCopy = styled.p`
  display: none;
  ${mq.sm} {
    display: block;
  }
  ${mq.md} {
    margin-bottom: 2rem;
  }
`

interface ExpandIconProps {
  color?: string
  bgColor?: string
  isActive?: boolean
}

const ExpandIcon = styled.div`
  ${({ color = 'white', bgColor = 'blue', isActive }: ExpandIconProps) => css`
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 auto;
    margin-top: 0.5rem;
    border-radius: 50%;
    background-color: ${bgColor};
    color: ${color};
    transition: all 0.25s ease-in-out;
    ${isActive
      ? css`
          transform: rotate(90deg);
        `
      : css`
          transform: rotate(-90deg);
        `}
    ${mq.sm} {
      width: 2rem;
      height: 2rem;
    }
    ${mq.md} {
      width: 2.5rem;
      height: 2.5rem;
    }
  `}
`

const IconWrapper = styled.div`
  padding: 1.7rem;
  border-radius: 50%;
  background-color: ${colors.gray.light};
  width: 8rem;
  height: 8rem;
  margin: 0 auto;
  margin-bottom: 1rem;
`

const Displayer = styled.div``

const DisplayerSection = styled.div`
  box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.15) inset;
  overflow: hidden;
`
