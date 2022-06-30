import Footer from '@/component/footer'
import Header from '@/component/Header'
import type { NextPage } from 'next'
import Link from 'next/link'


const Home: NextPage = () => {
  return (
   <div>
      <Link href={`/`}>
            <a className='home'>Home Page</a>    
        </Link>    
        <Link href={`/about`}>About Page</Link>
        <div>
          Home Page
        </div>
   </div>
  )
}

export default Home
