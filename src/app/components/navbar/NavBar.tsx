'use client'

import React, {useState} from 'react';
import { Close, Open, LinksTop, Links } from './Menu'; // Certifique-se de importar os ícones corretamente
import { SiNike, SiJordan } from "react-icons/si";
import { CiHeart } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import Shearch from './Shearch';


export function TopBar(){

  return (
    <div className='flex-between-center md:bg-secondary md:px-10 md:py-3'>
      <SiJordan className='hidden md:block size-5' />
      <ul className='hidden md:flex items-center gap-3 text-sm'>
            {LinksTop.map((link) =>(
              <li key={link.name}>
                <a href={link.name}>{link.name}</a>
              </li>
            ))}
          </ul>
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
        {children}
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
        <TopBar />
          {/*
            <ul className={`md:flex items-center absolute md:static  z-50 w-full transition-all duration-500 ease-in ${open ? '' : 'hidden'}`}>
              {Links.map((link) => (
                <li key={link.name}>
                  <a href={link.link} className='hover:text-primary/60 duration-300'>{link.name}</a>
                </li>
              ))}
            </ul>
            */}
        <MediumBar>
          <div>
            <ul className={`flex flex-col md:flex-row gap-11 md:text-base md text-2xl absolute md:static bg-white  h-full md:pt-0 md-px-8 top-0 pt-6 px-8  w-1/2 mt-14 z-50 transition-all duration-500 ease-in ${open ? '' : 'hidden'}`}>
              <li className={`md:hidden ${open ? '' : 'hidden'}`}>
                <button className="bg-black text-white py-3 text-base px-6 rounded-3xl">
                  Entrar
                </button>
              </li>
              {Links.map((link) => (
                <li key={link.name}>
                  <a href={link.link} className='hover:text-primary/60 duration-300'>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex-between-center gap-3'>
            <Shearch />
            <CiHeart className='size-6' />
            <BsBag className='size-5' />
              <div onClick={toggleMenu} className='md:hidden'>
              {open ? <Close /> : <Open />}
              </div>
          </div>
        </MediumBar>
      </nav>
    </header>
  );
}
