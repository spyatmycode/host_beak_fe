import React from 'react'

const LinkIcon = ({icon, activeLink, parentLink, show, icon_active}) => {
  return (
   (activeLink===parentLink && show) ? <span className='active_link_icon'>
        <img src={icon_active} alt=""className="w-[34px] h-[34px]" data-link={parentLink} />
    </span>: <img src={icon} alt="" className="w-[34px] h-[34px] " data-link={parentLink} />
  )
}

export default LinkIcon
