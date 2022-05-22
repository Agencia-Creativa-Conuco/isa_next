import React, { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Image from 'next/image'
import Link from 'next/link'
import { LeftArrowIcon } from './icons'
import { Spring, animated, config } from '@react-spring/web'
import colors from 'components/colors'
import { container, mq } from 'components/grid'
import { MenuItem } from 'client'
import blur from 'styles/blur'

interface ItemProps {
  item?: MenuItem
  level?: number
}

const Item = ({ item, level = 1 }: ItemProps) => {
  const { label, url, datosMenu, childItems } = item

  const isMain = level === 1

  const items = childItems()?.nodes

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
      {items?.length ? (
        <ItemList items={childItems()?.nodes} level={level + 1} />
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

interface ItemListProps {
  items?: MenuItem[]
  level?: number
}

const ItemList = ({ items, level }: ItemListProps) => {
  return (
    <List {...{ level }}>
      <ListContainer>
        {items.map((item, index) => {
          return <Item key={index} item={item} level={level} />
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

interface NavItemProps {
  item?: MenuItem
  isActive?: boolean
  setView?: any
}

const NavItem = ({ item, isActive, setView }: NavItemProps) => {
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
            src={icono.mediaItemUrl ?? blur}
            alt={label}
            width={1920}
            height={1920}
            priority
            blurDataURL={blur.src}
            placeholder="blur"
          />
        </IconWrapper>
        <OfferTitle>{label}</OfferTitle>
        {description ? <OfferCopy>{description}</OfferCopy> : null}
      </MenuItemBody>
      {childItems()?.nodes.length ? (
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

interface NavigationProps {
  items: MenuItem[]
}

const Navigation = ({ items }: NavigationProps) => {
  const [view, setView] = useState()

  return (
    <NavWrapper>
      <Container as="div">
        {items
          .filter((item) => {
            return !item?.parentId
          })
          .map((item, index) => {
            const { id, url, childItems, parentId, datosMenu, ...props } = item

            const isActive = view === id

            return childItems()?.nodes.length ? (
              <NavItem key={index} {...{ item, isActive, setView }} />
            ) : (
              <Link href={url ?? ''} key={index} passHref>
                <StyledLink
                  rel="noopener"
                  aria-label="Click para abrir el..."
                  {...props}
                >
                  <NavItem {...{ item, isActive, setView }} />
                </StyledLink>
              </Link>
            )
          })}
      </Container>

      <Displayer as="div">
        {items
          .filter((item) => !item.parentId)
          .map((item, index) => {
            const { id, childItems } = item

            const isActive = view === id

            const items = childItems()?.nodes

            return items?.length ? (
              <DisplayerSection key={index}>
                <Spring
                  reset={isActive}
                  from={{
                    marginTop: isActive ? '-1920px' : '0%',
                    opacity: isActive ? 0 : 1,
                  }}
                  to={[
                    {
                      marginTop: isActive ? '0' : '-1920px',
                      opacity: isActive ? 1 : 0,
                    },
                  ]}
                  config={config.default}
                >
                  {(styles) => (
                    <Anim style={styles}>
                      <ItemList items={items} />
                    </Anim>
                  )}
                </Spring>
              </DisplayerSection>
            ) : null
          })}
      </Displayer>
    </NavWrapper>
  )
}

export default Navigation

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

const NavWrapper = styled.div`
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
