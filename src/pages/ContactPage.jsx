import React from 'react'

const ContactPage = () => {
  return (
    <div className='h-screen'>
      <h1>Welcome</h1>
      <div>This message is for Phabio to access, fill the form below</div>
      <form action="" onSubmit="">
        <label htmlFor="matric"> Enter the developer's Matric Number</label>
        <input type="text" id='matric'  className='border' />
      </form>
      
    </div>
  )
}

export default ContactPage