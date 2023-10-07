'use client'

import { useContext } from 'react'
import { StoreContext } from '../store'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  const { state } = useContext(StoreContext)
  return (
    <div
      className={
        state.theme === 'dark' ? 'h-[100vh] bg-black/80' : 'h-[100vh] bg-white'
      }
    >
      <Header />
      {children}
      <Footer />
    </div>
  )
}
