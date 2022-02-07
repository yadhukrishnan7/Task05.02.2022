/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Drawer, Checkbox } from 'antd';
import { Button, Col, Row } from 'react-bootstrap';

export const FilterDrawer = (props) => {

  const [visible, setVisible] = useState(false);
  const [filterValues, setFilterValues] = useState([]);
  const [placement, setPlacement] = useState('right');

  useEffect(() => {
    let isLoad = true;
    let intViewportWidth = window.innerWidth;

    if(isLoad){
        if(props.visible) setVisible(props.visible)
        if(props.selectedIndex) removeFilter(props.selectedIndex)
        if(props.clearFilters) clearFilter(props.clearFilters)
        if(intViewportWidth < 767) setPlacement('bottom')
    }
    return () => {
        isLoad = false;
    };
  }, [props.visible, props.selectedIndex, props.clearFilters]);
  

  const removeFilter = e => {
    const newList = filterValues.filter((item,i) => i !== e);
    setFilterValues(newList);
    props.setFilterDatas(newList)
  }

  const clearFilter = e => {
    setFilterValues([]);
    props.setFilterDatas([]);
  }

  const onChange = (checkedValues) => {
    setFilterValues(checkedValues)
  }

  const handleClick= () => {
      props.setFilterDatas(filterValues)
      onClose();
  }

  const onClose = () => {
    setVisible(false);
    props.setVisibles(false);
  };

  function handleTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("filter-row");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }


  return (
    <>
      <Drawer className='filter-modal' title="Filters" placement={placement} onClose={onClose} visible={visible}>
            <div className='tabGrid'>
                <div className='nav-tab'>
                    <ul>
                        <li className={`tablinks active`} onClick={(e)=>handleTab(e,'tabOne')}>Gender</li>
                        <li className={`tablinks`} onClick={(e)=>handleTab(e,'tabTwo')}>Price</li>
                        <li className={`tablinks`} onClick={(e)=>handleTab(e,'tabThree')}>Categories</li>
                        <li className={`tablinks`} onClick={(e)=>handleTab(e,'tabFour')}>Color</li>
                    </ul>
                </div>
                <div className='filter-container'>
                    <Checkbox.Group onChange={onChange} value={filterValues} >
                        <div id="tabOne" className={`filter-row show`}>
                            <div className="filter-check-row">
                                <div className="filter-check-list">
                                        <Row className='to6px'>
                                            <Col sm={6} className="gender-list">
                                                <Checkbox value="men">Men</Checkbox>
                                            </Col>
                                            <Col sm={6} className="gender-list">
                                                <Checkbox value="women">Women</Checkbox>
                                            </Col>
                                            <Col sm={6} className="gender-list">
                                                <Checkbox value="boys">Boys</Checkbox>
                                            </Col>
                                            <Col sm={6} className="gender-list">
                                                <Checkbox value="girls">Girls</Checkbox>
                                            </Col>
                                        </Row>
                                </div>
                            </div>
                        </div>
                        <div id="tabTwo" className={`filter-row`}>
                            <strong>Price</strong>
                            <Row className='to6px'>
                                <Col sm={6}>
                                    <div className='mb-1'>
                                        <Checkbox value="c001">Rs. 6172 to Rs. 10347 <span className='num-label'>(16)</span></Checkbox>
                                    </div>
                                    <div className='mb-1'>
                                        <Checkbox value="c002">Rs. 14522 to Rs. 18697<span className='num-label'>(5)</span></Checkbox>
                                    </div>
                                    <div className='mb-1'>
                                        <Checkbox value="c003">Rs. 1997 to Rs. 6172 <span className='num-label'>(106)</span></Checkbox>
                                    </div>
                                    <div className='mb-1'>
                                        <Checkbox value="c004">Rs. 10347 to Rs. 14522 <span className='num-label'>(14)</span></Checkbox>
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className='mb-1'>
                                        <Checkbox value="c005">Rs. 10347 to Rs. 14521 <span className='num-label'>(14)</span></Checkbox>
                                    </div>
                                    <div className='mb-1'>
                                        <Checkbox value="c006">Rs. 14522 to Rs. 18697 <span className='num-label'>(5)</span></Checkbox>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div id="tabThree" className={`filter-row `}>
                            <strong>Categories</strong>
                            <Row className='to6px'>
                                <Col sm={6}>
                                    <div className='mb-1'>
                                        <Checkbox value="tshirts">Tshirts <span className='num-label'>(106)</span></Checkbox>
                                    </div>
                                    <div className='mb-1'>
                                        <Checkbox value="sportsShoes">Sports Shoes<span className='num-label'>(156)</span></Checkbox>
                                    </div>
                                    <div className='mb-1'>
                                        <Checkbox value="casualShoes">Casual Shoes<span className='num-label'>(174)</span></Checkbox>
                                    </div>
                                    <div className='mb-1'>
                                        <Checkbox value="shorts">Shorts <span className='num-label'>(5)</span></Checkbox>
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className='mb-1'>
                                        <Checkbox value="trackPants">Track Pants<span className='num-label'>(106)</span></Checkbox>
                                    </div>
                                    <div className='mb-1'>
                                        <Checkbox value="tights">Tights<span className='num-label'>(156)</span></Checkbox>
                                    </div>
                                    <div className='mb-1'>
                                        <Checkbox value="sweatshirts">Sweatshirts<span className='num-label'>(174)</span></Checkbox>
                                    </div>
                                    <div className='mb-1'>
                                        <Checkbox value="tops">Tops<span className='num-label'>(5)</span></Checkbox>
                                    </div>
                                </Col>
                                <Col sm={12}>
                                    <a href="/" className='more-link'>+ 18 more</a>
                                </Col>
                            </Row>
                        </div>
                        <div id="tabFour" className={`filter-row`}>
                            <strong>Color</strong>
                            <Row className='to6px'>
                                <Col sm={12}>
                                    <div className='mb-2'>
                                        <Checkbox  value="black"><span className='color-col' style={{background: '#323F39'}}></span> Black <span className='num-label'>(106)</span></Checkbox>
                                    </div>
                                    <div className='mb-2'>
                                        <Checkbox  value="white"><span className='color-col' style={{backgroundColor: '#fff', border: '1px solid rgba(0, 0, 0, 0.26)'}}></span> White <span className='num-label'>(156)</span></Checkbox>
                                    </div>
                                    <div className='mb-2'>
                                        <Checkbox  value="blue"><span className='color-col' style={{backgroundColor: '#005EBB'}}></span> Blue <span className='num-label'>(174)</span></Checkbox>
                                    </div>
                                    <div className='mb-2'>
                                        <Checkbox  value="pink"><span className='color-col' style={{backgroundColor: '#FE9898'}}></span> Pink <span className='num-label'>(5)</span></Checkbox>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Checkbox.Group>
                </div>
            </div>
            <div className='filter-btn-row'>
                <Button className="clear-btn" onClick={clearFilter}>Clear all</Button>
                <Button className="apply-btn" onClick={handleClick}>Apply</Button>
            </div>
      </Drawer>
    </>
  );
};