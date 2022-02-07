import React from 'react';
import { Logo, Icon } from './';
import icUser from '../assets/images/ic-user.svg';
import icGrid from '../assets/images/ic-grid.svg';
import icCheck from '../assets/images/ic-check.svg';
import icInfo from '../assets/images/ic-info.svg';

export const Sidebar = () => {

    const data =[
        {
            name: "profile",
            icon: icUser
        },
        {
            name: "profile",
            icon: icGrid
        },
        {
            name: "profile",
            icon: icCheck
        },
        {
            name: "profile",
            icon: icInfo
        },
    ]

    return (
        <div className="sideBar">
            <Logo/>
            <div className="navigationRow">
                {data.map((Item, i)=> {
                    return(
                    <a key={i} href="/" className='navLink'>
                        <Icon src={Item.icon}/>
                    </a>
                    )
                })}
            </div>
        </div>
     )
};
