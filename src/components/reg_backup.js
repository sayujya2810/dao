import React, {useState } from 'react'
import Axios from 'axios'
import "./styles/Register.css"
import {MdOutlineCancel} from 'react-icons/md'




const Register = (props) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [phno, setPhno] = useState("")

    // const userAddress = props.userAddress_inner2
    // const [modalShow, setModalShow] = React.useState(false);

    

    // const submitData = (e) => {
    //     e.preventDefault()
    //     var data = {
    //       address: address,
    //       email: email,
    //       phno: phno
    //     }
    // }

    
    const addUser = (event) => {
      event.preventDefault()
      Axios.post('http://localhost:3002/adduser', {address:address, email: email})
        .then(() => {
          alert("Successfully Whitelisted")
        })
        .catch(() => {
          alert("Error in Whitelisting")
        })
    }


  return (
        <div style={{display: "flex",justifyContent:"center", alignItems:"center"}}>
          
          <div className='reg-div' style={{zIndex:11, borderRadius:"5px", width:"63%", margin:"5rem", padding:"2rem" ,display: "flex",justifyContent:"center", alignItems:"center"}}>
            <form id="wl-form" style={{display:"flex", borderRadius:"10px", flexDirection:"column", alignItems:"center", justifyContent:"center"}} >
              <h2 style={{color:"black",textAlign:"center"}}>Get yourself Whitelisted!</h2>
              {/* <input onChange={e => setAddress(e.target.value)} style={{border:"black 1px solid", borderRadius:"6px",color:"black", margin:"1rem", padding:".5rem"}} placeholder="address" id='blockchain-address' type="text" /> */}
              <input onChange={e => setEmail(e.target.value)} style={{border:"black 1px solid", borderRadius:"6px",color:"black", margin:"1rem", padding:".5rem", width:"100%"}} id='user-email' type="email" placeholder='Email (i.e chandlerbing007@gmail.com)' required />
              <input onChange={e => setAddress(e.target.value)} style={{border:"black 1px solid", borderRadius:"6px",color:"black", margin:"1rem", padding:".5rem", width:"100%"}} id='phno' type="text" placeholder='Wallet Address (i.e 0x6830973f43r34gf5hyY)' required />
              <p style={{textAlign:"center", color:"rgb(10, 10, 10)"}}>*Metamask, Coinbase or TrustWallet recommended.</p>
              <button className='hoverBtn' onClick={addUser} style={{}} >Register</button>
            </form>
          </div>
        </div>
  )
}


export default Register