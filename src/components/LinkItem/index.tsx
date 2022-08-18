import { LinkItemContainer } from './LinkItemStyles'

// Local styles
import { LinksLayout } from '../LinksLayout/LinksLayoutStyles'

type LinkItemProps = {
  title: string
  to: string
  iconPath: string
  color: string
  linkStyle: LinksLayout

  labeled?: boolean
  additionalButton?: string
}

function LinkItem({
  to,
  title,
  iconPath,
  color,
  linkStyle,
  labeled = false,
  additionalButton,
}: LinkItemProps) {
  return (
    <LinkItemContainer
      title={'Go to ' + title + ' page'}
      color={color}
      linkStyle={linkStyle}
    >
      <a href={to}>
        {Boolean(iconPath) && <img src={iconPath} alt={title.toLowerCase() + '-icon'} />}
        {labeled && <span>{title}</span>}
      </a>

      {additionalButton && (
        <button className='additional-button'>
          a
        </button>
      )}
    </LinkItemContainer>
  )
}

export default LinkItem
