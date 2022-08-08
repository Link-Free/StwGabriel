import styled from 'styled-components'

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  padding: 8rem 0 2rem;
`

const HomeHeader = styled.div`
  .profile-image-container {
    background: ${({ theme }) => theme.color.main.selection};
    border-radius: 50%;

    height: 17rem;
    width: 17rem;

    padding: 1.5rem;
    margin: 0 auto 2.5rem;
  }

  .profile-image {
    background: ${({ theme }) => theme.color.main.comment};
    border-radius: 50%;

    height: 100%;
    width: 100%;

    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .profile-info {
    text-align: center;

    .profile-name {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }
    .profile-headline {
      color: ${({ theme }) => theme.color.gray.bright};
      font-size: 1.8rem;
      font-weight: 500;
    }
  }
`
const HomeMain = styled.main`
  width: 100%;
`
const HomeFooter = styled.footer`
`

export { HomeContainer, HomeHeader, HomeMain, HomeFooter }
