import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Logo from './Logo'

const NavStyles = styled.nav`
  margin-bottom: 3em;
  .logo {
    transform: translateY(-25%);
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    text-align: center;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
    margin-top: -6rem;
  }

  li {
    text-decoration: none;
    --rotate: -2deg;
    transform: rotate(var(--rotate));

    &:nth-child(1) {
      --rotate: 1deg;
    }
    &:nth-child(2) {
      --rotate: -2.5deg;
    }
    &:nth-child(4) {
      --rotate: 2.5deg;
    }
    &:nth-child(1) {
      --rotate: 2deg;
    }

    &:hover {
      transform: rotate(3deg);
    }

    a {
      font-size: 3rem;
      text-decoration: none;

      &:hover {
        color: var(--red);
      }

      &[aria-current='page'] {
        color: var(--red);
      }
    }
  }
`

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pizza">Pizza</Link>
        </li>
        <li>
          <Link to="/pizza">
            <Logo />
          </Link>
        </li>
        <li>
          <Link to="/pizza">Pizza</Link>
        </li>
        <li>
          <Link to="/pizza">Pizza</Link>
        </li>
      </ul>
    </NavStyles>
  )
}
