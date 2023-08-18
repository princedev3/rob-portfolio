import React from 'react'
import SocailMedialIcon from '../component/SocailMedialIcon'
const Footer = () => {
  return (
    <footer className='h-40  bg-red pt-5'>
        <div className='w-5/8 mx-auto'>
           <SocailMedialIcon/>

           <div className='md:flex justify-center md:justify-between text-center'>
            <p className='font-playfair font-semibold text-2xl text-yellow'>JANE ESPER</p>
            <p className='font-platfair text-md text-yellow'> &copy;2023 ESPER.</p>
           </div>
        </div>
    </footer>
  )
}
//{}[]
export default Footer