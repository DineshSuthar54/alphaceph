//POPUP EXAMPLE


import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');
const Popup=()=>{
    const [modalIsOpen , setmodalIsOpen] = useState(false);

    return(
        <>
        <button onClick={()=>setmodalIsOpen(true)}>Open Modal</button>
        
        <div portalClassName="modal">
        
        <Modal 
         id="submitmodal" 
         isOpen={modalIsOpen} 
         onRequestClose={()=>setmodalIsOpen(false)}
        //  style={{
        //     backgroundColor: 'rgba(255, 255, 255, 0.75)'
        //     }}
         >
            <h2>Title</h2>
            <p>Paragraph</p>
            <button onClick={()=>setmodalIsOpen(false)} >Close</button>

        </Modal>
        </div>
        </>
    )

}

export default Popup;