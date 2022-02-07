/* eslint-disable no-undef */
    /* eslint-disable no-extend-native */
import React, {useEffect, useState} from 'react';
import { Icon, Sort } from './';
import { Card, Button } from 'react-bootstrap';
import ProductData from '../utils/data.json';
import icLikeDefault from '../assets/images/ic-like-default.svg';
import icLiked from '../assets/images/ic-liked.svg';

export const Product = () => {

    const [selectedIndex, setSelectedindex] = useState(null);

    useEffect(() => {
        let isLoad = true;
        if (isLoad)  masonary()
        return () => {
            isLoad = false;
        };

    }, []);

    // MASONARY 
    const masonary = () =>{
        let intViewportWidth = window.innerWidth;
        let totalRows = intViewportWidth > 991 ? 4 : 2,
        newCol = '',
        itemCol = 0;
        itemCol = 0;
    
        for(var rowCount = 0; rowCount < totalRows; rowCount++){
            newCol = document.createElement('div');
            newCol.className = 'col';
            document.getElementsByClassName('masonry-wrapper')[0].appendChild(newCol);
        }
    
        for(var itemCount = 0; itemCount < document.getElementsByClassName('card').length; itemCount++){
            document.getElementsByClassName('col')[itemCol].appendChild(document.getElementsByClassName('card')[0]);
            if(itemCol < totalRows - 1){
                itemCol++; 
            } else {
                itemCol = 0;
            }
        }
    }


    const handleclic = e =>  setSelectedindex(e)

  return(
    <div className='product-items'>
        <div className='sort-widget'>
            <h2 className='sort-title'>Showing 26 Product</h2>
            <div className='sort-ctrl'>
                <Sort/>
            </div>
        </div>
        <div className='masonry-wrapper' >
            {ProductData?.data?.map((items, i) => {
                return(
                    <Card key={i}>
                        <Button variant='like' onClick={()=>handleclic(i)}>
                            <Icon src={selectedIndex === items.ID ? icLiked : icLikeDefault}/>
                        </Button>
                        
                        <Card.Img variant="top" src={require( '../assets/images/' +  items.image)} />
                        <Card.Body>
                            <Card.Title>{ items.title }</Card.Title>
                            <Card.Text>{ items.details }</Card.Text>
                            <Card.Text className='mb-0'><b>Rs.{ items.price }</b></Card.Text>
                            <div class="bte-wrp">
                            <Button variant="primary">Add to Cart</Button>
                            </div>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>

    </div>
  )
};
