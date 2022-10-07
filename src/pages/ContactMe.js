import {useState} from "react";

import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import styled from "styled-components";
import proImg from "../image/professional-profile-pic.JPG"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGithub, faLinkedin, faYoutube} from "@fortawesome/free-brands-svg-icons"
import { useEffect } from "react";
import { validateEmail, validateName, validateMessage } from "../components/Validation";
import InLineError from "../components/InLineError";

const ContactMe = () => {
  const [name,setName] = useState("")
  const [nameError,setNameError] = useState("")
  const [email,setEmail] = useState("")
  const [emailError,setEmailError] = useState("")
  const [message,setMessage] = useState("")
  const [messageError,setMessageError] = useState("")

  useEffect(() =>{
    validateName({name,setNameError})
    validateEmail({email,setEmailError})
    validateMessage({message,setMessageError})
  },[name,email,message])

    return (
        <ContactStyle
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        >
        <div className="container">
        
        <img className="square" alt="" />
        <div className="form">
          <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            <p className="text">
              From events needing a saxophonist to a professional needing
              a website created, I am always up for new challenges and 
              creating new experiences for people!
            </p>
  
            <div className="info">
              <img src={proImg} alt="" />
            </div>
  
            <div className="social-media">
              <p>Connect with me :</p>
              <div className="social-icons">
                <a href="https://www.youtube.com/channel/UCIL-NqaRlwymARo2uPe2KvA">
                    <FontAwesomeIcon 
                    icon={faYoutube}
                    size="2x"
                    />
                </a>
                <a href="https://github.com/kmooney225">
                    <FontAwesomeIcon 
                    icon={faGithub}
                    size="2x"
                     />
                </a>
                <a href="https://www.linkedin.com/in/kevin-mooney-b4abab165/">
                <FontAwesomeIcon 
                icon={faLinkedin}
                size="2x"
                 />
                </a>
              </div>
            </div>
          </div>
  
          <div className="contact-form">
            <form>
              <h3 className="title">Contact me :)</h3>
              <div className="input-container">
                <input 
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text" 
                placeholder="Name" 
                name="name" 
                className="input" 
                />
                {name && <InLineError error={nameError} />}
              </div>
              <div className="input-container">
                <input 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email" 
                placeholder="Email" 
                name="email" 
                className="input" 
                />
                {email && <InLineError error={emailError} />}
              </div>
              <div className="input-container textarea">
                <textarea 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message" 
                placeholder="How can I help?" 
                className="input" 
                /> 
                {message && <InLineError error={messageError} />}
              </div>
              <input type="submit" value="Send" className="btn" />
            </form>
          </div>
        </div>
      </div>
      </ContactStyle>
    )
  
}

