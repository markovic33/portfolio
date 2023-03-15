import React from 'react'
import './contact.scss';
import Animated from '../AnimatedLetters/Animated';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Contact = () => {
    const position = [43.302287367344974, 22.00238049801134]
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
            .sendForm('service_805rrp2', 'template_ugf4fne', form.current, 'mqUne9AHpdwrWsDaa')
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                 },
                  () => {
                    alert('Failed to send the message, please try again')
            });
        };

  return (
    <div className='container contact-page'>
        <div className='text-zone'>
            <h1>
                <Animated
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                    idx={15}
                />
            </h1>
            <p>
                I am interested in freelance opportunities - especially on ambitious
                or large projects. However, if you have any other requests or
                questions, don't hesitate to contact me using below form either.
            </p>
            <div className='contact-form'>
                <form ref={form} onSubmit={sendEmail}> 
                    <ul>
                    <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
                    </ul>
                </form>
            </div>
        </div>

        <div className='info-map'>
            Jovan Markovic,
            <br />
            Serbia,
            Milana Obrenovica 18, 18000 <br />
            Niska Banja <br />
            <span>jovamarkovic3@gmail.com</span>
        </div>

        <div className='map-wrap'>
            <MapContainer center={position} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={position}>
                    <Popup>I am here, come over for a cup of coffee :)</Popup>
                </Marker>
            </MapContainer>
        </div>
    </div>
  )
}

export default Contact