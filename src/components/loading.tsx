import React from 'react'
import styled from '@emotion/styled'
import { css, keyframes } from '@emotion/react'
import colors from 'components/colors'

const addAlpha = (hex, alpha) => {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${alpha})`
}

const long = keyframes`
  0% {left: -35%;right: 100%}
  60% {left: 100%;right: -90%}
  100% {left: 100%;right: -90%}
`

const short = keyframes`
  0% {left: -200%;right: 100%}
  60% {left: 107%;right: -8%}
  100% {left: 107%;right: -8%}
`

const style = (i = 1, color) =>
  css`
    position: absolute;
    height: 240px;
    overflow: hidden;
    background-color: ${color};
    background-clip: padding-box;
    display: block;
    border-radius: 2px;
    will-change: left, right;
    animation-fill-mode: forwards;
    animation: ${i === 1 ? long : short} 2.1s ${i === 2 ? '1.15s' : ''}
      ${i === 1
        ? 'cubic-bezier(0.65, 0.815, 0.735, 0.395)'
        : 'cubic-bezier(0.165, 0.84, 0.44, 1)'}
      infinite;
  `

const wrapper = (width, height, color) =>
  css`
    position: relative;
    width: ${width}px;
    height: ${height}px;
    overflow: hidden;
    background-color: ${addAlpha(color, 0.2)};
    background-clip: padding-box;
  `
interface LoadingProps {
  height?: string
}
const Loading = ({ height }: LoadingProps) => (
  <Container height={height}>
    <Deco1>
      <Deco2 />
    </Deco1>
  </Container>
)

export default Loading

const Container = styled.div`
  ${(props: { height?: string }) => css`
    width: 100%;
    height: ${props.height ? props.height : `80vh`};
    margin: 0;
    padding: 24px;
    display: flex;
    justify-content: center;
    align-items: center;

    & > * {
      margin-top: 24px;
    }
  `}
`

const Deco1 = styled.div`
  ${wrapper(240, 4, colors.primary.base)}
`

const Deco2 = styled.div`
  ${style(1, colors.primary.base)}
`
