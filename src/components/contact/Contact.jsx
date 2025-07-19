import React from 'react'
import '../contact/Contact.css'
import msg_icon from '../../assets/msg_icon.png'
import mail_icon from '../../assets/mail_icon.png'
import phone_icon from '../../assets/phone_icon.png'
import location_icon from '../../assets/location_icon.png'
import white_arrow from "../../assets/white_arrow.png"
const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1fa3f2a0-b4d7-4505-9491-6b62e7b60225");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p> We'd love to hear from you! Whether you have a question about our services,
          need assistance, or just want to give feedback, feel free to reach out.
          Our team will get back to you as soon as possible.</p>
        <ul>
  <li><img src={mail_icon} alt="" /> Contact@edu.care</li>
  <li><img src={phone_icon} alt="" /> +1 123-456-7890</li>
  <li><img src={location_icon} alt="" /> 77 Massachusetts Ave, Cambridge<br/>MA 0219, United States</li>
</ul>
 </div>
 <div className='contact-col'>
     <form onSubmit={onSubmit}>
        <label>Your name</label>
        <input type="text" name='name' placeholder='Enter your name'
        required/>
        <label>Phone Number</label>
        <input type="tel" name='phone' placeholder='Enter your mobile number'
        required/>
        <label>Write your messages here</label>
        <textarea name="message" rows="6" placeholder='Enter your message'
        required></textarea>
        <button type="submit" className='btn dar-btn'>Submit now
            <img src={white_arrow} alt="" />
        </button>
     </form>
     <span>{result}</span>
 </div>
    </div>
  )
}

export default Contact
