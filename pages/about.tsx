import Footer from '@/component/footer';
import Header from '@/component/Header';
import Link from 'next/link';
import React from 'react';

export interface AboutProps {
}

export default function About (props: AboutProps) {
  return (
    <div>
      <Header/>
      <Link href={`/`}>
            <a className='home'>Home Page</a>    
        </Link>    
        <Link href={`/about`}>About Page</Link>
        <div>
          About Page
        </div>
        <Footer/>
    </div>
  );
}
