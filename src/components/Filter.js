import React, { useState } from 'react';
import { Icon } from '.';
import CloseIcon from '../assets/images/ic-close.svg';
import { FilterDrawer } from './';
import { Button } from 'react-bootstrap';

export const Filter = (props) => {
    const [visible, setVisible] = useState(false);
    const [filterData, setFilterData] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [clearFilters, setClearFilters] = useState(false);

    const showFilter = () =>setVisible(true);
    const handleRemove = e =>  setSelectedIndex(e);
    const clearFilter = () => setClearFilters(true);
    const setVisibles = (e) => {
        setSelectedIndex(null);
        setVisible(e);
    }
    const setFilterDatas = e =>{
        setClearFilters(false)
        setFilterData(e);
    }
    
  return (
    <div className="filterHolder">
        <p>Filters based on your profile</p>
        <div className="filterRow">
            <div className="filterWidget">
                <ul>
                    {filterData.map((items,i)=>{
                        return(
                            <li key={i}>
                                {items}
                                <span className='closeIcon' onClick={()=>handleRemove(i)}>
                                    <Icon src={CloseIcon}/>
                                </span>
                            </li>
                        )
                    })}
                </ul>
                
                <div className="filterCtrl">
                    <Button className='clearBtn'  onClick={clearFilter}>Clear all</Button>
                    <Button className='filtersBtn' onClick={showFilter}>Filters</Button>
                </div>
            </div>
        </div>
        <FilterDrawer visible={visible} setVisibles={(e) => setVisibles(e)} setFilterDatas={(e)=> setFilterDatas(e)} selectedIndex={selectedIndex} clearFilters={clearFilters} />
    </div>
  );
};
