import React from 'react'
import styled from '@emotion/styled'
import { Global } from '@emotion/react'
import { CloseIcon } from './menu-icon'
import MenuModal from './menu-modal'
import { mq } from 'components/grid'
import { MenuIcon, SearchIcon } from 'components/icons'
import colors from 'components/colors'

const MobileMenu = ({
  items,
  isMobileMenuOpen,
  toggleMobileMenu,
  toggleSearchModal,
}) => {
  return (
    <>
      <MenuToggle
        aria-label="Click para abrir el menu..."
        onClick={(e) => {
          e.stopPropagation()
          toggleMobileMenu(!isMobileMenuOpen)
          toggleSearchModal(false)
        }}
      >
        {isMobileMenuOpen ? (
          <>
            {/* Add some style to the body when menu is open,
            to prevent body scroll */}
            <Global styles={{ body: { overflowY: 'hidden' } }} />

            <IconContainer>
              <CloseIcon />
            </IconContainer>
          </>
        ) : (
          <IconContainer>
            <MenuIcon />
          </IconContainer>
        )}
      </MenuToggle>
      {/* If the menu is open, render the menu modal */}
      {isMobileMenuOpen && <MenuModal items={items} />}
    </>
  )
}

const MenuToggle = styled.button`
  position: relative;
  background: transparent;
  border: 0;
  color: white;
  z-index: 201;
  font-size: 0;
  padding: initial;
  outline: initial;
  border: initial;
  margin: 0 5px;
  ${mq.lg} {
    display: none;
  }
`
const IconContainer = styled.div`
  color: white;
  display: inline-block;
  width: 40px;
  height: 40px;
  background-color: ${colors.blue.base};
  color: white;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
  }
`

export default MobileMenu
