import React from 'react'
import { bluechevronright, hostbeaklogo } from '../../../assets/shared/shared'


const Logo = () => {
  return (
    <div className='flex items-center lg:gap-10 gap-5 bg-white rounded-3xl logo px-5 py-3'>

        <img src={hostbeaklogo} className='lg:w-[60px] lg:h-[60px] w-[20px] h-[20px]' alt="host_beak_logo" />
        <p className='text-[#3A3A3A] font-gilroy lg:text-[30px] text-base'>
            HostBeak
        </p>
        <img src={bluechevronright} alt="chevron right" />
      
    </div>
  )
}

export default Logo
