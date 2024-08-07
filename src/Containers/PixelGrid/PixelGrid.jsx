import React from 'react'
import PixelCard from '../../Components/PixelCard/PixelCard'
import data from '../../Datas/pixelArt.json'

import './pixelGrid.scss'


export default function PixelGrid(set) {
    const used = (data.find((e) => e.type === set.type))
   return (     
     <ul className='pixelGrid'>
         {used.elements.map((art) =>
             <PixelCard 
             usable={set.usable}
             setViewer={set.setViewer}
             id={art.id} 
             type={set.type}
             key={`pixelArt${art.id}_${art.title}`} 
             title={art.title} 
             image={art.image} 
             description={art.description} 
             link={art.link}
             />
             )
         }   
     </ul>  
     )
 }
 
 
