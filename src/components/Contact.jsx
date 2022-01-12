import { useState } from "react"
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import{ init } from 'emailjs-com';
init("user_I7b36wfw2IGJUhdcWHN2q");




export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,  
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
    
  };





  const handleSubmit = async (e) => {
    e.preventDefault()
    const templateParams = {
      name,
      email,
      message
    }
    await emailjs.send(
      "service_sd6rdn4",
      "template_ocucfna",
      templateParams,
    );
    toastifySuccess();
    setName('')
    setEmail('')
    setMessage('')
    console.log(templateParams)
  }

  return (
    <section id="contact">
      <div className="contact_container">
        <h1>Contact Me</h1>
        <h3>Feel free to <a href="mailto:kim.capilla.gabbert@gmail.com" target="_blank" rel="noreferrer">email me</a>, or send me a message below. Thank you!</h3>
        <form onSubmit={handleSubmit}>
          <label>Name </label> <br />
          <input
            type="text"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
          /> <br />
          <label>Email </label> <br />
          <input
            type="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          /> <br />
          <label>Message </label> <br />
          <textarea
            value={message}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
          /> <br />
          <button className="submitform">Submit</button>
        </form>
        <ToastContainer />
      </div>
      </section>
  )
}
