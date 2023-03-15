import React from 'react'
import './sidebar.scss';
import { Link, NavLink } from 'react-router-dom'
import main from '../../assets/images/jj.png';
import name from '../../assets/images/name.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faHome, faUser, faUsersRectangle} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={main} alt='main' />
            <img src={name} className='sub-logo' alt='logo' />
        </Link>
        <nav>
          <NavLink exact="true" activeclassname='active' to='/' >
            <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
          </NavLink>
          <NavLink exact="true" activeclassname='active' className='project-link' to='/project' >
            <FontAwesomeIcon icon={faUsersRectangle} color='#4d4d4e' />
          </NavLink>
          <NavLink exact="true" activeclassname='active' className='about-link' to='/about' >
            <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
          </NavLink>
          <NavLink exact="true" activeclassname='active' className='contact-link' to='/contact' >
            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
          </NavLink>`
        </nav>
        <ul>
          <li>
            <a 
              target="_blank" 
              rel='noreferrer' 
              href='https://www.linkedin.com/in/jovanmarkovic9'>
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a 
              target="_blank" 
              rel='noreferrer' 
              href='https://github.com/markovic33'>
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>
          <li>
            <a 
              target="_blank" 
              rel='noreferrer' 
              href='skype:live:jovanmarkovic9'>
              <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
            </a>
          </li>
        </ul>
        
    </div>
  )
}

export default Sidebar