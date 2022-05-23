import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { mq } from 'components/grid'
import { fadeIn } from 'styles/animations'
import Navigation from 'components/navigation/navigation'
import colors from 'components/colors'
import SocialBox from 'components/social-box'
import { MenuItem } from 'client'
import { getHierarchicalItems } from 'lib/auxiliar'

interface MenuModalProps {
  items?: MenuItem[]
}

const MenuModal = ({ items = [] }: MenuModalProps) => {
  const list = getHierarchicalItems(items)
  return (
    <>
      <MenuOverlay color={colors.blue.dark}>
        <Navigation
          items={list}
          noGutters
          // itemColor={colors.text.base}
          // labelColor={colors.text.base}
          itemBg="rgba(255,255,255,0.05)"
          itemBgCurrent="rgba(255,255,255,0.05)"
          itemBorderColor="white"
          isMain
        />
        <SocialBox />
      </MenuOverlay>
    </>
  )
}

const MenuOverlay = styled.div`
  ${({ color }) => css`
    background-color: ${color};
    width: 100vw;
    height: 100vh;
    overflow: hidden auto;
    position: fixed;
    z-index: 200;
    top: 0;
    left: 0;
    padding: 8rem 2rem;
    /* animation: ${fadeIn} 0.3s; */
    ${mq.lg} {
      display: none;
    }
  `}
`

export default MenuModal
