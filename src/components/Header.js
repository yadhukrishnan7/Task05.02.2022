import React from 'react';
import { Icon } from './';

import imgUser from '../assets/images/img-user.png';
import icLike from '../assets/images/ic-like.svg';
import icCart from '../assets/images/ic-cart.svg';
//import icDown from '../assets/images/ic-down.svg';
import icSearch from '../assets/images/ic-search.svg';
import imgLogo from '../assets/images/img-logo-blue.svg';
import { Dropdown } from 'react-bootstrap';


export const Header = () => {
  
  return (
    <div className="header-widget">
      <h1>Hi John!</h1>
      <div className="header-ctrl">
        {/* HEADER SEARCH */}
        <div className="search-row">
          <span className="search-icon">
            <Icon src={icSearch}/>
          </span>
          <input type="text" className='search-ctrl' placeholder='Search for products, brands and more' />
        </div>

        {/* ICON CTRL */}
        <div className="icon-ctrl-row">
          <a className='ctrl-icon' href="/">
              <Icon src={icLike}/>
          </a>
          <a className='ctrl-icon' href="/">

              <span className={`status-icon active`}></span>

              <Icon src={icCart}/>
          </a>
        </div>

        {/* USER CTRL */}
        <div className="user-ctrl-row">
          <a href='/' className="sm-logo">
            <Icon src={imgLogo}/>
          </a>
          <Dropdown>
            <Dropdown.Toggle variant="default" id="dropdown-basic">
              <Icon src={imgUser}/>
              <span>John Paul</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
  </div>
  );
};
