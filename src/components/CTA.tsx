import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'
import ctaStyles from 'styles/cta'

interface CtaProps {
  to: any
  children: any
  color?: string
  bgColor?: string
  bgActiveColor?: string
  shadowColor?: string
  paddingX?: string
  download?: boolean
  target?: string
  rel?: string
}
const Cta = ({
  to,
  children,
  color,
  bgColor,
  bgActiveColor,
  shadowColor,
  paddingX,
  download,
  target,
  rel,
  ...other
}: CtaProps) => {
  return (
    <Link href={to} passHref>
      <a {...{ download }} {...other} target={target} rel={rel}>
        <Span {...{ color, bgColor, bgActiveColor, shadowColor, paddingX }}>
          {children}
        </Span>
      </a>
    </Link>
  )
}

export default Cta

const Span = styled.span`
  ${ctaStyles}
`
