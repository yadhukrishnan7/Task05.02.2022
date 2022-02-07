import React from 'react';
import { Select } from 'antd';

export const Sort = () => {
    const { Option } = Select;
    
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    }

    return (
        <div className='product-sort d-flex align-items-center'>
            <label>Sort by:</label>
            <Select defaultValue="1" onChange={handleChange}>
                <Option value="1">newest to oldest</Option>
                <Option value="2">newest to oldest</Option>
                <Option value="3">yiminghe</Option>
            </Select>
        </div>
    );
};


