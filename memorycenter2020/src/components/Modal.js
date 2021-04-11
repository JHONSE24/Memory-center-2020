import React from 'react'
// import './Modal.css'

const Modal = ({ isOpen, closeModal, title, text,img }) => {

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className={`modal ${isOpen && 'modal-open'}`} onClick={closeModal}>
            <div className="modal__dialog" onClick={handleModalDialogClick}>
                <button onClick={closeModal}>
                    X
                </button>
                <h1>{ title }</h1> 
                <p>{ text }</p> 
                <img src={img} alt="ft"/>

            </div>
        </div>
    )
}

export default Modal
