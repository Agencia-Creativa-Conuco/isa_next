import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import NavList from './nav-list'
import { container, mq } from 'components/grid'
import { getHierarchicalItems } from 'lib/auxiliar'
/**
 * Navigation Component
 *
 * It renders the navigation links
 */

interface NavigationProps {
  split?: boolean
  isMain?: boolean
  items?: any[]
  noGutters?: boolean
  labelColor?: string
  itemColor?: string
  itemBg?: string
  itemBgCurrent?: string
  itemBorderColor?: string
  itemBorderAll?: boolean
  itemFontWeight?: string
  itemFontWeightAll?: boolean
  itemExpandColor?: string
  fluid?: boolean
  hidden?: boolean
}

const Navigation = ({
  split = false,
  isMain = false,
  items = [],
  noGutters = false,
  labelColor = '#FFFFFF',
  itemColor = '#FFFFFF',
  itemBg = '#75C15133',
  itemBgCurrent = '#FFE50033',
  itemBorderColor = '#FFE500',
  itemBorderAll = false,
  itemFontWeight = 'initial',
  itemFontWeightAll = false,
  itemExpandColor = 'inherit',
  fluid,
  hidden,
  ...props
}: NavigationProps) => {
  return (
    <Menu {...props} hidden={hidden}>
      <Container {...{ fluid, noGutters }}>
        {!split ? (
          <StyledCol>
            <>
              <NavList
                items={items}
                {...{ isMain }}
                {...{
                  itemColor,
                  itemBg,
                  itemBgCurrent,
                  itemBorderColor,
                  itemBorderAll,
                  itemFontWeight,
                  itemFontWeightAll,
                  itemExpandColor,
                }}
              />
            </>
          </StyledCol>
        ) : (
          items.map((item, index) => {
            const children = item?.children

            return children ? (
              <StyledCol key={index}>
                <NavigationLabel {...{ labelColor }}>
                  {item?.label}
                </NavigationLabel>

                <NavList
                  items={children}
                  {...{ isMain }}
                  {...{
                    itemColor,
                    itemBg,
                    itemBgCurrent,
                    itemBorderColor,
                    itemBorderAll,
                    itemFontWeight,
                    itemFontWeightAll,
                    itemExpandColor,
                  }}
                />
              </StyledCol>
            ) : null
          })
        )}
      </Container>
    </Menu>
  )
}

export default Navigation

const StyledCol = styled.div`
  margin-bottom: 2rem;
  padding: 0 1.5rem;
`

const Menu = styled.div`
  margin: 0;
`

const Container = styled.div`
  ${container}
  padding:0;
  display: grid;
  grid-template-columns: 100%;

  ${mq.lg} {
    grid-template-columns: 48% 48%;
  }
  ${mq.xl} {
    grid-template-columns: 33.333333% 33.333333% 33.333333%;
  }
`

const NavigationLabel = styled.span`
  ${(props: { labelColor?: string }) => css`
    color: ${props.labelColor};
    font-weight: bold;
    text-transform: uppercase;
  `}
`
