import React, { useState } from 'react'
import './home.scss';
import main from '../../assets/images/jj.png';
import { Link } from 'react-router-dom';
import Animated from '../AnimatedLetters/Animated';
import Logo from './Logo/Logo';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = [' ','J', 'o', 'v', 'a', 'n']
  const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.',]
  
  return (
    <div className='container home-page'>
        <div className='text-zone'>
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <Animated 
                  letterClass={letterClass} 
                  strArray={nameArray}
                  idx={15}
                />
                <br />
                <Animated 
                  letterClass={letterClass} 
                  strArray={jobArray}
                  idx={22}
                />
            </h1>
            <h2>Frontend Developer / Java Script / React</h2>
            <Link to='/contact' className='flat-button'>CONTACT ME</Link>
        </div>
        <Logo />
    </div>
  )
}

export default Home