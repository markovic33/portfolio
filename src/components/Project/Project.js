import React from 'react'
import './project.scss';
import img1 from '../../assets/imgs/kviz11.png';
import img2 from '../../assets/imgs/quiz22.png';
import img3 from '../../assets/imgs/movieApp.png';
import img4 from '../../assets/imgs/airbnb.png';
import img5 from '../../assets/imgs/cuk1.png';
import img6 from '../../assets/imgs/restoran1.png';
import img7 from '../../assets/imgs/tenzis33.png';
import img8 from '../../assets/imgs/travel.png';


const Project = () => {
  return (
    <div className='project'>
        <h1>My projects</h1>
        <div className='one'>
            <img src={img5} alt='img' />
            <img src={img6} alt='img' />
            <img src={img4} alt='img' />
            <img src={img7} alt='img' />
        </div>
        <div className='two'>
            <img src={img1} alt='img' />
            <img src={img3} alt='img' />
            <img src={img2} alt='img' />
            <img src={img8} alt='img' />
        </div>
    </div>
  )
}

export default Project