import React from 'react'
import Footer from '../footer'
import Header from '../Header'

type Props = {
    children: React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout