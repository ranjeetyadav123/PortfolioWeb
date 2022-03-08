import "../Style/ContactMe.css";
import Phone from "../Data/Home/phone.png";
import Email from "../Data/Home/email.png";
// import Address from "../Data/Home/address.png";
import { Component, useContext, useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";

import React from "react";



const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)
    const [name, setName] = useState('')
    const [subject, setSubject] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')


    const nameChangeHandler = (e) => {
        setName(e.target.value)
    }
    const subjectChangeHandler = (e) => {
        setSubject(e.target.value)
    }
    const emailChangeHandler = (e) => {
        setEmail(e.target.value)
    }
    const massageChangeHandler = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Massage has been Sand')
        emailjs
            .sendForm(
                "service_s6br9lb",
                "template_wympwx9",
                formRef.current,
                "user_rlwtMwTeTIWATMDdVT0Q4"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true)
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };
    useEffect(() => {
        if(done){
            setName('');
            setSubject('');
            setEmail('');
            setMessage('');
        }
        else{
            setName('');
            setSubject('');
            setEmail('');
            setMessage('');
        }
    }, [done])


    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            +91 9594463225
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Email} alt="" />
                            iamranjeetsyadav@gmail.com
                        </div>
                        
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>What’s your story?</b> Get in touch. Always available for
                        freelancing if the right project comes along. me.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" value={name} onChange={nameChangeHandler} />
                        <input type="text" placeholder="Subject" name="user_subject" value={subject} onChange={subjectChangeHandler}/>
                        <input type="text" placeholder="Email" name="user_email" value={email} onChange={emailChangeHandler} />
                        <textarea rows="5" placeholder="Message" name="message" value={message} onChange={massageChangeHandler} />
                        <button type="submit">Submit</button>
                        {done &&  " Thank you..."}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;