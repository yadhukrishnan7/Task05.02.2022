import React from 'react';
import { Image } from 'react-bootstrap';
import ImgLogo from '../assets/images/img-logo.svg';

export const Logo = () => {
  return(
    <a href='/' className='brand-icon'>
        <Image src={ ImgLogo }/>
    </a>
  );
};
