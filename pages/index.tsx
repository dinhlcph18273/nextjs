import Footer from '@/component/footer'
import Header from '@/component/header'
import type { NextPage } from 'next'
import Link from 'next/link'


const Home: NextPage = () => {
  return (
   <div>
      <Header/>
      <Link href={`/`}>
            <a className='home'>Home Page</a>    
        </Link>    
        <Link href={`/about`}>About Page</Link>
        <div>
          Home Page
        </div>
        <Footer/>
   </div>
  )
}

export default Home
