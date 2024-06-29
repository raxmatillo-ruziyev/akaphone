import React from 'react'
import './Card2.scss'
const Card2 = ({tell,name}) => {
  return (
    <div>
         <div className="card2">
              

           <div className='card2-box'>

           <img src={tell} alt="" width={"100px"} height={"70px"} />
                  <h2 className='card2-title'>{name}</h2>
           </div>
               
                  

              
            
      </div>
      
    </div>
  )
}

export default Card2
