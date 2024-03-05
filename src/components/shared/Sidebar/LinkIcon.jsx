import React from 'react'

const LinkIcon = ({icon, activeLink, parentLink, show}) => {
  return (
   (activeLink===parentLink && show) ? <span className='active_link_icon'>
        <img src={icon} alt=""className="w-[34px] h-[34px]" data-link={parentLink} />
    </span>: <img src={icon} alt="" className="w-[34px] h-[34px]" />
  )
}

export default LinkIcon
