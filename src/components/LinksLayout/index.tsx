import { useState } from 'react'
import { v4 as uuid } from 'uuid'

// Assets
import gridIcon from '../../assets/icons/layout-grid.svg'
import rowIcon from '../../assets/icons/layout-row.svg'

// Components
import LinkItem from '../LinkItem'

// Local styles
import {
  LinksLayoutContainer,
  LinksLayoutList,
  LinksLayoutMenu,
} from './LinksLayoutStyles'

function LinksLayout() {
  const links = [
    {
      id: uuid(),
      to: 'https://linkedin.com/in/stwgabriel',
      iconPath: '/social-icons/linkedin.svg',
      title: 'Linkedin',
      linkColor: '#0A66C2',
      labeled: true,
    },
    {
      id: uuid(),
      to: 'https://github.com/stwgabriel',
      iconPath: '/social-icons/github.svg',
      title: 'Github',
      linkColor: '#381B6E',
      labeled: true,
    },
    {
      id: uuid(),
      to: 'https://dribbble.com/stwGabriel',
      iconPath: '/social-icons/dribble.svg',
      title: 'Dribbble',
      linkColor: '#ea4c89',
      labeled: true,
    },
    {
      id: uuid(),
      to: 'mailto:talktogabriel@proton.me',
      iconPath: '/social-icons/mail.svg',
      title: 'Email',
      linkColor: '#7970A9',
      labeled: true,
    },
    {
      id: uuid(),
      to: 'https://stwgabriel.medium.com/',
      iconPath: '/social-icons/me.svg',
      title: 'Blog',
      linkColor: '#454158',
      labeled: true,
    },
    {
      id: uuid(),
      to: 'https://open.spotify.com/user/1z6i9ho7cwzzl060u44lmm042',
      iconPath: '/social-icons/spotify.svg',
      title: 'Spotify',
      linkColor: '#1ED760',
      labeled: true,
    },
    // {
    //   id: uuid(),
    //   to: 'https://youtube.com/c/',
    //   iconPath: '/social-icons/youtube.svg',
    //   title: 'Youtube',
    //   linkColor: '#CA0000',
    //   labeled: true,
    // },

    {
      id: uuid(),
      to: 'https://instagram.com/stwgabriel',
      iconPath: '/social-icons/instagram.svg',
      title: 'Instagram',
      linkColor: 'linear-gradient(60.86deg, #FA6E3B 1.86%, #F43F60 49.98%, #8134AF 100%)',
      labeled: true,
    },
    {
      id: uuid(),
      to: 'https://www.paypal.com/donate/?hosted_button_id=AJLBEFPNTFYQ8',
      iconPath: '/social-icons/dollar-sign.svg',
      title: 'Donate',
      linkColor: '#9580FF',
      labeled: true,
    },

  ]

  const [linksLayout, setLinksLayout] = useState<'grid' | 'row'>('grid')

  return (
    <LinksLayoutContainer>
      <LinksLayoutMenu>
        <button
          className={`${linksLayout === 'grid' && 'active'}`}
          onClick={() => setLinksLayout('grid')}
        >
          <img src={gridIcon} alt='grid layout' />
        </button>
        <button
          className={`${linksLayout === 'row' && 'active'}`}
          onClick={() => setLinksLayout('row')}
        >
          <img src={rowIcon} alt='row layout' />
        </button>
      </LinksLayoutMenu>

      <LinksLayoutList layout={linksLayout}>
        {links.map(
          ({ id, title, to, iconPath, linkColor, labeled = false }) => (
            <LinkItem
              linkStyle={linksLayout}
              key={id}
              title={title}
              color={linkColor}
              to={to}
              iconPath={iconPath}
              labeled={labeled}
            />
          ),
        )}
      </LinksLayoutList>
    </LinksLayoutContainer>
  )
}

export default LinksLayout
