import React from 'react'

function HeaderItem({ title, imgUrl }) {
  return (
    <div className="flex p-1 flex-row items-center cursor-pointer hover:bg-white hover:text-black hover:rounded-lg hover:p-1">
    <img src={imgUrl} className="w-6 h-6 pr-2" />
    <span>{title}</span>
  </div>
  )
}

export default HeaderItem