import styled, { css } from 'styled-components'

export type LinksLayout = 'grid' | 'row'

type containerProps = {
  layout: LinksLayout
}

const LinksLayoutContainer = styled.div`
  padding: 2.5rem 0 2rem;

  width: 95vw;
  max-width: 45rem;

  margin: 0 auto;
`

const LinksLayoutList = styled.ul<containerProps>`
  ${({ layout }) =>
    layout === 'grid'
    && css`
      display: grid;
      gap: 1.5rem;
      row-gap: 0;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
    `}

  ${({ layout }) =>
    layout === 'row'
    && css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `}
`

const LinksLayoutMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-bottom: 2.5rem;

  button {
    background: none;
    border-radius: 50%;

    display: flex;

    height: 4.5rem;
    width: 4.5rem;

    transition: background .25s ease-out;

    &:hover {
      background: ${({ theme }) => theme.color.main.selection};
      border: solid .2rem ${({ theme }) => theme.color.main.comment};
    }
    &.active {
      background: ${({ theme }) => theme.color.main.selection};
      outline: solid .2rem ${({ theme }) => theme.color.main.comment};
    }
    &:last-child{
      margin-left: .5rem;
    }

    img {
      margin: auto;
      height: 2.5rem;
    }
  }
`

export { LinksLayoutContainer, LinksLayoutList, LinksLayoutMenu }
