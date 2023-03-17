import React, { useState } from 'react'
import axios from 'axios'
const Proposal = () => {

    const [fileImg, setFileImg] = useState(null);
    const sendFileToIPFS = async (e) => {

        e.preventDefault()



        if (fileImg) {
            try {

                const formData = new FormData();
                formData.append("file", fileImg);

                const resFile = await axios({
                    method: "post",
                    url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                    data: formData,
                    headers: {
                        'pinata_api_key': `${process.env.REACT_APP_PINATA_API_KEY}`,
                        'pinata_secret_api_key': `${process.env.REACT_APP_PINATA_API_SECRET}`,
                        "Content-Type": "multipart/form-data"
                    },
                });

                const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
             console.log(ImgHash); 
//Take a look at your Pinata Pinned section, you will see a new file added to you list.   



            } catch (error) {
                console.log("Error sending File to IPFS: ")
                console.log(error)
            }
        }
    }

  return (
    <div>
        <form onSubmit={sendFileToIPFS}>
            {console.log(process.env.REACT_APP_PINATA_API_KEY)}
            <input type="file" onChange={(e) =>setFileImg(e.target.files[0])} required />
            <button type='submit' >Mint NFT</button>            
        </form>
    </div>
  )
}

export default Proposal