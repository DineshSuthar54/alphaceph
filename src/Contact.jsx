import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');
const Contact = (props)=>{
    const [modalIsOpen , setmodalIsOpen] = useState(false);

    const [data, setData] = useState({
        fullname : '',
        email : '',
        number : '',
        textarea : '' ,
    })

    const inputEvent = (event)=>{
        const {name,value} = event.target;

        setData ((preVal)=>{
            return{
            ...preVal,
            [name] : value,
        }})
        
    }

    const formSubmit =(obj)=>{
        
        setmodalIsOpen(true);
        obj.preventDefault();
        //alert(`${data.fullname}'s email is ${data.email} and his number is ${data.number} and he want's to say ${data.textarea}`)
    }
    return(
        <>
        <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
        </div>

        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={formSubmit}>
                    <div className="form-group ">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" 
                        id="name" 
                        name="fullname" value={data.fullname} onChange={inputEvent}
                        placeholder="Enter your name"/>

                        
                    </div>
                    
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" className="form-control" 
                        id="email" 
                        name="email" value={data.email} onChange={inputEvent}
                        placeholder="Enter your email"/>
                    </div>

                    <div className="form-group">
                        <label for="number">Phone</label>
                        <input type="number" className="form-control" 
                        id="phone" 
                        name="number" value={data.number} onChange={inputEvent}
                        placeholder="Enter your number"/>
                    </div>

                    <div className="form-group">
                        <label for="textarea">Feedback</label>
                        <textarea className="form-control" 
                        id="textarea" rows="3" 
                        name="textarea" value={data.textarea} onChange={inputEvent}
                        placeholder="Write here..."></textarea>
                    </div>

                    <br/>
                    <div className="col-12">
                        <button type="submit" className="btn btn-outline-primary ">Submit</button>
                    </div>


                <div portalClassName="modal">
                    <Modal 
                        
                        id="submitmodal" 
                        isOpen={modalIsOpen} 
                        onRequestClose={()=>setmodalIsOpen(false)}
                        style={{
                            fontSize:'12px'
                            }}
                     >
                         <h2>Thank You, <i style={{color:'blue' , fontSize:'24px'}}>{data.fullname}</i></h2>
                         <p>We will look at it.</p>
                        
                        
                        <button onClick={()=>setmodalIsOpen(false)} type="button" className="close" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </Modal>
                </div>
                
                </form>
                
                
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact;