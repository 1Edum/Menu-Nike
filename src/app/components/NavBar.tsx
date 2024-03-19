import React from 'react'
import { SiNike, SiJordan } from "react-icons/si";

export function TopBar(){
    return(
        <div className='flex justify-between items-center'>
            <SiJordan className='hidden md:block size-5' />
            <ul className='flex gap-5 text-sm'>
                <li>Nike Jornal</li>|
                <li>Ajuda</li>|
                <li>Junte-se a nós</li>|
                <li>Entre</li>
            </ul>
        </div>
    )
}

export default function NavBar() {
  return (
    <header>
        <nav>
            <TopBar />
            <h1 className='font-nike'>
                Nike
            </h1>
        </nav>
    </header>
  )
}
