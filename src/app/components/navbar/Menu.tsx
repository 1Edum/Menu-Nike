export function Open() {
  return (
    <div className='flex flex-col gap-[2px]'>
      <div className='w-4 h-[3px] rounded-md bg-primary'></div>
      <div className='w-4 h-[3px] rounded-md bg-primary'></div>
      <div className='w-4 h-[3px] rounded-md bg-primary'></div>
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


 export const Links =[
      {name:"Nike Jornal",link:"/"},

      {name:"Ajuda",link:"/"},

      {name:"Junte-se a nós",link:"/"},

      {name:"Entre",link:"/"},
    ];
 


