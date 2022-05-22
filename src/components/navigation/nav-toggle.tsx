import React from 'react'
import styled from '@emotion/styled'
import { mq } from 'components/grid'
import colors from 'components/colors'

// Base styling for all toggle buttons
export const BaseToggle = styled.button`
  appearance: none;
  color: inherit;
  cursor: pointer;
  font-family: inherit;
  position: relative;
  text-align: inherit;
  user-select: none;
  background: none;
  border: none;
  box-shadow: none;
  border-radius: 0;
  font-size: inherit;
  font-weight: 400;
  letter-spacing: inherit;
  text-transform: none;
  align-items: center;
  display: inline-block;
  overflow: visible;
  padding: 0;
  margin: 0;
`

// Used for the menu toggle button on Mobile
export const NavToggle = styled(BaseToggle)`
  ${mq.lg} {
    display: none;
  }
`

export const CloseNavToggle = styled(BaseToggle)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  color: ${colors ? colors.gray.darker : '#555555'};
  font-size: 1.6rem;
  font-weight: 500;
  padding: 3.1rem 1.5rem;

  ${mq.md} {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  svg {
    height: 1.6rem;
    width: 1.6rem;
    fill: currentColor;
  }

  > span {
    margin-right: 1.6rem;
  }
`

// Used for the search toggle button on Mobile
export const SearchToggle = styled(BaseToggle)`
  ${mq.lg} {
    display: none;
  }
`

// Generic, reusable component for displaying icon and label
export const Icon = ({ icon }) => {
  const Icono = icon
  return (
    <ToggleInner>
      <Icono />
    </ToggleInner>
  )
}

export const ToggleInner = styled.span`
  display: inline-block;
  width: 40px;
  height: 40px;
  background-color: #0071bc;
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

// This wraps each toggle button
export const ToggleWrapper = styled.div``
