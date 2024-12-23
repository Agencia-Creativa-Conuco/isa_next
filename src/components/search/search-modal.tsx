import React, { useRef } from 'react'
import styled from '@emotion/styled'
import { css, Global } from '@emotion/react'
import { CloseIcon } from '../icons'
import ScreenReaderText from 'styles/screen-reader'
// import useFocusTrap from 'hooks/use-trap-focus'
// import useFocusEffect from 'hooks/use-focus-effect'
// import SearchForm from './input'

import { mq } from 'components/grid'
import colors from 'components/colors'

const SearchModal = ({
  isSearchModalOpen,
  toggleSearchModal,
  setResultsSearch,
}) => {
  const closeSearchModal = () => {
    toggleSearchModal(false)
  }

  // Keep a reference to the input so we can grab it's value on form submission
  const inputRef = useRef()
  const containerRef = useRef()

  // useFocusEffect(inputRef, isSearchModalOpen)
  // useFocusTrap(containerRef, isSearchModalOpen)

  return (
    <>
      <ModalOverlay
        role="presentation"
        data-open={isSearchModalOpen}
        onClick={closeSearchModal}
      />
      <Container>
        {isSearchModalOpen ? (
          <>
            <Global
              styles={css`
                html {
                  overflow-y: hidden;
                }
              `}
            />

            <ModalInner
              role="dialog"
              aria-modal="true"
              onClick={(event) => {
                // prevent clicks within the content from propagating to the ModalOverlay
                event.stopPropagation()
              }}
            >
              <SectionInner ref={containerRef}>
                {/* Input */}
                {/* <SearchForm {...{ setResultsSearch }} /> */}

                <CloseButton onClick={closeSearchModal}>
                  <ScreenReaderText>Cerrar búsqueda</ScreenReaderText>
                  <CloseIcon />
                </CloseButton>
              </SectionInner>
            </ModalInner>
          </>
        ) : null}
      </Container>
    </>
  )
}

export default SearchModal

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2000;
`

const ModalOverlay = styled.div`
  background: rgba(0, 0, 0, 0.2);
  display: none;
  opacity: 0;
  position: fixed;
  bottom: 0;
  left: -9999rem;
  top: 0;
  transition: opacity 0.2s linear, left 0s 0.2s linear;
  width: 100%;
  z-index: 999;

  &[data-open='true'] {
    display: block;
    opacity: 1;
    left: 0;
  }
`

const ModalInner = styled.div`
  box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.08);
  transform: translateY(0);
  background: #fff;
  transition: transform 0.25s ease-in-out, box-shadow 0.1s 0.25s linear;
  cursor: default;
`

const SectionInner = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 120rem;
  width: calc(100% - 4rem);
  display: flex;
  justify-content: space-between;
  max-width: 168rem;

  ${mq.md} {
    width: calc(100% - 8rem);
  }
`

const CloseButton = styled.button`
  background: none;
  border: none;
  box-shadow: none;
  border-radius: 0;
  font-size: inherit;
  font-weight: 400;
  letter-spacing: inherit;
  padding: 0;
  text-transform: none;

  color: ${colors.gray.dark ?? '#555552'};
  align-items: center;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  margin-right: -2.5rem;
  padding: 0 2.5rem;

  &:hover {
    svg {
      transform: scale(1.3);
    }
  }

  svg {
    height: 1.5rem;
    transition: transform 0.15s ease-in-out;
    width: 1.5rem;
    fill: currentColor;
    ${mq.md} {
      height: 2.5rem;
      width: 2.5rem;
    }
  }
`
