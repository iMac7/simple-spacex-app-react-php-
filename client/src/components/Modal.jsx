import React from 'react'
import '../styles/modal.css'

function Modal({data, toggleModal}) {
  return (
    <div className='modal' onClick={toggleModal}> 
        <div className="details" onClick={(e) => e.stopPropagation() }>
            {/* {console.log('data', data)} */}
            <p>{data.type}</p>
            <p>{data.land_landings}</p>
            <p>{data.status}</p>
        </div>
    </div>
  )
}

export default Modal