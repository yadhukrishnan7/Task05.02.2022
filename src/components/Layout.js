import React from 'react';
import { Sidebar,Header } from './';

export const Layout = (props) => {
  return <div className={`app-layout ${props.className}`}>
    <Sidebar/>
    <div className="contentWidget">
        <Header/>
        {props.children}
    </div>
  </div>;
};

