import { useContext } from 'react'
import { ChangeThemeToggle } from '../components'
import { StoreContext } from '../store'

const Header = () => {
  const { state } = useContext(StoreContext)
  const reloadPage = () => {
    window.location.reload()
  }

  return (
    <header className="header-container">
      <nav className="header__nav">
        <a
          href="#x"
          className="header-title decoration-none"
          onClick={reloadPage}
        >
          <h1
            className={`header-title decoration-none ${
              state.theme === 'light' ? 'text-black' : 'text-white'
            }`}
            onClick={reloadPage}
            aria-hidden="true"
          >
            Book
            <span className="text-red">store</span>
          </h1>
        </a>
        <div className="flex_row">
          <ChangeThemeToggle />
          <a
            className="header-userinfo decoration-none"
            href="https://github.com/HaNgocHieu0301"
          >
            <img
              className="header-userinfo__avatar"
              src="https://avatars.githubusercontent.com/u/55908408?v=4"
              alt=""
            />
            <p
              className={`header-userinfo__name ${
                state.theme === 'light' ? 'text-black' : 'text-white'
              } font-bold`}
            >
              HieuHN0301
            </p>
          </a>
        </div>
      </nav>
      <hr />
    </header>
  )
}

export default Header
