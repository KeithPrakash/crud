import Link from 'next/link'
import React from 'react'

export const Nav = () => {
  return (
       <nav className='bg-black text-white float-left font-semibold w-full h-24 border flex justify-center items-center gap-10  '>
         <Link href="/" > Home</Link>         
         <Link href="/addTopic" >Add post</Link>         
       </nav>
  )
}
