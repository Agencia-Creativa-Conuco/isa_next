import React, { useRef, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Link from 'next/link'
import { mq } from 'components/grid'
import Navigation from './navigation/navigation'
import colors from 'components/colors'
import { fadeIn, slideDown } from 'styles/animations'
import { MenuItem } from 'client'

/**
 * Navigation Component
 *
 * It renders the navigation links
 */

interface NavProps {
  items?: MenuItem[]
  isMobileMenuOpen?: boolean
  hideXS?: boolean
  hideSM?: boolean
  hideMD?: boolean
  hideLG?: boolean
  hideXL?: boolean
  showXS?: boolean
  showSM?: boolean
  showMD?: boolean
  showLG?: boolean
  showXL?: boolean
}

const Nav = ({
  items = [],
  isMobileMenuOpen,
  hideXS,
  hideSM,
  hideMD,
  hideLG,
  hideXL,
  showXS,
  showSM,
  showMD,
  showLG,
  showXL,
  ...other
}: NavProps) => {
  const [itemActive, setItemActive] = useState('')
  const [isMenuVisible, setMenuVisible] = useState(false)

  //Show submenu
  const menuToggle = (id?: string, item?: MenuItem) => {
    if (itemActive && id === itemActive) {
      hideMenu()
    } else if (item.childItems()) {
      showMenu(id)
    }
  }

  const hideMenu = () => {
    setMenuVisible(false)
    setItemActive('')
  }

  const showMenu = (id?: string) => {
    setMenuVisible(true)
    setItemActive(id)
  }

  const ref = useRef(null)

  /**
   * Hook that handle clicks outside of the passed ref
   */

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */

    function handleClickOutside(event) {
      if (
        !isMobileMenuOpen &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        hideMenu()
      }
    }

    //Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, isMobileMenuOpen])

  return items?.length ? (
    <NavContainer
      ref={ref}
      {...{
        hideXS,
        hideSM,
        hideMD,
        hideLG,
        hideXL,
        showXS,
        showSM,
        showMD,
        showLG,
        showXL,
        ...other,
      }}
    >
      <MenuContainer>
        {items
          ?.filter((item) => !item.parentId)
          .map((item, index) => {
            const { label, url, childItems } = item

            const children = childItems().nodes
            // Check if the link matched the current page url
            const isCurrentPage = true

            return (
              <NavItem key={index} align="right" color={colors.primary.dark}>
                {/* If link url is the current page, add `aria-current` for a11y */}
                {children.length ? (
                  <NavItemTag
                    aria-current={isCurrentPage ? 'page' : undefined}
                    onClick={(e) => {
                      menuToggle(item.id, item)
                    }}
                  >
                    {label}
                  </NavItemTag>
                ) : (
                  <Link href={url} passHref>
                    <NavItemLink
                      aria-current={isCurrentPage ? 'page' : undefined}
                    >
                      {label}
                    </NavItemLink>
                  </Link>
                )}
              </NavItem>
            )
          })}
      </MenuContainer>

      {/* <MenuBox hidden={state.theme.menu.isMenuVisible?false:true}> */}
      <MenuBox hidden={isMenuVisible ? false : true}>
        {items?.map((item, index) => {
          const { childItems } = item

          const children = childItems()?.nodes

          return children?.length ? (
            <Navigation
              key={index}
              items={children}
              split
              noGutters
              itemColor={colors.text.base}
              labelColor={colors.text.base}
              itemBg="rgba(255,255,255,0.05)"
              itemBgCurrent="rgba(255,255,255,0.05)"
              itemBorderColor="white"
              isMain
              hidden={itemActive === item.id ? false : true}
            />
          ) : null
        })}
      </MenuBox>
    </NavContainer>
  ) : null
}

export default Nav

const NavContainer = styled.nav`
  ${(props: {
    hideXS?: boolean
    hideSM?: boolean
    hideMD?: boolean
    hideLG?: boolean
    hideXL?: boolean
    showXS?: boolean
    showSM?: boolean
    showMD?: boolean
    showLG?: boolean
    showXL?: boolean
  }) => css`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
    height: 100%;
    margin: 0 1rem;

    ${props.hideXS
      ? css`
          ${mq.xs} {
            display: none;
          }
        `
      : props.hideSM
      ? css`
          ${mq.sm} {
            display: none;
          }
        `
      : props.hideMD
      ? css`
          ${mq.md} {
            display: none;
          }
        `
      : props.hideLG
      ? css`
          ${mq.lg} {
            display: none;
          }
        `
      : props.hideXL
      ? css`
          ${mq.xl} {
            display: none;
          }
        `
      : css``}
    ${props.showXS
      ? css`
          ${mq.xs} {
            display: flex;
          }
        `
      : props.showSM
      ? css`
          ${mq.sm} {
            display: flex;
          }
        `
      : props.showMD
      ? css`
          ${mq.md} {
            display: flex;
          }
        `
      : props.showLG
      ? css`
          ${mq.lg} {
            display: flex;
          }
        `
      : props.showXL
      ? css`
          ${mq.xl} {
            display: flex;
          }
        `
      : css``}
  `}
`

const MenuContainer = styled.ul`
  padding: 0;
  margin: 0;
  ${mq.lg} {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    align-content: center;
    justify-content: flex-end;
  }
`
interface NavItemProps {
  color?: string
  align?: string
}
const NavItem = styled.li`
  ${({ color = 'darkblue', align }: NavItemProps) => css`
    ${mq.lg} {
      cursor: pointer;
      flex: 0 0 auto;
      list-style: none;
      font-size: 1.6rem;
      color: ${color};
      font-weight: 600;
      text-align: ${align};
      margin: 0;
      padding: 0;
      animation: ${slideDown} 0.3s ease-in-out;
    }
  `}
`
interface inteStylesProps {
  thin?: string
  dashColor?: string
}
const itemStyles = ({ thin, dashColor = 'yellow' }: inteStylesProps) => css`
  display: block;
  padding: 0.25rem 0.8rem;
  margin: 0;
  text-decoration: none;
  position: relative;
  color: inherit;
  ${thin ? 'padding-bottom: 1rem;' : ''}
  ${mq.lg} {
    &:after {
      content: '';
      width: 60%;
      height: 0.35rem;
      background-color: transparent;
      transition: all 0.2s ease-in-out;
      display: block;
      position: absolute;
      top: 100%;
    }
    &:hover {
      &:after {
        content: '';
        background-color: ${dashColor};
      }
    }
  }
`

const NavItemTag = styled.span`
  ${itemStyles}
`

const NavItemLink = styled.a`
  ${itemStyles}
`

const MenuBox = styled.section`
  ${({ hidden }) => css`
    ${mq.lg} {
      position: absolute;
      top: 100%;
      left: 0%;
      width: 100%;
      background-color: white;
      padding: 30px;
      border-radius: 15px;
      box-shadow: 0 0px 5px rgba(0, 0, 0, 0.17);
      transition: all 2s ease-in-out;
      animation: ${fadeIn} 0.3s ease-in-out;
    }
  `}
`
