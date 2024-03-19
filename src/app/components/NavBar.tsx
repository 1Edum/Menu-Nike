import React from 'react'
// Icons
import { SiNike, SiJordan } from "react-icons/si";
import { CiSearch, CiHeart  } from "react-icons/ci";
import { BsBag } from "react-icons/bs";

export function TopBar(){
    return(
        <div className='flex-between-center bg-secondary'>
            <SiJordan className='hidden md:block size-5' />
            <ul className='flex gap-3 text-xs'>
                <li>Nike Jornal</li>|
                <li>Ajuda</li>|
                <li>Junte-se a nós</li>|
                <li>Entre</li>
            </ul>
        </div>
    )
}
export function MediumBar(){
    return(
        <div className='flex-between-center'>
            <SiNike className='size-14'/>
            <ul className='flex gap-3'>
                <li>Lançamentos</li>
                <li>Ofertas</li>
                <li>Masculino</li>
                <li>Feminino</li>
                <li>infantil</li>
                <li>SNKRS</li>
            </ul>
            <div className='flex-between-center gap-3'>
                <div className='relative flex items-center'>
                <CiSearch className='absolute ml-1'/>
                <input type="text" placeholder='Buscar' className='bg-secondary rounded-xl w-40 py-2 pl-6' />
                </div>
                <CiHeart className='size-6'/>
                <BsBag className='size-5'/>
            </div>
        </div>
    )
}

export default function NavBar() {
  return (
    <header>
        <nav>
            <TopBar />
            <MediumBar />
        </nav>
    </header>
  )
}
