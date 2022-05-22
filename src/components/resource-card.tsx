import React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { EyeIcon, DownArrowIcon } from './icons'
import colors from 'components/colors'
import useModal from 'hooks/useModal'
import CardInfo from './card'
import Image from 'next/image'
import { mq } from 'components/grid'
import { Recurso } from 'client'
import blur from 'styles/blur'
import Link from 'next/link'

interface ResourceCardProps {
  title?: string
  color?: string
  item?: Recurso
}

const ResourceCard = ({
  title,
  color = colors.primary.dark,
  item,
}: ResourceCardProps) => {
  const { openModal, ModalUI } = useModal()

  return (
    <>
      <Card>
        <CardMedia>
          <Media>
            <Image
              src={item?.imagenPortada.mediaItemUrl ?? blur}
              alt={item.nombre}
              width={1920}
              height={1920}
              objectFit="contain"
              objectPosition="center center"
              blurDataURL={blur.src}
              placeholder="blur"
            />
          </Media>
        </CardMedia>
        <CardBody>
          <ResourceName color={color}>{title}</ResourceName>
          <ButtonBox>
            <Link href={item?.archivo.sourceUrl() ?? ''} passHref>
              <SLink download target="_blank">
                <Button>
                  <DownArrowIcon />
                </Button>
              </SLink>
            </Link>
            <Button onClick={openModal}>
              <EyeIcon />
            </Button>
          </ButtonBox>
        </CardBody>
      </Card>
      {/* Aca se les pasan los datos que se mostrararan en el modal */}
      <ModalUI size="80rem">
        <CardInfo item={item} />
      </ModalUI>
    </>
  )
}

export default ResourceCard

const Card = styled.div`
  /* padding: 1.5rem; */
  width: 50rem;
  max-width: 27rem;
  box-shadow: 0rem 2.5rem 4rem rgb(0 0 0 / 10%);
  border-radius: 15px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 50px;
  display: flex;
  overflow: hidden;
  ${mq.sm} {
    max-width: 32rem;
  }
`

const CardMedia = styled.div`
  height: 12rem;
  flex: 1;
  padding: 1.5rem;
  background-color: rgba(0 0 0 / 10%);
  display: flex;
  align-items: center;
  justify-content: center;
`

const Media = styled.div`
  width: 90%;
  height: 90%;
`

const CardBody = styled.div`
  flex: 2;
  border: 1.5rem solid white;
  border-bottom: 5rem solid white;
  height: 12rem;
  position: relative;
`

const ResourceName = styled.span`
  ${({ color = 'blue' }) => css`
    font-weight: bold;
    color: ${color};
    margin: 0;
    text-transform: uppercase;
    line-height: 1.3;
    font-size: 1.4rem;
    display: -webkit-box;
    height: 100%;
    overflow: hidden;
  `}
`

const ButtonBox = styled.div`
  position: absolute;
  bottom: -1rem;
  transform: translate(0, 100%);
  left: 0;
`

const Button = styled.button`
  background-color: ${colors.primary.base};
  color: white;
  height: 3rem;
  width: 3rem;
  padding: 0.5rem;
  margin-right: 1rem;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.75;
  transition: 0.2s all ease-in-out;
  &:hover {
    opacity: 1;
  }
  svg {
    color: inherit;
    fill: currentColor;
    width: 200%;
    transition: opacity 0.2s ease-in-out;
  }
`

const SLink = styled.a`
  text-decoration: none;
`
