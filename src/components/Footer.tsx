import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import Image from 'next/image'
import {
  InstagramIcon,
  Facebook2Icon,
  TwitterIcon,
  YoutubeIcon,
  LinkedInIcon,
} from './icons'
import Navigation from 'components/navigation/navigation'
import colors from 'components/colors'
import Link from 'next/link'
import { container, mq } from 'components/grid'
import { client, MenuLocationEnum } from 'client'
import logoFooter from '../../public/images/site/logo-footer.svg'

const Footer = () => {
  const { useQuery } = client

  const menu = useQuery().menuItems({
    first: 10000,
    where: { location: MenuLocationEnum.FOOTER, parentId: '0' },
  })

  const items = menu?.nodes

  const redes = useQuery().acfOptionsRedesSociales.redesSociales.redes

  const icons = {
    facebook: Facebook2Icon,
    twitter: TwitterIcon,
    youtube: YoutubeIcon,
    linkedin: LinkedInIcon,
    instagram: InstagramIcon,
  }

  return (
    <FooterWrapper fluid>
      <RowWrapper color={colors.blue.dark}>
        <ContainerLayoutOne fluid maxWidth="150rem">
          <LogoWrapper>
            <Link href={'/'} aria-label="Logo" passHref>
              <SLink>
                <Image
                  src={logoFooter}
                  alt="Logo Universidad ISA Blanco"
                  width={1920}
                  height={1080}
                />
              </SLink>
            </Link>
          </LogoWrapper>
          <NavWrapper>
            <Navigation
              items={items}
              split
              noGutters
              itemColor={colors.text_main}
              labelColor={colors.text_main}
              itemBg="rgba(255,255,255,0.05)"
              itemBgCurrent="rgba(255,255,255,0.05)"
              itemBorderColor="white"
              isMain
            />
          </NavWrapper>
        </ContainerLayoutOne>
      </RowWrapper>

      {/* Row de los Icons */}
      <RowWrapper color={colors.blue.base} paddingBottom="10rem">
        <ContainerLayoutTwo fluid maxWidth="150rem">
          <ColLayoutOne>
            <Title color={colors.shadow.base}> REDES SOCIALES </Title>
            <SocialBox>
              {redes.map((red, index) => {
                const Icon = icons[red.tipoRed]

                return Icon ? (
                  <LinkIcon
                    key={index}
                    href={red.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={red.tipoRed}
                  >
                    <Icon />
                  </LinkIcon>
                ) : null
              })}
            </SocialBox>
          </ColLayoutOne>
          <ColLayoutTwo>
            <Title>Contacto</Title>
            <BoxContact>
              <span>Teléfono: </span>
              <Link href={'tel:8092472000'} target="_blank">
                809-247-2000
              </Link>
            </BoxContact>
            <BoxContact>
              <span>Email: </span>
              <Link href={'mailto:info@isa.edu.do'} target="_blank">
                info@isa.edu.do
              </Link>
            </BoxContact>
            <BoxContact>
              <span>Dirección: </span>
              <Link
                href={'https://goo.gl/maps/kjucmUrxqEWdxS7c7'}
                target="_blank"
              >
                Ave. Pres. Antonio Guzmán Km. 5 1/2, La Herradura, Santiago.
                Apartado Postal 166
              </Link>
            </BoxContact>
          </ColLayoutTwo>
        </ContainerLayoutTwo>
      </RowWrapper>
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.footer`
  ${container}
  padding: 0;
  overflow: hidden;
`

const RowWrapper = styled.div`
  ${(props: { color: string; paddingBottom?: string }) => css`
    background-color: ${props.color};
    padding: 5rem 0;
    color: white;
    ${props.paddingBottom ? `padding-bottom: ${props.paddingBottom};` : ``}
  `}
`

const ContainerLayoutOne = styled.div`
  ${container}
  display: grid;
  grid-template-columns: 100%;
  gap: 3rem;

  ${mq.lg} {
    grid-template-columns: 5fr 2fr;
  }
  ${mq.xl} {
    grid-template-columns: 5fr 1fr;
  }
`

const NavWrapper = styled.div`
  ${mq.lg} {
    order: 1;
  }
`

const LogoWrapper = styled.div`
  text-align: center;
  ${mq.lg} {
    order: 2;
  }
`

const SLink = styled.a`
  padding: 0 1.5rem;
  display: block;
  position: relative;
  max-width: 25rem;
  margin: 0 auto;
  margin-bottom: 6rem;
  ${mq.xl} {
    padding: 0;
  }
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    margin: 0 auto;
    width: 99%;
    padding-bottom: 0.1rem;
    bottom: -3rem;
    background: #666666;
    opacity: 0.5;
  }
`

const ContainerLayoutTwo = styled.div`
  ${container};
  display: grid;
  grid-template-columns: 100%;
  ${mq.md} {
    grid-template-columns: 30% 70%;
  }
  ${mq.lg} {
    grid-template-columns: 25% 70%;
  }
`

const ColLayoutOne = styled.div`
  padding: 0 0 0 1.5rem;
  ${mq.md} {
    border-right: 0.1rem solid lightgray;
  }
`

const ColLayoutTwo = styled.div`
  padding: 0 1.5rem;
`

const Title = styled.h3`
  color: white;
  font-weight: bold;
  text-shadow: ${(props) => props.color};
`

const SocialBox = styled.div``

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
const BoxContact = styled.div`
  & > a {
    text-decoration: none;
    color: white;
  }
  & > span {
    font-weight: bold;
  }
`
