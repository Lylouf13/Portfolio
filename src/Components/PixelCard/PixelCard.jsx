import React from 'react'
import './pixelCard.scss'

export default function PixelCard(data) {

  const handleKeyDown = (e) =>{
    if(e.key==="Enter"){
      data.setViewer(data.image, data.title)
    }
  }

  return (
    // Cards get "pixelGrid__type-id" as an extra class for grid construction purposes, which is done in pixelGrid.scss
    // Also opens ImageViewer and sends required data   
    <div tabIndex="0" onKeyDown={handleKeyDown} draggable='false' className={`pixelCard pixelGrid__${data.type}-${data.id} ${data.usable ? 'pixelCard-disabled':''}`}>
        <h2 draggable='false' className='pixelCard__title'>{data.title}</h2>
        <img onClick={()=>data.setViewer(data.image, data.title)} draggable='false' className='pixelCard__image' src={data.image} alt="" />
    </div>
  )
}
