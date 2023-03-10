import React from 'react'
import "../components/styles/CreatePost.css"
const CreatePost = () => {

  const handleCreateSubmit = (event) => {
    event.preventDefault();
    alert("Submited")
  }
  return (
    <div id='main'>
      <form id='container' onSubmit={handleCreateSubmit}>
          <h2>Create Post</h2>
          <input type="text" placeholder='Topic'/>
          <select id='category' placeholder='Category'>
            <option className='black' selected value="abc">abc</option>
            <option className='black' value="abcd">abcd</option>
            <option className='black' value="abssc">abcss</option>
            <option className='black' value="ggg">ggg</option>
            <option className='black' value="tgb">tgb</option>
          </select>

          <input type="number" placeholder='Hours'/>
          <input type="number" placeholder='Minutes'/>

          <button id='create-btn' type='submit'>POST</button>
          
      </form>
    </div>
  )
}

export default CreatePost