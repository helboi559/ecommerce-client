import React from 'react'

import "./ModalProductUser.css"

const ModalUserProfile = (props) => {
  if(!props.show) {
    return null
  }
  
  return (
    <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
                <h3 className="modal-title">{props.title}</h3>
            </div>
            <div className="modal-body">{props.children}</div>
            <div className="modal-footer">
                <button className="button" onClick={(props.onClose)}>Close</button>
                <button className="button" onClick={()=> {
                  props.putUpdatedProfile()
                  props.navigate('/products')
                }}>Update Profile</button>
            </div>

        </div>
    </div>
  )
}

export default ModalUserProfile