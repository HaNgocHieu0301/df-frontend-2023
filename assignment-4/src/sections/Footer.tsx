'use client'

import { useContext } from 'react'
import { StoreContext } from '../store'

const Footer = () => {
  const { state } = useContext(StoreContext)
  return (
    <footer className="flex justify-center p-4">
      <div
        className={`flex justify-center items-center max-w-fit ${
          state.theme === 'light' ? 'text-black' : 'text-white'
        }`}
      >
        <p>&copy; 2023 || Made with HieuHN0301 ||</p>
        <a href="https://github.com/HaNgocHieu0301/df-frontend-2023/tree/main/assignment-4">
          Source code
        </a>
      </div>
    </footer>
  )
}

export default Footer
