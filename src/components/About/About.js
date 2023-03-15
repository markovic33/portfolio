import React from 'react'
import './about.scss';
 
import Animated from '../AnimatedLetters/Animated';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitAlt, faJsSquare, faReact, faHtml5, faCss3 } from '@fortawesome/free-brands-svg-icons';


const About = () => {
  return (
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <Animated 
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                />
            </h1>
            <p>I like getting into the unknown and solving problems.I see programming as a very broad area where I can make a lot of progress.</p>
            <p>If I need to define myself in one sentence that would be a family
            person, a sports fanatic, a car enthusiast and tech-obsessed.</p>
            <p>I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.</p>
        </div>

        <div className='stage-cube-cont'>
            <div className='cubespinner'>
                <div className='face1'>
                    <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                </div>
                <div className='face2'>
                    <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                </div>
                <div className='face3'>
                    <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                </div>
                <div className='face4'>
                    <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                </div>
                <div className='face5'>
                    <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
                </div>
            </div>
        </div>

    </div>
    
  )
}

export default About
