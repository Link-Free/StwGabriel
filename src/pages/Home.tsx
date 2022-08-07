import {} from 'styled-components'
import {
  HomeContainer,
  HomeHeader,
  HomeMain,
  HomeFooter,
} from '../styles/pages/home'

function Home() {
  return (
    <HomeContainer>
      <HomeHeader>
        <div className="profile-image-container">
          <div className="profile-image"></div>
        </div>
        <div className="profile-info">
          <h1 className="profile-name"></h1>
          <span className="profile-description"></span>
        </div>
      </HomeHeader>

      <HomeMain></HomeMain>

      <HomeFooter></HomeFooter>
    </HomeContainer>
  )
}

export default Home
