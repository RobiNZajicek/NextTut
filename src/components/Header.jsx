import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import Nav from './Nav'
import MobileNav from './MobileNav'
const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white'>
        <div className=' mx-auto justify-between flex container'>

            <Link href='/'>
                <h1 className='text-4xl font-semibold'>
                    Nigus <span className='text-accent'>.</span>
                </h1>
            </Link>
            <div className='hidden xl:flex items-center gap-8'>
            <Nav/>
            <Link href='/contact'>
                <Button>Hire me</Button>
            </Link>
            </div>
            <div className='xl:hidden'>
                <MobileNav/>
            </div>
        </div>
    </header>
  )
}

export default Header
