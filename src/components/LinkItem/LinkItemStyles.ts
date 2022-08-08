import styled, { css } from 'styled-components'

// Types
import { LinksLayout } from '../LinksLayout/LinksLayoutStyles'

type containerProps = {
  linkStyle: LinksLayout
  color: string
}

const LinkItemContainer = styled.li<containerProps>`
  height: fit-content;

  transition: transform .25s ease-out;

  a {
    background: ${({ color }) => color};
    box-shadow: .2rem .2rem 1rem rgba(0, 0, 0, 0.15);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${({ linkStyle }) => linkStyle === 'grid' && css`

      height: 15rem;
      width: 100%;
    `}

    ${({ linkStyle }) => linkStyle === 'row' && css`

      height: 12rem;
      width: 95vw;
      max-width: 45rem;
    `}

    img {
      height: 5rem;
      width: 5rem;
      filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.15));
    }

    span {
      color: #fff;
      text-shadow: 0 0 .2rem ${({ color }) => color}; ;
      margin-top: 1rem;
      font-size: 1.6rem;
      font-weight: 600;
    }

    margin-bottom: 1.5rem;
  }

  &:hover {
    transform: scale(1.03);
  }
  &:active {
    transition: transform .1s ease-out;
    transform: scale(.98);
  }
`

export { LinkItemContainer }
