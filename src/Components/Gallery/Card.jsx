import React, { useState } from 'react'

const Card = (prosp) => {
const [popup, setPopup] = useState(false)
    const toggleModal = () => {
        setPopup(!popup);
}
  return (
    <>
      <div className="items">
        <div className="img">
          <img src={prosp.images} alt="" />
          <i className="fas fa-image" onClick={toggleModal}></i>
        </div>
        <div className="title">
          <h3>{prosp.title}</h3>
        </div>
      </div>

      {popup && (
        <div className="popup">
          <div className="hide">
            <div className="popup-content">
              <button onClick={toggleModal}>Close</button>
              <img src={prosp.images} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Card