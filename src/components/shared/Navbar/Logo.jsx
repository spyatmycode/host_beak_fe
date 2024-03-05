import React from 'react'
import { bluechevronright, hostbeaklogo } from '../../../assets/shared/shared'


const Logo = () => {
  return (
    <div className='flex items-center gap-10 bg-white rounded-3xl shadow-lg px-5 py-3'>

        <img src={hostbeaklogo} className='w-[60px] h-[60px]' alt="host_beak_logo" />
        <p className='text-[#3A3A3A] font-gilroy text-[30px]'>
            HostBeak
        </p>
        <img src={bluechevronright} alt="chevron right" />
      
    </div>
  )
}

export default Logo
