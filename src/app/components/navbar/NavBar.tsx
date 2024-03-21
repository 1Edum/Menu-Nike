'use client'

import React, {useState} from 'react';
import { Close, Open, Links } from './Menu'; // Certifique-se de importar os ícones corretamente
import { SiNike, SiJordan } from "react-icons/si";
import { CiSearch, CiHeart } from "react-icons/ci";
import { BsBag } from "react-icons/bs";


export function TopBar({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex-between-center bg-secondary px-10 py-3'>
      <SiJordan className='hidden md:block size-5' />
      {children}
    </div>
  );
}

export function MediumBar({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex-between-center px-10 py-3'>
      <SiNike className='size-14' />
      <div className='flex-between-center gap-3'>
        <div className='relative flex items-center'>
          <CiSearch className='absolute ml-1' />
          <input type="text" placeholder='Buscar' className='md:bg-secondary rounded-xl w-40 py-2 pl-6' />
        </div>
        {children}
        <CiHeart className='size-6' />
        <BsBag className='size-5' />
      </div>
    </div>
  );
}

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
    console.log("Menu hamburguer clicado!"); // Adicionando console.log quando o menu hamburguer é clicado
  };

  return (
    <header>
      <nav>
        <TopBar>
          <ul className={`md:flex md:justify-around absolute items-center p-2 py-2 ${open ? '' : 'hidden'}`}>
            {Links.map((link) => (
              <li key={link.name}>
                <a href={link.link} className='hover:text-primary/60 duration-300'>{link.name}</a>
              </li>
            ))}
          </ul>
        </TopBar>
        <MediumBar>
          <div onClick={toggleMenu} className='md:hidden'>
            {open ? <Close /> : <Open />}
          </div>
        </MediumBar>
      </nav>
    </header>
  );
}
