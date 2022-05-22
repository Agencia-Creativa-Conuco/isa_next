import Link from 'next/link'
import type { WPPageInfo } from 'client'
import styled from '@emotion/styled'
import ctas from 'styles/cta'
import { container } from './grid'
import colors from 'components/colors'

interface NextPageNavigationProps {
  href: string
}

function NextPageNavigation(props: NextPageNavigationProps) {
  return (
    <Link href={props.href}>
      <SLink aria-label={'Next page.'}>Siguiente →</SLink>
    </Link>
  )
}

interface PreviousPageNavigationProps {
  href: string
}

function PreviousPageNavigation(props: PreviousPageNavigationProps) {
  return (
    <Link href={props.href}>
      <SLink aria-label={'Previous page.'}>← Anterior</SLink>
    </Link>
  )
}

export interface PaginationProps {
  pageInfo: WPPageInfo
  basePath: string
}

export default function Pagination({ pageInfo, basePath }: PaginationProps) {
  const previousPageUrl = `${basePath}/before/${pageInfo?.startCursor}`
  const nextPageUrl = `${basePath}/after/${pageInfo?.endCursor}`

  return (
    <Nav aria-label="Pagination">
      <Container space>
        {pageInfo.hasPreviousPage ? (
          <NavItem>
            <PreviousPageNavigation href={previousPageUrl} />
          </NavItem>
        ) : (
          <span></span>
        )}
        <span></span>
        {pageInfo.hasNextPage ? (
          <NavItem>
            <NextPageNavigation href={nextPageUrl} />
          </NavItem>
        ) : (
          <span></span>
        )}
      </Container>
    </Nav>
  )
}

const Nav = styled.nav``

const Container = styled.ul`
  ${container}
  display: grid;
  gap: 3rem;
  grid-template-columns: auto 1fr auto;
`

const NavItem = styled.li`
  list-style: none;
`

const SLink = styled.a`
${ctas}
background-color: ${colors.primary.dark};
color: white;
text-decoration: none;
`
