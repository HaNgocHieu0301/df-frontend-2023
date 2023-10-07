'use client'

import Image from 'next/image'
import { ChangeThemeToggle } from '../components'

const Header = () => {
  return (
    <header className="w-full px-[20px]">
      <nav className="flex items-center justify-between">
        <h1
          className="my-3 decoration-none font-bold text-3xl cursor-pointer dark:text-white"
          onClick={() => window.location.reload()}
          aria-hidden="true"
        >
          Book<span className="text-red-600">store</span>
        </h1>
        <div className="flex flex-row gap-4 items-center">
          <ChangeThemeToggle />
          <a
            className="flex items-center decoration-none"
            href="https://github.com/HaNgocHieu0301"
          >
            <Image
              className="px-3 w-4 h-4"
              src="https://avatars.githubusercontent.com/u/55908408?v=4"
              alt=""
              width={32}
              height={32}
            />
            <p className="font-bold text-red-900 dark:text-white">HieuHN0301</p>
          </a>
        </div>
      </nav>
      <hr />
    </header>
  )
}

export default Header
