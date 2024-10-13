import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'

export const TopicsList = () => {
  return (
  <><div className='bg-white flex font-medium font justify-between max-w-[400px] mx-auto p-2 rounded-sm my-2 shadow-sm'>
  <div>
    <h2 className='text-xl'>Topic title</h2>
    <div> topic desce</div>
  </div> 
  <div className='flex justify-center items-start border'>
    <RemoveBtn/>
    <Link href="#">
    <HiPencilAlt/>
</Link>
</div>
  </div>


  </>
  )
}
