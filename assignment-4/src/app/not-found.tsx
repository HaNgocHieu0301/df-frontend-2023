'use client'

import Link from 'next/link'
import React, { useContext } from 'react'
import Layout from '../sections/Layout'
import { StoreContext } from '../store'

const Custom404 = () => {
  const { state } = useContext(StoreContext)
  const themeText: string =
    state.theme === 'light' ? 'text-black' : 'text-white'
  return (
    <Layout>
      <div
        className={`w-full h-[100vh] flex flex-col justify-center items-center ${themeText}`}
      >
        <p
          className={`text-center text-9xl font-bold first-letter ${themeText}`}
        >
          404
        </p>
        <p className={`text-center text-3xl ${themeText}`}>Page not found</p>
        <Link
          href="/"
          className="my-5 text-red-700 cursor-pointer hover:opacity-50"
        >
          &lt; Back to home page
        </Link>
      </div>
    </Layout>
  )
}

export default Custom404
