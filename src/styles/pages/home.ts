import styled from 'styled-components'

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  padding: 8rem 2rem;
`

const HomeHeader = styled.div`
  .profile-image-container {
    background: ${({ theme }) => theme.color.main.selection};
    border-radius: 50%;

    height: 20rem;
    width: 20rem;

    padding: 1.5rem;
  }

  .profile-image {
    background: ${({ theme }) => theme.color.main.comment};
    border-radius: 50%;

    height: 100%;
    width: 100%;
  }
`

const HomeMain = styled.main``
const HomeFooter = styled.footer``

export { HomeContainer, HomeHeader, HomeMain, HomeFooter }
