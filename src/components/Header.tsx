import React, { useState } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Link from 'next/link'
import Nav from 'components/nav'
import MobileMenu from 'components/menu'
import SearchInput from './header-search-form'
import SearchButton from './search/search-button'
// import { getHierarchicalItems } from './inc/auxiliar'
import Image from 'next/image'
import { container, mq } from 'components/grid'

import logo from '../../public/images/site/logo.svg'
import { client, MenuLocationEnum } from 'client'

const Header = (
  {
    // setResultsSearch
  },
) => {
  const { useQuery } = client
  const menu = useQuery().menuItems({
    first: 10000,
    where: { location: MenuLocationEnum.PRIMARY },
  })

  // const menuItems = getHierarchicalItems(menu.menuItems.nodes)
  const items = menu?.nodes

  const [isMobileMenuOpen, toggleMobileMenu] = useState(false)
  const [isSearchModalOpen, toggleSearchModal] = useState(false)

  return (
    <HeaderWrapper>
      <Container>
        <Link href="/" passHref>
          <SLink>
            <Logo>
              <Image src={logo} alt="Logo universidad ISA" />
            </Logo>
          </SLink>
        </Link>

        <NavWrapper>
          <NavWrapperContainer>
            <Nav items={items} {...{ isMobileMenuOpen }} hideXS showLG />

            <Gadgets>
              {!isMobileMenuOpen && (
                <SearchButton {...{ isSearchModalOpen, toggleSearchModal }} />
              )}
              <MobileMenu
                items={items}
                {...{
                  isMobileMenuOpen,
                  toggleMobileMenu,
                  toggleSearchModal,
                }}
              />
            </Gadgets>
          </NavWrapperContainer>
        </NavWrapper>

        <WrapperSearch>
          {/* <SearchInput
            {...{
              isSearchModalOpen,
              toggleSearchModal,
              setResultsSearch,
              isMobileMenuOpen,
            }}
          /> */}
        </WrapperSearch>
      </Container>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  ${(props: { isSticky?: boolean; isOnTop?: boolean }) => css`
    padding: 0.15rem 0;
    position: relative;
    z-index: 100;
    transition: background 0.2s ease-in-out;
    ${props.isSticky
      ? css`
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
        `
      : css``}
    ${!props.isOnTop
      ? css`
          position: fixed;
          left: 0;
          top: 0;
          width: 100%;
        `
      : css``}
  `}
`

const Container = styled.div`
  ${container}
  display: grid;
  grid-template-columns: 1fr 1fr auto;

  grid-template-areas:
    'col_1 col col_2'
    'col_3 col_3 col_3';

  ${mq.lg} {
    grid-template-columns: 1fr auto auto;

    grid-template-areas:
      'col_1 col_2 col_2'
      'col_space col_3 col_3';
  }
`
const Logo = styled.div`
  max-width: 9rem;
  width: 12rem;
  ${mq.md} {
    max-width: 10rem;
  }
  ${mq.lg} {
    max-width: 12rem;
  }
`

const NavWrapper = styled.div`
  grid-area: col_2;
`

const NavWrapperContainer = styled.div`
  background-color: white;
  padding: 0.5rem;
  border-radius: 10rem;
  box-shadow: 0.1rem 0.1rem 0.5rem rgba(0, 0, 0, 0.15);
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  ${mq.lg} {
    grid-template-columns: 1fr 50px;
  }
`

const WrapperSearch = styled.div`
  grid-area: col_3;
  max-width: 81rem;
  margin-left: 2rem;
`

const SLink = styled.a`
  text-decoration: none;
  grid-area: col_1;
`

const Gadgets = styled.div`
  display: flex;
  align-items: center;
  z-index: 2;
`
