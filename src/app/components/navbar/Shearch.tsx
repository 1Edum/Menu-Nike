import React from 'react'
import { CiSearch} from "react-icons/ci";

function Shearch() {
  return (
    <div className='relative md:flex items-center hidden'>
          <CiSearch className='absolute ml-1' />
          <input type="text" placeholder='Buscar' className='md:bg-secondary rounded-xl w-40 py-2 pl-6' />
    </div>
  )
}

export default Shearch