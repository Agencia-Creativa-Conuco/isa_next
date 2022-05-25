import React, { useEffect, useRef } from 'react'
import { mq } from 'components/grid'
import styled from '@emotion/styled'
import Input from 'styles/input'
import { SearchIcon } from '../icons'
import { BaseToggle } from '../navigation/nav-toggle'
import { useRouter } from 'next/router'
import urlSlug from 'url-slug'

interface SearchFormProps {
  slug?: string
}
const SearchForm = ({ slug = '' }: SearchFormProps) => {
  const router = useRouter()
  const query = slug.replace('-', ' ')
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.focus()
    }
  }, [])

  return (
    <Form
      role="search"
      aria-label="Buscar:"
      onSubmit={(e) => {
        e.preventDefault()
        router.push(`/search/${urlSlug(ref.current.value)}`)
      }}
    >
      <Input
        defaultValue={query}
        type="search"
        placeholder="Buscar:"
        name="search"
        ref={ref}
      />

      {true ? (
        <HeaderToggle>
          <BaseToggle>
            <Icon>
              <SearchIcon />
            </Icon>
          </BaseToggle>
        </HeaderToggle>
      ) : null}
    </Form>
  )
}

export default SearchForm

const Form = styled.form`
  margin: 0;
  position: relative;
  width: 100%;
  align-items: stretch;
  display: flex;
  flex-wrap: nowrap;

  ${mq.md} {
    position: relative;
    width: 100%;
  }
`

const HeaderToggle = styled.div`
  display: flex;
  align-items: center;
  font-size: 0;
  margin: 0 15px;
  position: relative;
  z-index: 5;
`

const Icon = styled.div``
