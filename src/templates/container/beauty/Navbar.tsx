import React from 'react'

const MobileAppBar : React.FC = () => {
   return <div className='md:hidden'>MobileAppBar</div>;
 };

 const DesktopAppBar = () => {
   return <div className='hidden md:block'>
      <h1 className='h1'>faqih</h1>
   </div>;
 }

const Navbar = () => {

  return (
    <div
    className='w-full md:w-[100px] h-[50px] md:h-screen bg-primary text-white flex justify-center items-center'
    ><MobileAppBar /><DesktopAppBar /></div>
  )
}

export default Navbar