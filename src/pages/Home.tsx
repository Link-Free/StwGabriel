import { } from 'styled-components'
import LinksLayout from '../components/LinksLayout'
import {
  HomeContainer,
  HomeHeader,
  HomeMain,
  HomeFooter,
} from '../styles/pages/home'

const fullName = 'Gabriel Silva'
const headline = 'Front-end Developer & UX Designer'

function Home() {
  return (
    <HomeContainer>
      <HomeHeader>
        <div className='profile-image-container'>
          <div className='profile-image'>
            <img src='/logo.webp' alt='' />
          </div>
        </div>
        <div className='profile-info'>
          <h1 className='profile-name'>{fullName}</h1>
          <span className='profile-headline'>{headline}</span>
        </div>
      </HomeHeader>

      <HomeMain>
        <LinksLayout />
      </HomeMain>

      <HomeFooter></HomeFooter>
    </HomeContainer>
  )
}

export default Home
