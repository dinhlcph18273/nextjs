import Link from 'next/link'
import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div>
        <Link href={`/`}>
            <a className='home'>Home Page</a>    
        </Link>    
        <Link href={`/about`}>About Page</Link>
       <div>
            About Page
       </div>
       
    </div>
  )
}

export default About