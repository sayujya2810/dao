import React, { useState } from 'react'
// import Modal from 'react-modal'
// import { Button, Modal } from 'react-bootstrap';
// import Register from "./Register";
import Button from '@mui/material/Button';
import { Box, Modal, Typography } from '@mui/material';
import {MdOutlineCancel} from 'react-icons/md'
// import 'bootstrap/dist/css/bootstrap.min.css';


const ModalComp = (props) => {

    // const [showModal, setShowModal] = useState(false)
    // const [show, setShow] = useState(false);

    const [open, setOpen] = useState(false);
    const userAddress = props.userAddress_inner;
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

//   const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

  return (
    <>
    <div className="modal-main" style={{ cursor:"default"}} >
        {/* <button style={{backgroundColor:"blue", padding:"1rem"}}>Show</button> */}
        {/* <Button style={{backgroundColor:"#ab203d", border:"none", padding:"1.5rem 3rem", fontSize:"40px"}} onClick={() => setShow(true)} >Verify</Button> */}

      {/* <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        style={{backgroundColor:"rgba(0,0,0,0.3)", backdropFilter:"blur(7px)"}}
      >
        <Modal.Header closeButton  >
          <Modal.Title style={{color:"black"}} id="example-custom-modal-styling-title" >
             Get yourself Whitelisted! 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Register />

        </Modal.Body>
      </Modal> */}


      <Button style={{backgroundColor:"#ab203d", color:"white", border:"none", padding:"1.5rem 3rem", fontSize:"35px"}} onClick={handleOpen}>Whitelist</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box> */}
        {/* <div> */}
        {/* </div> */}
        <div>
          <p onClick={handleClose} style={{position:"absolute",right:"1rem", top:"1rem"}} ><MdOutlineCancel size={25} /></p>
        
        {/* <Register userAddress_inner2={userAddress} /> */}
        </div>
      </Modal>



    </div>
        
    </>
  )
}


export default ModalComp