const ContactStyle = styled(motion.div)`
    .container {
    z-index: 1;
    position: relative;
    width: 100%;
    min-height: 90vh;
    padding: 2rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    }

    .form {
    width: 100%;
    max-width: 820px;
    background: linear-gradient(to top left, #fff, #bbb);
    border-radius: 10px;
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    }

    .contact-form {
    background: linear-gradient(to bottom right, #dd0000, #600000);
    position: relative;
    }

    .contact-form:before {
    content: "";
    position: absolute;
    width: 26px;
    height: 26px;
    background: #d00000;
    transform: rotate(45deg);
    top: 50px;
    left: -13px;
    }

    form {
    padding: 2.3rem 2.2rem;
    z-index: 10;
    overflow: hidden;
    position: relative;
    }

    .title {
    color: #fff;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1;
    margin-bottom: 0.7rem;
    font-size: 32px;
    }

    .input-container {
    position: relative;
    margin: 1rem 0;
    }

    .input {
    width: 100%;
    outline: none;
    border: 2px solid #fafafa;
    background: none;
    padding: 0.6rem 1.2rem;
    color: #fff;
    font-weight: 500;
    font-size: 0.95rem;
    letter-spacing: 0.5px;
    border-radius: 25px;
    transition: 0.3s;
    ::placeholder { 
      color: #aaa;
      opacity: 1;
    }
    }

    textarea.input {
    padding: 0.8rem 1.2rem;
    min-height: 150px;
    border-radius: 22px;
    resize: none;
    overflow-y: auto;
    }

    .input-container label {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    padding: 0 0.4rem;
    color: #fafafa;
    font-size: 0.9rem;
    font-weight: 400;
    pointer-events: none;
    z-index: 1000;
    transition: 0.5s;
    }

    .input-container.textarea label {
    top: 1rem;
    transform: translateY(0);
    }

    .btn {
    padding: 0.6rem 1.3rem;
    background-color: #fff;
    border: 2px solid #fafafa;
    font-size: 0.95rem;
    color: #ff0000;
    line-height: 1;
    border-radius: 25px;
    outline: none;
    cursor: pointer;
    transition: 0.3s;
    margin: 0;
    }

    .btn:hover {
    background-color: transparent;
    color: #fff;
    }

    .input-container span {
    position: absolute;
    top: 0;
    left: 25px;
    transform: translateY(-50%);
    font-size: 0.8rem;
    padding: 0 0.4rem;
    color: transparent;
    pointer-events: none;
    z-index: 500;
    }

    .input-container span:before,
    .input-container span:after {
    content: "";
    position: absolute;
    width: 10%;
    opacity: 0;
    transition: 0.3s;
    height: 5px;
    background-color: #ff0000;
    top: 50%;
    transform: translateY(-50%);
    }

    .input-container span:before {
    left: 50%;
    }

    .input-container span:after {
    right: 50%;
    }

    .input-container.focus label {
    top: 0;
    transform: translateY(-50%);
    left: 25px;
    font-size: 0.8rem;
    }

    .input-container.focus span:before,
    .input-container.focus span:after {
    width: 50%;
    opacity: 1;
    }

    .contact-info {
    padding: 2.3rem 2.2rem;
    position: relative;
    }

    .contact-info .title {
    color: #900000;
    }

    .text {
    color: #200000;
    margin: 1.5rem 0 2rem 0;
    }
    .info {
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }

    .icon {
    width: 28px;
    margin-right: 0.7rem;
    }

    .social-media {
    padding: 2rem 0 0 0;
    }

    .social-media p {
    color: #333;
    }

    .social-icons {
    display: flex;
    margin-top: 0.5rem;
    }

    .social-icons a {
    width: 35px;
    height: 30px;
    border-radius: 5px;
    background: linear-gradient(45deg, #900000, #ee0000);
    color: #fff;
    text-align: center;
    line-height: 35px;
    margin-right: 0.5rem;
    transition: 0.3s;
    }

    .social-icons a:hover {
    transform: scale(1.05);
    }

    .contact-info:before {
    content: "";
    position: absolute;
    width: 110px;
    height: 100px;
    border: 22px solid #ff0000;
    border-radius: 50%;
    bottom: -77px;
    right: 50px;
    opacity: 0.3;
    }

    .square {
    position: absolute;
    height: 400px;
    top: 50%;
    left: 50%;
    transform: translate(181%, 11%);
    opacity: 0.2;
    }

    @media (max-width: 850px) {
    .form {
        grid-template-columns: 1fr;
    }


    .contact-info:before {
        bottom: initial;
        top: -75px;
        right: 65px;
        transform: scale(0.95);
        
    }

    .contact-form:before {
        top: -13px;
        left: initial;
        right: 70px;
        background: #a70000
    }

    .square {
        transform: translate(140%, 43%);
        height: 350px;
    }

    .text {
        margin: 1rem 0 1.5rem 0;
    }

    .social-media {
        padding: 1.5rem 0 0 0;
    }
    }

    @media (max-width: 480px) {
    .container {
        padding: 1.5rem;
    }

    .contact-info:before {
        display: none;
    }

    form,
    .contact-info {
        padding: 1.7rem 1.6rem;
    }

    .text,
    .social-media p {
        font-size: 0.8rem;
    }

    .title {
        font-size: 1.15rem;
    }

    .social-icons a {
        width: 30px;
        height: 30px;
        line-height: 30px;
    }

    .icon {
        width: 23px;
    }

    .input {
        padding: 0.45rem 1.2rem;
    }

    .btn {
        padding: 0.45rem 1.2rem;
    }
    }
`

export default ContactMe;