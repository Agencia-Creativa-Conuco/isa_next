import React from 'react'
import styled from '@emotion/styled'
import {
  PhoneIcon,
  MailIcon,
  WhatsappIcon,
  ClockIcon,
  LocationIcon2,
} from 'components/icons'
import Link from 'next/link'
import colors from 'components/colors'
import { container, mq } from 'components/grid'

const Contact = ({ data }) => {
  const {
    title = 'Contacto',

    telefonos = [],
    emails = [],
    whatsapp = [],
    horarios,
    direcciones,
  } = data

  return telefonos?.length ||
    emails?.length ||
    whatsapp?.length ||
    horarios ||
    direcciones ? (
    <Section id="section_contact">
      <SSection>
        <Container>
          <Title>{title}</Title>

          {telefonos?.length ? (
            <ListItem>
              <Icon>
                <PhoneIcon />
              </Icon>
              <List>
                {telefonos.map((item, index) => {
                  const { telefono, extensiones = [] } = item

                  const extsFormated = extensiones?.length
                    ? extensiones.reduce((acc, cur, idx, src) => {
                        return (
                          acc +
                          (idx < src.length - 1
                            ? cur.extension + ', '
                            : cur.extension)
                        )
                      }, '')
                    : ''

                  return (
                    <Item key={index}>
                      <Phone>
                        <Link href={`tel: ${telefono}`} passHref>
                          <StyledLink target="_blank">
                            {telefono}
                            {extensiones?.length > 0
                              ? (extensiones?.length > 1
                                  ? `, Exts. `
                                  : ', Ext. ') + extsFormated
                              : ''}{' '}
                          </StyledLink>
                        </Link>
                      </Phone>
                    </Item>
                  )
                })}
              </List>
            </ListItem>
          ) : null}
          {whatsapp?.length ? (
            <ListItem>
              <Icon>
                <WhatsappIcon />
              </Icon>

              <List>
                {whatsapp.map((item, index) => {
                  const { telefono } = item

                  return (
                    item && (
                      <Item key={index}>
                        <Phone>
                          <Link
                            href={`https://wa.me/1${telefono?.replace(
                              /[^0-9]/g,
                              '',
                            )}`}
                            passHref
                          >
                            <StyledLink target="_blank" rel="noreferrer">
                              {telefono}
                            </StyledLink>
                          </Link>
                        </Phone>
                      </Item>
                    )
                  )
                })}
              </List>
            </ListItem>
          ) : null}
          {horarios?.length ? (
            <ListItem>
              <Icon>
                <ClockIcon />
              </Icon>

              <List>
                {horarios.map((item, index) => {
                  return (
                    item && (
                      <Item key={index}>
                        <ItemFont>{`${item.dias}: ${item.horas}`} </ItemFont>
                      </Item>
                    )
                  )
                })}
              </List>
            </ListItem>
          ) : null}

          {emails?.length ? (
            <ListItem>
              <Icon>
                <MailIcon />
              </Icon>

              <List>
                {emails.map((item, index) => {
                  const { email } = item

                  return (
                    item && (
                      <Item key={index}>
                        <ItemFont>
                          <Link href={`mailto: ${email}`} passHref>
                            <StyledLink target="_blank">{email}</StyledLink>
                          </Link>
                        </ItemFont>
                      </Item>
                    )
                  )
                })}
              </List>
            </ListItem>
          ) : null}
          {direcciones?.length ? (
            <ListItem>
              <Icon>
                <LocationIcon2 />
              </Icon>

              <List>
                {direcciones.map((item, index) => {
                  const { direccion } = item

                  return (
                    item && (
                      <Item key={index}>
                        <ItemFont>
                          <Link
                            href={`https://goo.gl/maps/G3r1CimBgviSPRwQ9`}
                            passHref
                          >
                            <StyledLink target="_blank">{direccion}</StyledLink>
                          </Link>
                        </ItemFont>
                      </Item>
                    )
                  )
                })}
              </List>
            </ListItem>
          ) : null}
        </Container>
      </SSection>
    </Section>
  ) : null
}

export default Contact

const Section = styled.section`
  background-color: ${colors.gray.light};
  overflow: hidden;
`

const SSection = styled.div`
  margin-bottom: 5.5rem;
  margin-top: 5.5rem;
  ${mq.md} {
    margin-bottom: 9.6rem;
    margin-top: 9.6rem;
  }
`

const Container = styled.div`
  ${container}
`

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
`

const Title = styled.h2`
  color: ${colors.text.base};
  text-transform: uppercase;
  font-weight: initial;
  margin-bottom: 4rem;
  margin-top: 0;
`

const ListItem = styled.div`
  display: flex;
  gap: 1.5rem;
`

const Icon = styled.div`
  max-width: 3rem;
  width: 100%;
  color: ${colors.primary.base};
  svg {
    fill: ${colors.primary.base};
  }
`

const List = styled.ul`
  margin: 0;
  padding: 0;
`

const Item = styled.li`
  list-style: none;
  margin: 0;
  padding: 0;
  color: ${colors.text.base};
  margin-bottom: 1rem;
`

const Phone = styled.div`
  font-weight: 900;
  font-size: 2rem;
  ${mq.md} {
    font-size: 3rem;
  }
`

const ItemFont = styled.p`
  font-weight: bold;
  font-size: 2rem;
`
