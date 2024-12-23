import React from 'react'
import styled from '@emotion/styled'
import { container } from 'components/grid'
import {
  InstagramIcon,
  Facebook2Icon,
  TwitterIcon,
  YoutubeIcon,
  LinkedInIcon,
} from './icons'
import { client } from 'client'

const SocialBox = () => {
  const redesSociales =
    client.useQuery()?.acfOptionsRedesSociales?.redesSociales?.redes || []

  const icons = {
    facebook: Facebook2Icon,
    twitter: TwitterIcon,
    youtube: YoutubeIcon,
    linkedin: LinkedInIcon,
    instagram: InstagramIcon,
  }

  const redes = redesSociales.map((red) => {
    return {
      ...red,
      icon: icons[red.tipoRed],
    }
  })
  return redes.length ? (
    <Container>
      <Box>
        {redes.map((red, index) => {
          const Icon = red?.icon
          return red?.icon ? (
            <LinkIcon
              key={index}
              href={red?.url ?? ''}
              target="_blank"
              rel="noreferrer"
              aria-label={red.tipoRed}
            >
              <Icon />
            </LinkIcon>
          ) : null
        })}
      </Box>
    </Container>
  ) : null
}

export default SocialBox

const Box = styled.div``

const Container = styled.div`
  ${container}
`

const LinkIcon = styled.a`
  border-radius: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: white;
  display: inline-block;
  margin-right: 1rem;
  margin-bottom: 1rem;
  width: 4.5rem;
  height: 4.5rem;
  line-height: 4.5rem;
  color: white;
  text-align: center;
  font-size: 0;
  &:hover {
    opacity: 0.5;
  }
  svg {
    display: inline-block;
    line-height: 4.5rem;
    fill: white;
    width: 60%;
    line-height: 4.5rem;
    vertical-align: middle;
  }
`
