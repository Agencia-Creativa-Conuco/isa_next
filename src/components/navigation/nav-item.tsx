import React, { useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { animated, Spring, config } from '@react-spring/web'
import Link from 'next/link'
import NavList from './nav-list'
import { LeftArrowMenuIcon } from '../icons'
import colors from 'components/colors'
import { mq } from 'components/grid'
import { MenuItem } from 'client'

interface NavItemProps {
  item?: MenuItem
  isMain?: boolean
  defaultOpen?: boolean
  color?: string
  bg?: string
  bgCurrent?: string
  borderColor?: string
  borderAll?: boolean
  fontWeight?: string
  fontWeightAll?: boolean
  expandColor?: string
}
const NavItem = ({
  item,
  isMain = false,
  defaultOpen = false,
  color = '#FFFFFF',
  bg = '#75C15133',
  bgCurrent = '#FFE50033',
  borderColor = '#FFE500',
  borderAll = false,
  fontWeight = 'normal',
  fontWeightAll = false,
  expandColor = 'inherit',
  ...props
}: NavItemProps) => {
  const children = item?.childItems({
    first: 1000,
  })?.nodes

  const hasChildren = children?.length > 0
  const isCurrentPage = false
  const isLink = item?.uri !== '#'

  const [isOpen, setOpen] = useState(defaultOpen)

  return (
    <Item
      {...{
        isMain,
        hasChildren,
        colors,
        isCurrentPage,
        color,
        bg,
        bgCurrent,
        borderColor: borderAll ? borderColor : 'initial',
        ...props,
      }}
      onClick={(e) => {
        e.stopPropagation()
        setOpen(hasChildren && !isLink ? !isOpen : false)
      }}
    >
      {hasChildren ? (
        <Expand
          {...{ isOpen }}
          onClick={(e) => {
            e.stopPropagation()
            setOpen(!isOpen)
          }}
          color={expandColor}
        >
          <LeftArrowMenuIcon />
        </Expand>
      ) : null}
      {/* If link uri is the current page, add `aria-current` for a11y */}
      {isLink && !hasChildren ? (
        <Link href={item?.uri ?? ''} passHref>
          <ItemLink
            aria-current={isCurrentPage ? 'page' : undefined}
            fontWeight={fontWeight}
            aria-label="Item de la navegacion..."
            target={item?.target}
          >
            {item?.label}
          </ItemLink>
        </Link>
      ) : (
        <ItemLabel
          aria-current={isCurrentPage ? 'page' : undefined}
          fontWeight={fontWeight}
          onClick={(e) => {
            e.stopPropagation()
            setOpen(!isOpen)
          }}
        >
          {item?.label}
        </ItemLabel>
      )}
      <Spring
        reset={isOpen}
        from={{
          opacity: isOpen ? 0 : 1,
        }}
        to={{
          opacity: isOpen ? 1 : 0,
        }}
        config={config.default}
      >
        {(styles) => (
          <AListWrapper style={styles}>
            <Spring
              reset={isOpen}
              from={{
                marginTop: isOpen ? -1920 : 0,
                opacity: isOpen ? 0 : 1,
              }}
              to={{
                marginTop: isOpen ? 0 : -1920,
                opacity: isOpen ? 1 : 0,
              }}
            >
              {(styles) => (
                <AList style={styles}>
                  {hasChildren ? (
                    <NavList
                      items={children}
                      itemColor={color}
                      itemBg={bg}
                      itemBgCurrent={bgCurrent}
                      itemBorderColor={borderColor}
                      itemBorderAll
                      itemFontWeight={fontWeightAll ? fontWeight : 'initial'}
                      itemFontWeightAll={fontWeightAll}
                      itemExpandColor={expandColor}
                    />
                  ) : null}
                </AList>
              )}
            </Spring>
          </AListWrapper>
        )}
      </Spring>
    </Item>
  )
}

export default NavItem

const Item = styled.li`
  ${(props: {
    isCurrentPage?: boolean
    color?: string
    bg?: string
    bgCurrent?: string
    borderColor?: string
  }) => css`
    list-style: none;
    margin: 0.2rem 0;
    color: ${props.color};
    position: relative;
    cursor: pointer;
    border-left: 0.1rem solid ${props.borderColor};
    ${props.isCurrentPage
      ? css`
          background-color: ${props.bgCurrent};
        `
      : css`
          background-color: ${props.bg};
        `}
  `}
`

const Expand = styled.div`
  ${(props: { isOpen?: boolean; color?: string }) => css`
    position: absolute;
    top: 0;
    right: 0;
    width: 3.9rem;
    height: 4rem;
    padding: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props.color};
    cursor: pointer;
    transition: 0.3s transform ease-in-out;
    ${props.isOpen
      ? css`
          transform: rotate(-90deg);
        `
      : ``}
  `}
`

const itemTextStyles = ({ fontWeight }) => css`
  display: block !important;
  line-height: 1.2;
  text-decoration: none;
  color: inherit;
  padding: 1rem 1.5rem;
  padding-right: 4rem;
  font-weight: ${fontWeight};
  ${mq.lg} {
    padding: 0.5rem 1rem;
  }
  &:hover {
    text-decoration: underline;
  }
  // &[aria-current="page"] {
  //     text-decoration: underline;
  // }
`

const ItemLink = styled.a`
  ${itemTextStyles}
`

const ItemLabel = styled.span`
  ${itemTextStyles}
`

const AListWrapper = styled(animated.div)`
  overflow: hidden;
`

const AList = styled(animated.div)``
