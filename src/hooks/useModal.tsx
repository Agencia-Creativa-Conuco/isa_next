import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'
import { CloseIcon } from 'components/icons'
import colors from 'components/colors'
import { fadeIn, slideDown } from 'styles/animations'
import { container, mq } from 'components/grid'

const useModal = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  interface ModalProps {
    title?: string
    children?: any
    size?: string
  }

  const ModalUI = ({ title, children, size }: ModalProps) => {
    return (
      <ModalWrapper data-open={isModalOpen} onClick={closeModal}>
        {isModalOpen && <Global styles={{ body: { overflowY: 'hidden' } }} />}
        <CardModal
          {...{ size }}
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          <Column>
            <ModalHeader>
              {title && <ModalTitle>{title}</ModalTitle>}
              <CloseButton onClick={closeModal}>
                <CloseIcon />
              </CloseButton>
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
          </Column>
        </CardModal>
      </ModalWrapper>
    )
  }

  return {
    isModalOpen,
    openModal,
    closeModal,
    ModalUI,
  }
}

export default useModal

const ModalWrapper = styled.div`
  background: rgba(0, 0, 0, 0.5);
  display: none;
  opacity: 0;
  overflow-y: auto;
  overflow-x: hidden;
  position: fixed;
  bottom: 0;
  top: 0;
  z-index: 20000;
  animation: ${fadeIn} 0.2s ease-out;

  &[data-open='true'] {
    display: flex;
    left: 0;
    opacity: 1;
    right: 0;
    transition: opacity 0.25s ease-out;
    align-items: baseline;
    justify-content: center;
  }
`

const CardModal = styled.div`
  ${(props: { size?: string }) => css`
    background: #fff;
    margin: 0 1rem;
    margin-top: 15vh;
    margin-bottom: 15vh;
    border-radius: 5px;
    animation: ${slideDown} 0.4s ease-out;
    flex: 1;
    max-width: ${props.size ? props.size : '1140px'} !important;
    padding: 1.5rem;
    ${mq.sm} {
      padding: 3rem;
    }
    ${mq.md} {
      padding: 3.5rem;
    }
    ${mq.xl} {
      padding: 4.5rem;
    }
  `}
`

const Column = styled.div`
  ${container}
  padding: 0 1.5rem;
  display: contents;
`

const ModalHeader = styled.div`
  background-color: ${colors.gray.light};
  align-self: baseline;
  text-align: left;
  color: ${colors.green.base};
  font-weight: bold;
  margin-bottom: 2rem;
  padding-right: 5rem;
  position: relative;
`

const ModalTitle = styled.h4`
  margin: 0;
  font-weight: 300;
  margin-top: 4rem;
`

const CloseButton = styled.button`
  background: none;
  border: none;
  box-shadow: none;
  position: absolute;
  color: ${colors.gray.dark};
  right: 0rem;
  top: 0rem;
  padding: 1rem;
  transform: translate(0, -1rem);
  z-index: 6;
  &:hover {
    cursor: pointer;
    svg {
      transform: scale(1.3);
    }
  }

  svg {
    height: 2rem;
    transition: transform 0.15s ease-in-out;
    fill: currentColor;

    height: 2.5rem;
    width: 2rem;
  }
`

const ModalBody = styled.div``
