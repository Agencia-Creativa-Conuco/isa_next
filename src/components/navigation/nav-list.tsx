import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import NavItem from './nav-item'
import { MenuItem } from 'client'

interface NavListProps {
  items?: MenuItem[]
  isMain?: boolean
  itemColor?: string
  itemBg?: string
  itemBgCurrent?: string
  itemBorderColor?: string
  itemBorderAll?: boolean
  itemFontWeight?: string
  itemFontWeightAll?: boolean
  itemExpandColor?: string
}

const NavList = ({
  items,
  isMain = false,
  itemColor,
  itemBg,
  itemBgCurrent,
  itemBorderColor,
  itemBorderAll,
  itemFontWeight,
  itemFontWeightAll,
  itemExpandColor,
  ...props
}: NavListProps) => {
  return (
    <List {...{ isMain, ...props }}>
      {items.map((item?: MenuItem, index?: number) => {
        return (
          <NavItem
            key={index}
            {...{ item, isMain }}
            color={itemColor}
            bg={itemBg}
            bgCurrent={itemBgCurrent}
            borderColor={itemBorderColor}
            borderAll={itemBorderAll}
            fontWeight={itemFontWeight}
            fontWeightAll={itemFontWeightAll}
            expandColor={itemExpandColor}
          />
        )
      })}
    </List>
  )
}

export default NavList

const List = styled.ul`
  ${(props: { isMain?: boolean }) => css`
    ${props.isMain
      ? css`
          padding: 0;
          margin: 0;
        `
      : css`
          margin: 0;
          margin-left: 1.5rem;
        `}
  `}
`
