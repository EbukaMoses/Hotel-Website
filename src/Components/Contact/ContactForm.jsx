import React, { useState } from "react";
import "./Contact.css";
import { useLocation } from 'react-router-dom';

const ContactForm = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const [allValue, setAllValue] = useState([]);
  const formSubmit = (e) => {
      e.preventDefault();
    const newValue = { fname, lname, phone, email, subject, company, message };
    setAllValue([...allValue, newValue]);
    
        setFname("");
        setLname("");
        setPhone("");
        setEmail("");
        setSubject("");
        setCompany("");
        setMessage("");
      };
  return (
    <>
      <section className="contact mtop">
        <div className="container flex">
          <div className="main-content">
            <h2>Contact Form</h2>
            <p>Fill out the form below, we will get back to you soo</p>

            <form onSubmit={formSubmit}>
              <div className="grid1">
                <div className="input">
                  <span>
                    First Name <label>*</label>
                  </span>
                  <input
                    type="text"
                    name="fname"
                    onChange={(e) => setFname(e.target.value)}
                    value={fname}
                    placeholder="Your firstname"
                  />
                </div>
                <div className="input">
                  <span>
                    Last Name <label>*</label>
                  </span>
                  <input
                    type="text"
                    name="lname"
                    onChange={(e) => setLname(e.target.value)}
                    value={lname}
                    placeholder="Your lasttname"
                  />
                </div>
                <div className="input">
                  <span>
                    Phone Number <label>*</label>
                  </span>
                  <input
                    type="text"
                    name="phone"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    placeholder="Your Phone Number"
                  />
                </div>
                <div className="input">
                  <span>
                    E-mail <label>*</label>
                  </span>
                  <input
                    type="text"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Your E-Mail Address"
                  />
                </div>
                <div className="input">
                  <span>Subject</span>
                  <input
                    type="text"
                    name="subject"
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                    placeholder="Your Subject"
                  />
                </div>
                <div className="input">
                  <span>Your company</span>
                  <input
                    type="text"
                    name="company"
                    onChange={(e) => setCompany(e.target.value)}
                    value={company}
                    placeholder="Your Company"
                  />
                </div>
              </div>
              <div className="input inputlast">
                <span>
                  Write Your Message <label>*</label>
                </span>
                <textarea
                  id=""
                  cols="30"
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  placeholder="Your Message"
                  rows="10"
                ></textarea>
              </div>

              <button className="primary-btn">Submit Now</button>
            </form>
          </div>
          
                  <div className="side-content">
                      <h3>Visit our location</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae tempore vel quidem ad! Exercitationem, id culpa harum optio nemo aliquid.</p>
                      <br />
                      <h3>Message Us</h3>
                      <span>info@example.com</span>
                      <br />
                      <span>+012 456 7890</span>
                      <br />
                      
                      <div className="icon">
                          <h3>Follow Us</h3>
                          <div className="flex_space">
                              <i className="fab fa-facebook-f"></i>
                              <i className="fab fa-twitter"></i>
                              <i className="fab fa-linkedin"></i>
                              <i className="fab fa-instagram"></i>
                              <i className="fab fa-pinterest"></i>
                              <i className="fab fa-youtube"></i>
                          </div>
                      </div>
          </div>
        </div>
      </section>

      <section className="show-data">
        {allValue.map((currentValue) => {
          const { fname, lname, phone, email, subject, company, message } = currentValue;
          return (
            <div className="sign-box">
              <h1>Send Successfully</h1>
              <h3>
                First Name : <p>{fname}</p>
              </h3>
              <h3>
                Last Name : <p>{lname}</p>
              </h3>
              <h3>
                Phone number : <p>{phone}</p>
              </h3>
              <h3>
                E-mail : <p>{email}</p>
              </h3>
              <h3>
                Subject : <p>{subject}</p>
              </h3>
              <h3>
                Your Company : <p>{company}</p>
              </h3>
              <h3>
                Message : <p>{message}</p>
              </h3>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ContactForm;
