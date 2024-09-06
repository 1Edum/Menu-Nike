export const LinksTop =[
      {name:"Nike Jornal",link:"/"},

      {name:"Ajuda",link:"/"},

      {name:"Junte-se a nós",link:"/"},

      {name:"Entre",link:"/"},
  ];

  export const Links =[
    {name: "Lançamentos", link:"/"},
    {name: "Ofertas", link:"/"},
    {name: "Masculino", link:"/"},
    {name: "Feminino", link:"/"},
    {name: "Infantil", link:"/"},
    {name: "SNKRS", link:"/"},
  ]


export function Open() {
  return (
    <div className='flex flex-col gap-[6px]'>
      <div className='w-5 h-[2px] rounded-md bg-primary'></div>
      <div className='w-5 h-[2px] rounded-md bg-primary'></div>
      <div className='w-5 h-[2px] rounded-md bg-primary'></div>
    </div>
  )
}
export function Close(){
  return (
    <div className=' w-4 h-4 relative pt-[6px]'>
  <div className='absolute w-full h-[3px] rounded-md bg-primary transform rotate-45'></div>
  <div className='absolute w-full h-[3px] rounded-md bg-primary transform -rotate-45'></div>
</div>

  )
}
 


